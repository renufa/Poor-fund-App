import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticatedName: any;
  constructor(public af: AngularFireAuth, private router: Router) {
   this.af.authState.subscribe(auth => {
     if (!auth.displayName) {
       this.authenticatedName = auth.email;
     } else {
       this.authenticatedName = auth.displayName;
     }
   });

    }
    // FOR NAV COLLAPSE
  isCollapsed = true;
  // LOGOUT
  logout() {
    this.af.auth.signOut();
    this.authenticatedName = null;
     this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
