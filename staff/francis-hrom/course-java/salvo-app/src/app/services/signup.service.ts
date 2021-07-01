import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private endPoint: string = environment.salvoApi + '/players/create';

  constructor(private http: HttpClient, private router: Router) {}
  /**
   *
   * @param email: string, email from the signup form data
   * @param password: string,  password from the signup form data
   */

  signup(email: string, password: string): Observable<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return (
      this.http
        //.post<CommonResponse>(this.endPoint, formData, { observe: 'response' })
        .post<HttpResponse<any>>(this.endPoint, formData, {
          observe: 'response',
        })
        .pipe(
          tap((res: HttpResponse<any>) => {
            return res;
          }),
          catchError(this.handleError)
        )
    );
  }

  /**
   *
   * @param error error
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 403) {
      return throwError('Account with this email already exists.');
    } else {
      return throwError(
        'We are currently experiencing technical difficulties; please try again later.'
      );
    }
  }
}
