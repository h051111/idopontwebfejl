import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { User } from '../../models/User';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      lastname: new FormControl(''),
      firstname: new FormControl('')
    }),
    address: new FormControl(''),
    telefonszam: new FormControl('')
  });

  constructor(private location: Location, private authService: LoginService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        email: this.signUpForm.get('email')?.value,
        id: cred.user?.uid as string,
        nev: {
          veznev: this.signUpForm.get('name.lastname')?.value,
          kernev: this.signUpForm.get('name.firstname')?.value
        },
        postaicim: this.signUpForm.get('address')?.value,
        telefonszam: this.signUpForm.get('telefonszam')?.value
      };
      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
        this.router.navigateByUrl("/");
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

}
