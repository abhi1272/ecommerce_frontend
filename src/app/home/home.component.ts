import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../common/modals/create/create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public home = 'home';

  constructor(public dialog: MatDialog) {
    console.log('home constructor called')
   }

  ngOnInit() {
  }


  openDialog(): void {
    console.log('open');
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
