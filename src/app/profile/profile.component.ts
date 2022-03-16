import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private loginService : LoginService
  ) { }

  user : User = null

  status = ['Done','Pending','Cancelled']
  
  ngOnInit(): void {
    this.loginService.checkLogin()
    this.user = this.loginService.getUser()
  }

}
