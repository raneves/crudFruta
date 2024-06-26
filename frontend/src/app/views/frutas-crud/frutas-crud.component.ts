import { Component } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FrutasReadComponent } from '../../components/frutas/frutas-read/frutas-read.component';
import { FrutasRead2Component } from '../../components/frutas/frutas-read2/frutas-read2.component';


@Component({
  selector: 'app-frutas-crud',
  standalone: true,
  imports: [FrutasReadComponent, MatButtonModule, RouterLink, FrutasRead2Component],
  templateUrl: './frutas-crud.component.html',
  styleUrl: './frutas-crud.component.css'
})
export class FrutasCrudComponent {
  constructor(private router: Router) {
    
  }

  navigateToFrutasCreate(): void {
    this.router.navigate(['/frutas/create']);
    console.log('@@@Navegando......')
  }
}
