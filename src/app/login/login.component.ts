import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private loginService: LoginService,
      private tostr: ToastrService
  ) { }

  ngOnInit() {
    this.loginService.checkLogin();
  }

  async submitLoginForm(loginForm:any) {
    const { cin,password } = loginForm.value
    this.loginService.login(cin,password)
  }
}
