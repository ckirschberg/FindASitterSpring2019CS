import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DateInterceptor implements HttpInterceptor {

  // https://gist.github.com/martinobordin/39bb1fe3400a29c1078dec00ff76bba9

// Migrated from AngularJS https://raw.githubusercontent.com/Ins87/angular-date-interceptor/master/src/angular-date-interceptor.js
iso8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log("interceptor");
  return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      const body = event.body;
      this.convertToDate(body);
    }
  }, (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
      }
    }
  }));
}

convertToDate(body) {
  if (body === null || body === undefined) {
    return body;
  }

  if (typeof body !== 'object') {
    return body;
  }

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (this.isIso8601(value)) {
      body[key] = new Date(value);
    } else if (typeof value === 'object') {
      this.convertToDate(value);
    }
  }
}

isIso8601(value) {
  if (value === null || value === undefined) {
    return false;
  }

  return this.iso8601.test(value);
}
}