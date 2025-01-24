import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.css'
})
export class LojaComponent {
  @Input() CNPJ: string = '';
  @Input() RazaoSocial: string = '';
  @Input() NomeFantasia: string = '';
  @Input() DataAbertura: string = '';
  @Input() DataEncerrada: string = '';
  @Input() Telefone: string = '';
  @Input() Logradouro: string = '';
  @Input() Numero: string = '';
  @Input() Complemento: string = '';
  @Input() Bairro: string = '';
  @Input() Cidade: string = '';
  @Input() Estado: string = '';
  @Input() CEP: string = '';
  @Input() Status: string = '';
}