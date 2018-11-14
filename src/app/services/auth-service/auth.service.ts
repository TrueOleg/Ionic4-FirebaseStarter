import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import * as firebase from 'firebase';
// import 'rxjs/add/operator/switchMap';

export class User {

  uid: string;
  username = '';

  constructor(auth) {
    this.uid = auth.uid;
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  currentUser: User;

  constructor(public afAuth: AngularFireAuth) {
    // this.afAuth.authState.switchMap(auth => {
    //   if (auth) {
    //     this.currentUser = new User(auth);
    //     return this.db.object(`/users/${auth.uid}`);
    //   } else { return []; }
    // })
    //   .subscribe(user => {
    //     this.currentUser['username'] = user.username;
    //   });
  }



  signInWithEmail(login) {
    console.log('Sign in with email');
    return this.afAuth.auth
      .signInWithEmailAndPassword(login.email, login.password)
      .then(() => {
        this.authenticationState.next(true);
      });
  }

  signUpWithEmail(registration) {
    console.log('Sign up with email', registration);
    return this.afAuth.auth
      .createUserWithEmailAndPassword(registration.email, registration.password)
      .then(() => {
        this.authenticationState.next(true);
      });
  }

  logOut() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
