import { Component, OnInit } from '@angular/core';
import { Balances } from 'src/app/interfaces/Balances';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html'
})
export class BalancesComponent implements OnInit {

  public balance!:Balances;
  public isLoading:boolean = false;
  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getBalance();
  }
  private getBalance(){
    this.isLoading = true;
    this._dashboardService.getBalances().subscribe({
      next :response => {
        this.balance = response;
        this.isLoading = false;
      },error:error =>{
        console.log('error',error);
        this.isLoading = false;
      }
    })
  }

}
