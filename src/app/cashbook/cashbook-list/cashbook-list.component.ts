import { Component, OnInit } from '@angular/core';
import { CashbookService } from '../cashbook.service';

@Component({
  selector: 'app-cashbook-list',
  templateUrl: './cashbook-list.component.html',
  styleUrls: ['./cashbook-list.component.css']
})
export class CashbookListComponent implements OnInit {

  constructor(public cashbookService:CashbookService) { }

 
  cashbookData;
  ngOnInit() {
    console.log('Bill-list called')
    this.getCashbookData()
  }

  getCashbookData(){
    this.cashbookService.getCashbook().subscribe((data)=>{
      const columnDefs = []
      const allowedKeys = ['customer_name','billNo',,'billAmount','paidAmount','restAmount','createdAt'] 
      allowedKeys.forEach((item)=>{
        columnDefs.push({field:item, sortable: true, filter: true})
      })
      this.cashbookData = {
        data : Array.isArray(data)?data:data['data'],
        columnDefs: columnDefs,
        page_name: 'Payment',
        page_key: 'payment'

      } 
    },(error)=>{
      console.log(error)
    })
  }

}
