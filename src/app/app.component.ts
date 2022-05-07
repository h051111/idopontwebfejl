import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'idopontfoglalo';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: LoginService){
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      console.log(user?.email);
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }

  logout(){
    this.authService.logout().then(() => {
      console.log("logout");
    }).catch(error => {
      console.log(error);
    });
  }
}
