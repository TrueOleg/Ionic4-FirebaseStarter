import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth-service/auth.service';
import { UserOptions } from '../interfaces/user-options';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registration: UserOptions = { email: '', password: '' };
  loginError: string;

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  signUp() {
    this.auth.signUpWithEmail(this.registration);
  }
}
