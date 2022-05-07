import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IdopontfoglalService } from 'src/app/shared/services/idopontfoglal.service';
import { Idopont } from 'src/app/models/Idopont';
import { LoginService } from 'src/app/shared/services/login.service';
import {ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Timestamp } from '@angular/fire/firestore';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-idopontjaim',
  templateUrl: './idopontjaim.component.html',
  styleUrls: ['./idopontjaim.component.scss']
})
export class IdopontjaimComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private idoservice: IdopontfoglalService, private loginService: LoginService) { }
  idopontArray: Idopont[] = [

  ];

  subs!: any;
  dataSource = [...this.idopontArray];
  displayedColumns: string[] = ['ido', 'delete'];
  show: boolean = true;

  ngOnInit(): void {
    this.subs = this.idoservice.getAll(this.loginService.currentEmail).subscribe(val =>{
      val.forEach(element => {
        let t = <Timestamp><unknown>element.ido;
        element.ido = t.toDate();
      });
      this.idopontArray = val;
      this.dataSource = [...this.idopontArray]});
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }

  delete(element: any): void {
    this.idoservice.deleteByIdopont(element);
  }

  hide(){
    this.show = !this.show;
    console.log(this.show);
  }
}
