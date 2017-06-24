import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth, AngularFireDatabase]
})
export class AppComponent {

  user: firebase.User;
  items: any = [];
  msgVal: string = '';

  constructor() {

  }

  signInWithGoogle() {
    // Code to sign in
  }

  signOut() {
    // Code to sign out
  }

  sendChat(inputMessage: string) {

    // Fail fast: Restrict saving empty chat message
    if(inputMessage.trim() == '') {
      this.msgVal = '';
      return;
    }

    this.items.push({
      message: inputMessage,
      name: 'Guest',
      createdAt: (new Date).toString()
    });

    // Clear chat field
    this.msgVal = '';

  } 
}
