import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioLojaComponent } from './paginas/formulario-loja/formulario-loja.component';
import { ListaLojasComponent } from './paginas/lista-lojas/lista-lojas.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioLojaComponent,
    ListaLojasComponent,
    RouterOutlet,
    HttpClientModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}