import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FrutaService } from '../fruta.service';
import { Fruta } from '../fruta.model';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';

import locatePt from '@angular/common/locales/pt';
registerLocaleData(locatePt)

@Component({
  selector: 'app-frutas-read',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, CommonModule, RouterModule],
  templateUrl: './frutas-read.component.html',
  styleUrl: './frutas-read.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class FrutasReadComponent implements OnInit{
  frutas: Fruta[];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'action']; // Inicializando displayedColumns

  constructor(private frutaService : FrutaService) {
    this.frutas = []; // Inicializando como um array vazio    
  }

  ngOnInit(): void {
    this.frutaService.read().subscribe(frutas => {
      this.frutas = frutas;
      console.log(frutas);
    })
  } 
   
}
