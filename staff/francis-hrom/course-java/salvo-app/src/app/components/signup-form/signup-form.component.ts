import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm = this.formBuilder.group({
    username: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });
  isSuccessful: Boolean = false;
  isSignUpFailed: Boolean = false;
  public errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private authService: AuthService,
    private loginComponent: LoginComponent
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      const username = this.signupForm.get('username')?.value;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;

      this.authService.register(username, email, password).subscribe(
        (data) => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.loginComponent.login(username, password);
          //.then(() => console.log('Login finished'));
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    } else {
      this.errorMessage = 'Invalid form, please contact customer support.';
      this.isSignUpFailed = true;
    }
  }
}

// onSubmit(): void {
//   if (this.signupForm.valid) {
//     const email = this.signupForm.get('email')?.value;
//     const password = this.signupForm.get('password')?.value;
//     this.signupService.signup(email, password).subscribe(
//       (data) => {
//         if (data.status === 201) {
//           console.log('ACCOUNT CREATED');
//           this.router.navigate(['/']);
//         } else {
//           console.log('Error during signup.');
//         }
//       },
//       (error) => (this.signupError = error)
//     );
//   } else {
//     console.log('Invalid signup form.');
//   }
// }
