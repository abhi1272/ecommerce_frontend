import { Component, OnInit, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProductCreateComponent } from 'src/app/product/product-create/product-create.component';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

public columnDefs = [];
public rowData = [];
public paginationPageSize;
public paginationNumberFormatter
  @Input() apiData: any;

  // @Output() paginationData = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.createConfig()
  }

  createConfig(){
    this.columnDefs =  this.apiData.columnDefs
    this.columnDefs[0]['checkboxSelection'] = true
    this.rowData = this.apiData.length > 0?this.apiData:this.apiData['data']
    console.log(this.columnDefs,this.rowData)
  }

  openDialog(): void {

    delete this.apiData.data

    const dialogRef = this.dialog.open(InputFormComponent, {
      maxWidth: '100vw',
      width: '500px',
      maxHeight: '600px',
      data: this.apiData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
