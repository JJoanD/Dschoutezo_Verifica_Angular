import { Component } from '@angular/core';
import { User } from '../modules/user';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../servizi/loginService/login.service';
import { RegistrationService } from '../servizi/registrationService/registration.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  newUser : User = { 
    username : "",
    password : "",
    surname : "",
    name : "",
    email : ""

  }

  user = {
    username : "",
    password: "",
    
  };
  remotaData : any ;
  data : any ;
  accesso : boolean = false;
  viewLogin :boolean = true;
  okey : boolean = false;

  //---------------------------------------------------

  constructor(private loginService : LoginService ,private registrationService : RegistrationService ) { } 


  accedi = () => {
   this.loginService.login(this.user).subscribe(remoteData => {
    this.data = remoteData

    if(this.data.valid == true){
      this.accesso = true;
     }
  
    })
   this.user = {
    username : "",
    password : ""
   }

   
   
  }

  registrati = () =>{
    this.viewLogin = false;
  }

  confermaRegistrazione = () => {

    this.registrationService.register(this.newUser).subscribe(remoteData => {this.data = remoteData})
    this.okey = true;
    this.newUser = {
      username : "",
      password : "",
      surname : "",
      name : "",
      email : ""
     }
  }

  tornaLogin = () => { this.viewLogin = true }

  comeBack = () => {
    this.accesso = false;
  }
}
