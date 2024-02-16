import { Component } from '@angular/core';
import { Bank } from '../../models/bank.model';
import { BanksService } from '../../services/banks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrl: './add-bank.component.css'
})
export class AddBankComponent {
  newBank: Bank = {
    id: 0,
    bankName: '',
    sortCode: '',
    isActive: true,
    bankAddress: ''
  };

  constructor(private bankService: BanksService, private router: Router){}

  addBank(){
    this.newBank.sortCode = this.newBank.sortCode.toString();
    this.bankService.addBank(this.newBank)
      .subscribe({
        next: (bank) => {
          this.router.navigate(['banks']);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}
