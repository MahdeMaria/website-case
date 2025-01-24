import { Routes } from '@angular/router';
import { FormularioLojaComponent } from './paginas/formulario-loja/formulario-loja.component';
import { ListaLojasComponent } from './paginas/lista-lojas/lista-lojas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/lista-lojas',
        pathMatch:'full'
    },
    {
        path: 'formulario',
        component: FormularioLojaComponent
    },
    {
        path: 'lista-lojas',
        component: ListaLojasComponent
    },
    
];
