import { Injectable } from '@angular/core';
import { Vaccin } from '../../shared/model/user.model';
import { ToastrService } from 'ngx-toastr';
import { USERS } from 'src/app/shared/database';
import { STATUS } from 'src/app/shared/sharedEnums';


@Injectable({ providedIn: 'root' })
export class ManageVaccinationsService {

    constructor(
        private readonly toastr: ToastrService,
    ) {
    }

    addAppointment(values,id){
        const {governorate,vaccinationCenter,date} = values;
        const vaccin = new Vaccin(date,{governorate,vaccinationCenter},"",STATUS.Pending);
        const user = USERS.find(user => user.id === id);
        const existingVaccin = user.vaccinHistory.find(vaccin => vaccin.date === date);
        if(existingVaccin)
            this.toastr.error("Date already taken !!")
        else{
            user.vaccinHistory.push(vaccin);
            this.toastr.success("appointment added!")
        }
    }

    updateAppointment(values,id,date,vaccin){
        const {vaccinator,status} = values
        if(vaccinator)
            vaccin.vaccinator=vaccinator
        console.log(status);
        
        if(status)
            vaccin.status=status
        USERS.filter(user => user.id === id ?  user.vaccinHistory.filter(v => new Date(v.date).toISOString() === new Date(date).toISOString() ? vaccin : v ) : user)
        this.toastr.success("appointment updated!")
        const users = []
        USERS.forEach(user => {
            users.push({...user,isUpdate:false})
        });
        return users
    }

    deleteAppointment(date,id){
        const user = USERS.find(user => user.id === id);
        if(!user)
            this.toastr.error("User dosn't exist!")
        else {
            const vaccins = user.vaccinHistory.filter(vaccin => vaccin.date !== date)
            user.vaccinHistory = vaccins
        }   
    }
}