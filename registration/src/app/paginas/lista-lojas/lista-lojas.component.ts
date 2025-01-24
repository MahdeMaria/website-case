import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { LojaComponent } from '../../components/loja/loja.component';
import { FormularioLojaComponent } from '../formulario-loja/formulario-loja.component';
import { LojaService } from '../../services/loja.service';
import { HttpClientModule } from '@angular/common/http';

interface Loja {
  CNPJ: string;
  RazaoSocial: string;
  NomeFantasia: string;
  DataAbertura: string;
  DataEncerrada: string;
  Telefone: string;
  Logradouro: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  CEP: string;
  Status: string;
}

@Component({
  selector: 'app-lista-lojas',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    RouterOutlet,
    LojaComponent,
    FormsModule,
    FormularioLojaComponent,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './lista-lojas.component.html',
  styleUrl: './lista-lojas.component.css',
})
export class ListaLojasComponent implements OnInit {
  lojas: Loja[] = [];

  constructor(private lojaService: LojaService) {}

  ngOnInit(): void {
    this.lojaService.getLojas().subscribe(
      (data: any[]) => {
        console.log('Resposta da API:', data);
        this.lojas = data.map(loja => ({
          CNPJ: loja.cnpj,
          RazaoSocial: loja.razaoSocial,
          NomeFantasia: loja.nomeFantasia,
          DataAbertura: loja.dataAbertura,
          DataEncerrada: loja.dataEncerrada,
          Telefone: loja.telefone,
          Logradouro: loja.logradouro,
          Numero: loja.numero,
          Complemento: loja.complemento,
          Bairro: loja.bairro,
          Cidade: loja.cidade,
          Estado: loja.estado,
          CEP: loja.cep,
          Status: loja.status
        }));
      },
      (error) => {
        console.error('Erro ao carregar lojas:', error);
      }
    );
  }
}
