import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormControl } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loginService : LoginService) { }

  ngOnInit(): void {

  }

  async login(){
    try{
        const _ = await this.loginService.login(this.email.value, this.password.value);
        this.router.navigateByUrl('/idopontfoglalas');
        console.log("siker");
    }
    catch(error){
      console.log("error");
    }
  }
}
