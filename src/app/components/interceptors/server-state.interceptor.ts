import {makeStateKey, TransferState} from '@angular/platform-browser';
import {
  HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import * as memoryCache from 'memory-cache';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(
    private transferState: TransferState,
    private ngZone: NgZone
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpResponse<any> | HttpProgressEvent | HttpUserEvent<any>> {
    const cachedData = memoryCache.get(req.url);
    if (cachedData) {
      this.transferState.set(makeStateKey(req.url), cachedData);
      return of(new HttpResponse({body: cachedData, status: 200}));
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.transferState.set(makeStateKey(req.url), event.body);
          this.ngZone.runOutsideAngular(() => {
            memoryCache.put(req.url, event.body, 1000 * 60);
          });
        }
      })
    );

  }
}
