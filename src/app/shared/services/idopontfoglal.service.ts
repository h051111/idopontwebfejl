import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Idopont } from 'src/app/models/Idopont';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class IdopontfoglalService {

  collectionName = 'Idopontok';
  constructor(private afs: AngularFirestore) { } 

  create(idopont: Idopont) {
    return this.afs.collection<Idopont>(this.collectionName).doc().set(idopont);
  }

  getAll(email: String) {
    return this.afs.collection<Idopont>(this.collectionName, ref => ref.where('foglaloEmail', '==', email)).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Idopont>(this.collectionName).doc(id).valueChanges();
  }

  update(idopont: Idopont) {
    //return this.afs.collection<Idopont>(this.collectionName).doc(idopont).set(user);
  }

  delete(id: string) {
    return this.afs.collection<Idopont>(this.collectionName).doc(id).delete();
  }

  deleteByIdopont(idopont: Idopont){
    return this.afs.collection<Idopont>(this.collectionName, ref => ref.where('foglaloEmail', '==', idopont.foglaloEmail).where('ido', '==', idopont.ido))
    .snapshotChanges().subscribe(val => {
      val.map(a => {
        const id = a.payload.doc.id;
        this.afs.collection<Idopont>(this.collectionName).doc(id).delete();
      })
    })
  }
}
