import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const EMAIL_REGEXP =
  /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export function EmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const forbidden = EMAIL_REGEXP.test(control.value);

    return forbidden ? { invalidEmail: {value: control.value}} : null; };
}
