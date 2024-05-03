import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { EMAIL_PATTERN } from "./validator.constant";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    return !EMAIL_PATTERN.test(value)? {pattern: true} : null;
  }
}
