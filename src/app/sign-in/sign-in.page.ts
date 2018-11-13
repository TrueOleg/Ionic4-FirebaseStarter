import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth-service/auth.service';
import { UserOptions } from '../interfaces/user-options';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
  login: UserOptions = { email: '', password: '' };
  loginError: string;

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  signIn() {
    this.auth.signInWithEmail(this.login);
  }
}
