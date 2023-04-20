import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup
  loggedUserId!: string
  passwordVisible: boolean = false
  constructor(
    private fb: FormBuilder,
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
    console.log(this.form)
  }
  onTogglePasswordShow() {
    this.passwordVisible = !this.passwordVisible
  }
}
