import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VERSION } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'src/app/cutomer/customer.service';
import { MatSelectSearchVersion } from 'ngx-mat-select-search';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  version = VERSION;

  matSelectSearchVersion = MatSelectSearchVersion;


  inputForm
  fileToUpload: File = null;
  customerNames;
  fileUploadFlag = false
  companyNames = ['Awzing','Oracion']
  placeNames = ['Barh','Mokameh','Bariyaha','Bakhtiyarpur']
  constructor(public sharedService:SharedService,public dialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,public spinner:NgxSpinnerService,
    public customerService:CustomerService) { }

  ngOnInit() {
    console.log('data', this.data)
    this.getCustomerList()
    this.createForm()
  }

  createForm(){

    switch(this.data.page_key){
      case 'product' :
        this.inputForm = new FormGroup({
          'productName': new FormControl('', Validators.required),
          'company': new FormControl('', Validators.required),
          'MRP': new FormControl('', Validators.required),
          'Rate': new FormControl('', Validators.required)
        });
      break;
      case 'customer' :
        this.inputForm = new FormGroup({
          'Customer_Name': new FormControl('', Validators.required),
          'Place': new FormControl('', Validators.required),
          'address': new FormControl('', Validators.required),
          'phoneNumber': new FormControl('', Validators.required)
        });
      break;
      case 'bill' :
        this.inputForm = new FormGroup({
          'Customer': new FormControl('', Validators.required),
          'Bill_No': new FormControl('', Validators.required),
          'billAmount': new FormControl('', Validators.required)
        });
      break;
      case 'payment' :
        this.inputForm = new FormGroup({
          'customerName': new FormControl('', Validators.required),
          'paidAmount': new FormControl('', Validators.required)
        });
      break;
    }
    
    // this.filteredCustomerNames = this.inputForm.controls.customerName.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterDir(value))
    // );

  }

  private _filterDir(value): string[] {
    const filterValue = this._normalizeValue(value);
    return this.customerNames.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  handleFileInput(files){
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
  }

  getCustomerList(){
    this.customerService.getCustomer().subscribe((data)=>{
      // this.customerNames = data.sort((a,b) => b.Customer_Name - a.Customer_Name)
      this.customerNames = data
    })
  }

  submit(){

    console.log(this.inputForm.value)
    this.spinner.show()
    let formObjData = {
      page_key : this.data.page_key
    }

    switch(this.data.page_key){
      case 'product' :
        this.fileUploadFlag = true
        const formData: FormData = new FormData();
        if(this.fileToUpload.name){
          formData.append('upload', this.fileToUpload, this.fileToUpload.name);
        }
        formData.append('productName',this.inputForm.value.productName)
        formData.append('company',this.inputForm.value.company)
        formData.append('MRP',this.inputForm.value.MRP)
        formData.append('Rate',this.inputForm.value.Rate)
        formObjData['formData'] = formData
      break;
      // case 'payment':
      //   let cashbookObj = {
      //     customerId:this.inputForm.value.customerName.customerId,
      //     customerName:this.inputForm.value.customerName.customerName,
      //     paidAmount:this.inputForm.value.paidAmount
      //   } 
      //   formObjData['formData'] = cashbookObj
      // break;
      default:
        formObjData['formData'] = this.inputForm.value
      break;
    }
    console.log('call save',formObjData)
   
    this.sharedService.add(formObjData).subscribe((data)=>{
      console.log(data)
      this.spinner.hide()
      this.dialogRef.close(true);
    },(error)=>{
      console.log(error)
      this.spinner.hide()
    })
  }


}
