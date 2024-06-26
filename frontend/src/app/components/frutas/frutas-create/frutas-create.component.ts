import { FrutaService } from './../fruta.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Fruta } from '../fruta.model';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-frutas-create',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
     FormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './frutas-create.component.html',
  styleUrl: './frutas-create.component.css'
})
export class FrutasCreateComponent implements OnInit{

  fruta : Fruta = {
    nome : '',
    preco: null
  }
  constructor(private frutasService:FrutaService, private router : Router) {}


  ngOnInit(): void { }

  createFruta(): void {
    this.frutasService.create(this.fruta).subscribe (() =>{
        this.frutasService.showMessage("Fruta criado com sucesso....!!!!!!!!!");
        this.router.navigate(['frutas']);
      }
    );
   }

  cancel(): void { 
    this.router.navigate(['frutas']);
   }  
}