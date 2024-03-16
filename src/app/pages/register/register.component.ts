import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCard, MatCardContent, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { ControlsOf } from "../../utils/type-utils";
import { RouterLink } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";

interface RegistrationData {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  verifyPassword: string;
  terms: boolean;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton, RouterLink, MatCheckbox, MatCardSubtitle],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  title = "Welcome."

  registerForm: FormGroup<ControlsOf<RegistrationData>>;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: this.fb.nonNullable.control('',   [Validators.required]),
      lastname: this.fb.nonNullable.control('',   [Validators.required]),
      email: this.fb.nonNullable.control('',   [Validators.required, Validators.email]),
      username: this.fb.nonNullable.control('',   [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
      verifyPassword: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
      terms: this.fb.nonNullable.control(false, [Validators.requiredTrue])
    });
  }

  onLogin() {}
}
