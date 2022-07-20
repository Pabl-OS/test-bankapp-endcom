import { Component, OnInit } from '@angular/core';
import { Movements } from 'src/app/interfaces/Movements';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html'
})
export class MovementsComponent implements OnInit {

  public movements!:Movements;
  public isLoading:boolean = false;
  constructor(private _dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getMovements();
  }
  getMovements(){
    this.isLoading = true;
    this._dashboardService.getMovements().subscribe({
      next:response =>{
        this.movements =  response;
        this.isLoading = false;
      },error:error =>{
        console.log('error',error);
        this.isLoading = false;

      }
    })
  }

}
