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
export class LoginService {
  private endPoint: string = environment.salvoApi + '/login';
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}
  /**
   *
   * @param email: string, email from the login form data
   * @param password: string,  password from the login form data
   */

  login(
    email: string,
    password: string
  ): Observable<HttpResponse<CommonResponse>> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // const httpOptions = {
    //   withCredentials: true,
    //   observe: 'response'
    // };

    return this.http
      .post<CommonResponse>(this.endPoint, formData, {
        withCredentials: true,
        observe: 'response',
      })
      .pipe(
        tap((resp: HttpResponse<any>) => {
          const cookie = resp.headers.get('x-auth');
          console.log(resp);
          console.log(resp.headers);
          console.log(cookie);

          if (cookie) {
            this.cookieService.set('currentUser', cookie);
            this.loginStatus.next(true);
          }
          return resp;
        }),
        catchError(this.handleError)
      );
  }

  /**
   *
   * @param error error
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 401) {
      return throwError('Wrong email or password.');
    } else {
      return throwError(
        'We are currently experiencing technical difficulties; please try again later.'
      );
    }
  }

  logout() {
    this.loginStatus.next(false);
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }

  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return this.cookieService.check('currentUser');
  }
}
