import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/Account';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public account!:Account
  constructor(private _dashboardService:DashboardService) { }

  ngOnInit(): void {
    this._getAccount();
  }

  private _getAccount(){
    const accountSubscription = this._dashboardService.getAccount().subscribe({
      next:response => {
        this.account=response;
        
      },error:error => {
        console.log( error );
        
      }
    })
  }
  ngOnDestroy() {
    
  }
}
