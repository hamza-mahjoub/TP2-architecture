import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../shared/model/user.model';
import { ToastrService } from 'ngx-toastr';
import { USERS } from 'src/app/shared/database';
import { ROLE } from 'src/app/shared/sharedEnums';


@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(
        private router: Router,
        private readonly toastr: ToastrService,
    ) {
    }

    login(cin: any, password: any) {
        console.log(cin,password);
        const user = USERS.find(user => user.cin === cin);
        if(user){
            if(user.password === password ){
                this.toastr.success(`Welcome back ${user.firstName} ${user.lastName}`)
                localStorage.setItem('user',JSON.stringify(user))
                this.router.navigate(['/profile'])
            }else{
                this.toastr.error(`Incorrect Credentials!`)
            }
        }
        else{
            this.toastr.error(`Cin is not registred in database!`)
        }
    }

    logout() {
        this.toastr.info("See you later!")
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    isAuthenticated() {
        if(localStorage.getItem("user")){  
            return true
        }
        else  
            return false
    }

    checkLogin(){
        if(this.isAuthenticated())
            this.router.navigate(['/profile'])
    }

    getUser(){
        return JSON.parse(localStorage.getItem("user"))
    }

    isAdmin(){
        const user = this.getUser()
        return user.role === ROLE.Admin
    }
}