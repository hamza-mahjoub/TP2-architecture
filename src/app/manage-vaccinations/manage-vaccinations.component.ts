import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { USERS } from '../shared/database';
import { User, Vaccin } from '../shared/model/user.model';
import { ManageVaccinationsService } from './services/manage-vaccinations.service';

@Component({
  selector: 'app-manage-vaccinations',
  templateUrl: './manage-vaccinations.component.html',
  styleUrls: ['./manage-vaccinations.component.scss']
})
export class ManageVaccinationsComponent implements OnInit {

  users : any[] = [];
  status = ['Done','Pending','Cancelled']
  today = new Date();
  vaccinToUpdate : Vaccin = null;

  constructor(
    private readonly toastr: ToastrService,
    private readonly manageVaccinationsService:ManageVaccinationsService,
  ) { }

  ngOnInit(): void {
    USERS.forEach(user => {
      this.users.push({...user,isUpdate:false})
    });
  }

  addAppointment(addAppointmentForm,id){
    const {date} = addAppointmentForm.value;
    const selectedDate = new Date(date)
    if( selectedDate.toISOString() <= this.today.toISOString())
      this.toastr.error("Wrong date")
    else {
      this.manageVaccinationsService.addAppointment(addAppointmentForm.value,id)
    }
  }

  deleteAppointment(date,id){
    this.manageVaccinationsService.deleteAppointment(date,id);
  }

  makeUpdate(vaccin,id){
    this.vaccinToUpdate = vaccin
    this.users.filter(user => user.id === id ? user.isUpdate= !user.isUpdate : user.isUpdate)
  }

  updateAppointment(addAppointmentForm,id,date){
    this.users = this.manageVaccinationsService.updateAppointment(addAppointmentForm.value,id,date,this.vaccinToUpdate)
  }

}
