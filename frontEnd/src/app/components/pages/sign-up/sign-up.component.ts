import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { passwordMatchValidators } from 'src/app/customValidation/validation';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService:AuthServiceService,
    private tostr:ToastrService,
    private route:Router,
  ) {
    this.form = this.fb.group(
      {
      firstName:['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }
    )

   }
  ngOnInit(): void {
  }
  get controls() {
    return this.form.controls
  }
  onFormSubmit(){
    if (this.form.invalid) {
      for (const key in this.controls) {
        this.controls[key].markAsDirty();
      }
      return;
    }else{
      if(this.form.value.password===this.form.value.confirmPassword){
        this.authService.getRegister(this.form.value).subscribe({
          next:(user)=>{
             this.route.navigate(['/login'])
          },
          error:(error)=>{
          this.tostr.error(error.error)
          },
          complete:()=>{
            this.tostr.success("Registration successfully")
          }
        })
      }else{
        this.tostr.warning("Wrong confirm password")
      }
    }

  }
}
