import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private authService:AuthServiceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }
  get fc() {
    return this.form.controls
  }
  onFormSubmit(){
    if(this.form.value.password===this.form.value.confirmPassword){
      this.authService.getRegister(this.form.value).subscribe(console.log)
    }else{
      console.log("confirm password is wrong")
    }
  }
}
