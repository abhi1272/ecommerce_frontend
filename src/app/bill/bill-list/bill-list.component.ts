import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  constructor(public billService:BillService) { }

  billData;
  ngOnInit() {
    console.log('Bill-list called')
    this.getBillData()
  }

  getBillData(){
    this.billService.getBill().subscribe((data)=>{
      const fetchedData = data[0]?data[0]:data['data'][0]
      console.log(fetchedData)
      const columnDefs = []
      const allowedKeys = ['Bill_No','Customer','billAmount','billAmountLeft','fullPaidStatus'] 
      allowedKeys.forEach((item)=>{
        columnDefs.push({field:item, sortable: true, filter: true})
      })
      this.billData = {
        data : data,
        columnDefs: columnDefs,
        page_name: 'Bill',
        page_key: 'bill'

      } 
    },(error)=>{
      console.log(error)
    })
  }
}
