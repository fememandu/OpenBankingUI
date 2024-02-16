import { Component, OnInit } from '@angular/core';
import { Bank } from '../../models/bank.model';
import { Router } from '@angular/router';
import { BanksService } from '../../services/banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.css'
})
export class BanksComponent implements OnInit {
  banks: Bank[] = [];

  constructor(private bankService: BanksService, private router: Router){}

  ngOnInit(): void {
    this.bankService.getAllBanks()
      .subscribe({
        next: (banks) => {
          this.banks = banks
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
