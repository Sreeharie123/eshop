import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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
    private route:Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }
  get fc() {
    return this.form.controls
  }
  onFormSubmit(){
    if(this.form.value.password===this.form.value.confirmPassword){
      this.authService.getRegister(this.form.value).subscribe({
        next:(user)=>{
           console.log(user);
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
