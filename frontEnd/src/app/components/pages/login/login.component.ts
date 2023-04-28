import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  loggedUserId!: string
  passwordVisible: boolean = false
  constructor(
    private fb: FormBuilder,
    private authService:AuthServiceService
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })


  }
  get fc() {
    return this.form.controls
  }
  onSubmit() {
    this.authService.getLogin(this.form.value.email,this.form.value.password).subscribe({
      next:(res)=>console.log(res)
    })
  }
  onTogglePasswordShow() {
    this.passwordVisible = !this.passwordVisible
  }
}
