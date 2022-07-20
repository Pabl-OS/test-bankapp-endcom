import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/interfaces/Account';
import { Cards } from 'src/app/interfaces/Cards';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  public cards!:Cards;
  public isLoading:boolean = false;
  cardCreate:FormGroup = this._fb.group({
    numeroTarjeta   :   ['' ,Validators.required],
    cuenta          :   ['' ,Validators.required],
    issuer          :   ['' ,Validators.required],
    nombreTarjeta   :   ['' ,Validators.required], 
    marca           :   ['' ,Validators.required], 
    estatus         :   ['' ,Validators.required], 
    saldo           :   ['', Validators.required],  
    tipoCuenta      :   ['', Validators.required]   
    })
  
  
  constructor(private _fb :FormBuilder,
              private _modal:NgbModal,
              private _dashboardService:DashboardService) { }
  ngOnInit(): void {
    this.getCards();
  }


  public getCards(){
    this.isLoading = true;
    this._dashboardService.getCards().subscribe({
      next:response =>{
        this.cards = response;
        this.isLoading = false;
      },error:error =>{
        this.isLoading = false;
        console.log('error',error);
        
      }
    })
  }


  public inputIsValid = (campo: string) =>
  (this.cardCreate.controls[campo].errors &&
   this.cardCreate.controls[campo].touched);
  
  public openModalCard(modal:any){
    this._modal.open(modal, {size:'md',centered:true})
  }

  public handleCreateCard(){
    if (this.cardCreate.invalid) {
      this.cardCreate.markAllAsTouched();
    }
  }

}
