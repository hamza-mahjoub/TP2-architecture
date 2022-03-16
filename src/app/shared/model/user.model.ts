import { ROLE, STATUS } from "../sharedEnums";

export class Vaccin {
    constructor(
        public date:Date,
        public location:{
            governorate: String,
            vaccinationCenter: String,
        },
        public vaccinator:string,
        public status:STATUS
    ){}

}
export class User {
    constructor(
        public id:number,
        public cin: string,
        public phoneNumber: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public birthDate: Date,
        public governorate: string,
        public vaccinHistory: Vaccin[],
        public role: number = ROLE.User
    ){}

}