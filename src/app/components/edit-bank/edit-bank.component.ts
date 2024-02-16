import { Component, OnInit } from '@angular/core';
import { Bank } from '../../models/bank.model';
import { BanksService } from '../../services/banks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrl: './edit-bank.component.css'
})
export class EditBankComponent implements OnInit{

constructor(private route: ActivatedRoute, private bankService: BanksService, private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id){
          this.bankService.getBank(parseInt(id))
            .subscribe({
              next: (response) => {
                this.updateBankDTO = response;
              }
            })
        }
      }
    })
  }

  updateBankDTO: Bank = {
    id: 0,
    bankName: '',
    sortCode: '',
    isActive: true,
    bankAddress: ''
  };

  updateBank() {
    this.bankService.updateBank(this.updateBankDTO.id, this.updateBankDTO)
      .subscribe({
        next: (response) => {
          this.router.navigate(['banks']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
