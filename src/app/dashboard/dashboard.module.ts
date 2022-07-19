import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MovementsComponent } from './components/movements/movements.component';
import { BalancesComponent } from './components/balances/balances.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountsComponent,
    MovementsComponent,
    BalancesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class DashboardModule { }
