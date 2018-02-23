import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ContentComponent} from '../modal-mydata/modal.component';
import { PassComponent } from '../modal-password/pass.component';
import {LogoutComponent} from '../modal-logout/logout.component';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 ngOnInit() {
  }


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ContentComponent ,{
      hasBackdrop:true
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogPass() {
    const dialogRef = this.dialog.open(PassComponent ,{
    hasBackdrop:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogLogout() {
    const dialogRef = this.dialog.open(LogoutComponent ,{
      hasBackdrop:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}



   



