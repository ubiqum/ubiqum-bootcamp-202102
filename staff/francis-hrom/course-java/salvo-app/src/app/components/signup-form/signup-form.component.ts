import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });
  public signupError: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      this.signupService.signup(email, password).subscribe(
        (data) => {
          if (data.status === 201) {
            console.log('ACCOUNT CREATED');
            this.router.navigate(['/']);
          } else {
            console.log('Error during signup.');
          }
        },
        (error) => (this.signupError = error)
      );
    } else {
      console.log('Invalid signup form.');
    }
  }
}
