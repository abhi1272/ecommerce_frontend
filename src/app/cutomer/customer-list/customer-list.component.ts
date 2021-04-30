import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService:CustomerService) { }

  customerData;
  ngOnInit() {
    console.log('customer-list called')
    this.getCustomerData()
  }

  getCustomerData(){
    this.customerService.getCustomer().subscribe((data)=>{
    const fetchedData = data[0]?data[0]:data['data'][0]
      const columnDefs = []
      const allowedKeys = ['Customer_Name','Place','GSTIN','totalBillAmount','totalBillAmountLeft'] 
      Object.keys(fetchedData).forEach((item)=>{
        if(allowedKeys.includes(item)){
           columnDefs.push({field:item, sortable: true, filter: true})
        }
      })
      this.customerData = {
        data : data,
        columnDefs: columnDefs,
        page_name: 'Customer',
        page_key: 'customer'

      } 
    },(error)=>{
      console.log(error)
    })
  }

}
