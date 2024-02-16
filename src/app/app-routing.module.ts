import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './components/banks/banks.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { EditBankComponent } from './components/edit-bank/edit-bank.component';

const routes: Routes = [
  {
    path: '',
    component: BanksComponent
  },
  {
    path: 'banks',
    component: BanksComponent
  },
  {
    path: 'banks/add',
    component: AddBankComponent
  },
  {
    path: 'banks/edit/:id',
    component: EditBankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
