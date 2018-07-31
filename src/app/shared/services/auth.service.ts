import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/app-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/of'

@Injectable()
export class AuthService {
  user$ : Observable<firebase.User>;
  constructor(private afAuth : AngularFireAuth,
              private route : ActivatedRoute ,
              private userService : UserService,
            private router : Router) { 
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl' , returnUrl);

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  get appUser$() : Observable<AppUser>{
    return this.user$
    .switchMap(user => {
      if(user) return this.userService.get(user.uid);

      return Observable.of(null);
    })
     

  }
}
