import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentEmail: string = "";

  constructor(private auth: AngularFireAuth) { 
    
  }
  
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
  	return new Promise((resolve, reject) => {
      return this.auth.signInWithEmailAndPassword(email, password).then(data => {
        this.currentEmail = email;
        resolve(true);
      }).catch(error => {
        reject(false);
      });
    });
  }

  isUserLoggedIn(){
    return this.auth.user;
  }

  logout(){
    return this.auth.signOut();
  }

  getEmail(){
    return this.currentEmail;
  }
}
