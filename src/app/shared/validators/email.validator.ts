import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

const EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const valid = EMAIL_REGEXP.test(value);

    return !valid ? {pattern: true} : null;
  }
}
