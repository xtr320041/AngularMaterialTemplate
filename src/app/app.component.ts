import { Component, ChangeDetectorRef, EventEmitter, Output, OnInit, ViewChild, ElementRef, enableProdMode } from '@angular/core';

import { environment } from '../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable, forkJoin } from "rxjs";

// import { MatSidenav } from '@angular/material';
// import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
// import { AuthService } from './auth/auth.service';
// import { MessageBoxService, MessageBoxData } from 'src/app/commonUI/message-box/messageBox.service'
// import * as docModels from 'src/app/models/doc-models';
// import { PermDataService } from './services/perm-data.service';


enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode = "over";
  title = environment.title;
  version = environment.version;
  showMenu = false;
  iniMode = '';
  iniRoute = '';

  hasStandardRole = false;
  hasEnhancedRole = false;
  hasAdminRole = false;
  hasReadRole = false;

  isSignin = false;

  isHome = true;
  subTitle = "";

  baseNav = [
    {
      'title': 'Home',
      'path': '/home'
    }
  ];
  reportNav = [
    {
      'title': 'Permits Summary',
      'path': 'rpt/permitTrend'
    },
    {
      'title': 'Seizures/Surrenders Summary',
      'path': 'rpt/seizureTrend'
    },
    {
      'title': 'Seizures/Surrenders by Category',
      'path': 'rpt/categoryTrend'
    },
    {
      'title': 'Seizures/Surrenders by NZ Ports',
      'path': 'rpt/portTrend'
    },
    {
      'title': 'Seizures/Surrenders by NZ Ports/Year',
      'path': 'rpt/portYearTrend'
    }
  ];

  // currentUser: docModels.CitesUser;
  // currentUserName = "";
  // currentRoles = [];
  // private _mobileQueryListener: () => void;
  // @Output() toggleSideNav = new EventEmitter();

  constructor(
    // public auth: AuthService, changeDetectorRef: ChangeDetectorRef, 
    // private myMsgBox: MessageBoxService, private myDS: PermDataService,
    private router: Router,
    private route: ActivatedRoute    
    ) {
  }

  ngOnInit() {
    // this.myDS.getPersonsById('1285')
    //   .then(p => {
    //     console.log('getPersonsById() initial API calls only');
    //     console.log(p);
    //   })
    //   .catch(e => { console.log('Login error.'); console.log(e); })
    // this.auth.signInCites()
    //   .then(r => {
    //     //console.log("signed into Cites");
    //     //console.log(r);
    //     if (r) {
    //       this.currentUser = r;
    //       this.currentUserName = r.DomainLoginId;
    //       this.currentRoles = r.Roles;
    //       this.isSignin = (r.Roles.length > 0);
    //       if (this.isSignin){
    //         this.hasStandardRole = (r.Roles.includes('Standard'));
    //         this.hasEnhancedRole = (r.Roles.includes('Enhanced'));
    //         this.hasAdminRole = (r.Roles.includes('Administrator'));
    //         this.hasReadRole = (r.Roles.includes('ReadOnly'));
    //       }
    //     }
    //   })
    //   .catch(e => { console.log('Login error.'); console.log(e); })

    // this.myDS.getEmitter().subscribe((s: docModels.AppStates) => {
    //   this.isModal = s.Modal;
    //   this.subTitle = s.Screen
    // });

    // this.myDS.getLoginChangeEmiter().subscribe((r: docModels.CitesUser) => {
    //   if (r.DomainLoginId) {
    //     this.currentUser = r;
    //     this.currentUserName = r.DomainLoginId;k
    //     this.currentRoles = r.Roles;
    //     this.isSignin = (r.Roles.length > 0);
    //   }

    // });
  }

  openHelp() {
    // let l0 = 'Version: ' + this.version;
    // let l1 = 'Login Id: ' + this.currentUserName;
    // let l2 = '';
    // if (this.isSignin) {
    //   var roles = '';
    //   for (var i = 0; i < this.currentRoles.length; i++) {
    //     roles = roles + this.currentRoles[i] + ", ";
    //   }
    //   roles = roles.substring(0, roles.length - 2)
    //   l2 = 'Roles: ' + roles;
    // }
    // else {
    //   l2 = 'You have not been authorized to use this system. Please ask the system admin.';
    // }
    // let md: MessageBoxData = { title: this.title, messages: [l0, l1, l2] };
    // this.myMsgBox.show(md);
  }

  signOut() {
    // this.auth.signOut()
    //   .then(d => {
    //     this.isSignin = false;
    //   })
  }

  goMyAccount() {
    this.router.navigate(['auth/profile']);
  }

  goto(route) {
    this.router.navigate([route]);
  }


}