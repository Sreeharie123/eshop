import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  passwordVisible: boolean = false
  form!:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthServiceService){}

  ngOnInit(): void {

    this.form=this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }
  get fc(){
    return this.form.controls;
  }

onSubmit(){
 const email:string=this.form.value.email
 const password:string=this.form.value.password
 this.authService.getLogin(email,password).subscribe(console.log)
}

  onTogglePasswordShow() {
    this.passwordVisible = !this.passwordVisible
  }
}
