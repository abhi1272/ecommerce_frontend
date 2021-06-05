import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FileUploaderComponent } from 'src/app/modules/shared/modals/file-uploader/file-uploader.component';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public sharedService: SharedService,
              public router: Router) { }

  ngOnInit(): void {
  }

  public openDialog(): void{
    const value = this.sharedService.openDialog({}, FileUploaderComponent, '750px')

    value.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  getCategoryData(value): void {
    // this.sharedService.filterObj.filters.push({ name: 'category', value })
    this.router.navigate(['/product'], { queryParams: { category: value } })
  }

}
