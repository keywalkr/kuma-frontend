import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchValidator(input: string): ValidatorFn {
  console.log('Match Validator called...')
  return (control: AbstractControl): ValidationErrors | null => {

    if (!input) {
      console.log('Match Validator called 1...')
      return null;
    }

    const input1 = control.get(input);
    const match = control;

    if (input1?.errors || match?.errors) {
      console.log('Match Validator called 2...')
      return null;
    }

    console.log('Match Validator called 3...')
    return (input1?.value !== match.value) ? {match: true} : null;
  }
}
