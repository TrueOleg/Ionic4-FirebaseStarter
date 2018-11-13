import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);

  constructor(public afAuth: AngularFireAuth) { }

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

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
