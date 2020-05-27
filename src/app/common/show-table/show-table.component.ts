import { Component, OnInit, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProductCreateComponent } from 'src/app/product/product-create/product-create.component';

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
      Object.keys(this.apiData['data'][0]).forEach((item)=>{
        if(item !== '_id' && item !== '__v'){
          this.columnDefs.push({field:item, sortable: true, filter: true})
        }
        this.paginationPageSize = 15;
        this.paginationNumberFormatter = function(params) {
          console.log(params)
          return '[' + params.value.toLocaleString() + ']';
        };
      })
      this.columnDefs[0]['checkboxSelection'] = true
      this.rowData = this.apiData['data']
      console.log(this.columnDefs,this.rowData)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '250px',
      data: {name: 'aa', animal: "tiger"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
