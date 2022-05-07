import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IdopontfoglalService } from 'src/app/shared/services/idopontfoglal.service';
import { Idopont } from 'src/app/models/Idopont';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-idopont-foglalas',
  templateUrl: './idopont-foglalas.component.html',
  styleUrls: ['./idopont-foglalas.component.scss']
})
export class IdopontFoglalasComponent implements OnInit {
  minDate: Date = new Date();
  idoPicked: string = "";
  selectedIdo : string = "";

  constructor(private router: Router, private idoservice: IdopontfoglalService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() + 1);  //holnaptól lehessen választani
  }

  foglalIdopont(): void {
    let fido = new Date(this.idoPicked);
    fido.setHours(Number.parseFloat(this.selectedIdo));
    fido.setMinutes(Number.parseFloat(this.selectedIdo.substring(3, 5)))
    //console.log(this.selectedIdo.substring(3, 5));
    const idopont: Idopont = {
      foglaloEmail: this.loginService.getEmail(),
      ido: fido
    };

    this.idoservice.create(idopont);
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }
}
