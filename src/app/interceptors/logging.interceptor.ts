import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private loggingService: LoggingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loggingService.log(`Outgoing Request: ${request.url}`);

    return next.handle(request).pipe(
      tap((event) => {
        this.loggingService.log(`Incoming Response: ${JSON.stringify(event)}`);
      })
    );
  }
}
