import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidators():ValidatorFn{
return (control:AbstractControl):ValidationErrors | null=>{

  const password=control.get('password')
  const confirmPassword=control.get('confirmPassword')

  if (password?.value !== confirmPassword?.value) {
    return {
      passwordsMissMatch: true,
    };
  }

  return null;

}
}
