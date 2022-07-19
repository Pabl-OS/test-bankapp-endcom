import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {


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
              private _modal:NgbModal) { }
  ngOnInit(): void {
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
