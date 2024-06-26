import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Fruta } from '../fruta.model';
import { FrutaService } from '../fruta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frutas-delete',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './frutas-delete.component.html',
  styleUrl: './frutas-delete.component.css'
})
export class FrutasDeleteComponent implements OnInit{
  fruta : Fruta = {
    nome : '',
    preco: null
  }

  constructor(private frutasService:FrutaService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';    
    this.frutasService.readById(id).subscribe({
      next: (fruta: Fruta) => {
          this.fruta = fruta;
      },
      error: (error: any) => {
          // Handle error
      }
    });
   }

   deleteFruta(): void {
    this.frutasService.delete(this.fruta).subscribe (() =>{
        this.frutasService.showMessage("Fruta Removida com sucesso....!!!!!!!!!");
        this.router.navigate(['frutas']);
      }
    );   
  }
  cancel(): void { 
    this.router.navigate(['frutas']);
   } 
}
