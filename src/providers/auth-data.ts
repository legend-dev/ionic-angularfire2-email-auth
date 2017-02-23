import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

@Injectable()
export class AuthData {

  fireAuth: any;

  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) { this.fireAuth = user.auth; }
    });
  }

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.login({
      email: newEmail,
      password: newPassword
    });
  }

  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.af.auth.logout();
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.createUser({ 
      email: newEmail, 
      password: newPassword 
    });
  }

}
