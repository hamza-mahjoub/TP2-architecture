import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/model/user.model';
import { ToastrService } from 'ngx-toastr';
import { USERS } from 'src/app/shared/database';


@Injectable({ providedIn: 'root' })
export class RegisterService {

    constructor(
        private router: Router,
        private readonly toastr: ToastrService,
    ) {
    }
    register(values){
        const { cin, password, phoneNumber, governorate, firstName, lastName, email, birthDate } = values
        const existingUser = USERS.find(user => user.cin === cin || user.email === email || user.phoneNumber === phoneNumber)
        if (!existingUser) {
          const user = new User(USERS[USERS.length - 1].id + 1, cin, phoneNumber, password, firstName, lastName, email, birthDate, governorate,[])
          USERS.push(user)
          console.log(USERS);
  
          this.toastr.success(`Welcome ${user.firstName} ${user.lastName} to our app, take an appointment now!`)
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigate(['/profile'])
        } else {
          this.toastr.error("User with that cin or email or phone number already exists!!")
        }
  
    }
}