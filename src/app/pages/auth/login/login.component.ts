import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ControlsOf} from '../../../utils/type-utils';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {LoginModel} from "../../../core/model/login.model";
import {LoginService} from "../../../core/services/login.service";
import {emailValidator} from "../../../shared/validators/email.validator";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  invalidCredentials: boolean = false;
  loginForm: FormGroup<ControlsOf<LoginModel>>;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.nonNullable.control('', [Validators.required, emailValidator()]),
      password: this.fb.nonNullable.control('', [Validators.required])
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginModelPartial: Partial<LoginModel> = this.loginForm.value;
      this.loginService.logIn((<LoginModel>loginModelPartial));
      this.loginForm.controls.email.touched
    }
  }

  isControlInvalid(control: string, error: string) {
    return this.loginForm.get(control)?.hasError(error);
  }

}
