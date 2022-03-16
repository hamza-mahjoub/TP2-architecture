import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/model/user.model';
import { LoginService } from '../login/services/login.service';
import { USERS } from '../shared/database';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly toastr: ToastrService,
    private readonly loginService: LoginService,
    private readonly registerService : RegisterService
  ) { }

  ngOnInit(): void {
    this.loginService.checkLogin();
  }

  sumbitRegisterForm(registerForm) {
    const { cin, password, phoneNumber, governorate, firstName, lastName, email, birthDate } = registerForm.value
    if (password !== registerForm.value.confirmPassword)
      this.toastr.error("password must be equal to confirmPassword!");
    else if (isNaN(cin) && isNaN(parseFloat(cin)))
      this.toastr.error("not a valide CIN !");
    else if (isNaN(phoneNumber) && isNaN(parseFloat(phoneNumber)))
      this.toastr.error("not a valide Phone Number !");
    else {
      this.registerService.register(registerForm.value)
    }
  }

}
