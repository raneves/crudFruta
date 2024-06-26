import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FrutasCrudComponent } from './views/frutas-crud/frutas-crud.component';
import { FrutasCreateComponent } from './components/frutas/frutas-create/frutas-create.component';
import { FrutasUpdateComponent } from './components/frutas/frutas-update/frutas-update.component';
import { FrutasDeleteComponent } from './components/frutas/frutas-delete/frutas-delete.component';

export const routes: Routes = [
    {
        path : "",
        component :  HomeComponent
    }, 
    {
        path: "frutas",
        component : FrutasCrudComponent
    },
    {
        path :"frutas/create",
        component : FrutasCreateComponent
    },
    {
        path:"frutas/update/:id",
        component:FrutasUpdateComponent
    },
    {
        path:"frutas/delete/:id",
        component:FrutasDeleteComponent
    }
];
