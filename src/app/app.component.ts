import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  user: any;
  items:any = [];
  name: any;
  msgVal: string = '';
  isLoading: boolean = true;

  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth) {


  }

  signIn() {
    // Code to sign in here
  }

  signOut() {
    // Code to sign out here
  }

  sendChat(inputMessage: string) {

    // Fail fast: Restrict saving empty chat message
    if(inputMessage.trim() == '') {
      this.msgVal = '';
      return;
    }

    // Push | Save message to Firebase DB
    this.items.push({
      message: inputMessage,
      name: 'Guest',
      createdAt: (new Date).toString()
    });

    // Clear chat field
    this.msgVal = '';

  } 
}
