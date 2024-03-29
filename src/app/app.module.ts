import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BanksComponent } from './components/banks/banks.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { EditBankComponent } from './components/edit-bank/edit-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    AddBankComponent,
    EditBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
