import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  handleFileInput(file){
    console.log('file', file);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
