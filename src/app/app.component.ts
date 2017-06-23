import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
    <div> {{ (user | async)?.displayName }} </div>
    <button (click)="signIn()">Sign In with Google</button>
    <button (click)="signOut()">Sign Out</button>
  `,
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.user);
  }

  signOut() {
    this.afAuth.auth.signOut();
    console.log(this.user)
  }
}
