import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ControlsOf} from '../../utils/type-utils';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

interface Credentials {
  username: string;
  password: string;
}

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
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup<ControlsOf<Credentials>>;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.nonNullable.control('',   [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)])
    });
  }

  onLogin() {}

}
