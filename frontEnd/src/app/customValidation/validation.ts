import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidators():ValidatorFn{
return (formGroup:AbstractControl):ValidationErrors | null=>{

  const password=formGroup.get('password')
  const confirmPassword=formGroup.get('confirmPassword')

  if (password?.value !== confirmPassword?.value) {
    return {
      passwordsMissMatch: true,
    };
  }

  return null;

}
}
