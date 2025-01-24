import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LojaService } from '../../services/loja.service';



@Component({
  selector: 'app-formulario-loja',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './formulario-loja.component.html',
  styleUrl: './formulario-loja.component.css'
})
export class FormularioLojaComponent implements OnInit {
  statusSelecionado: string = 'ativo';
  lojaForm!: FormGroup;

  constructor(private lojaService: LojaService) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.lojaForm = new FormGroup({
      CNPJ: new FormControl('', Validators.required),
      RazaoSocial: new FormControl('', Validators.required),
      NomeFantasia: new FormControl(''),
      DataAbertura: new FormControl('', Validators.required),
      DataEncerrada: new FormControl('', Validators.required),
      Status: new FormControl('', Validators.required),
      Telefone: new FormControl('', Validators.required),
      Logradouro: new FormControl('', Validators.required),
      Numero: new FormControl('', Validators.required),
      Complemento: new FormControl(''),
      Bairro: new FormControl('', Validators.required),
      Cidade: new FormControl('', Validators.required),
      Estado: new FormControl('', Validators.required),
      CEP: new FormControl('', Validators.required),
    });
  }

  salvarLoja() {
    if (this.lojaForm.valid) {
      const loja = this.lojaForm.value;
  
      loja.DataAbertura = new Date(loja.DataAbertura).toISOString();
      loja.DataEncerrada = new Date(loja.DataEncerrada).toISOString();
  
      this.lojaService.addLoja(loja).subscribe({
        next: (res: any) => {
          console.log('Loja salva com sucesso!', res);
          alert('Loja cadastrada com sucesso!');
          this.lojaForm.reset();
        },
        error: (err: any) => {
          console.error('Erro ao salvar loja:', err);
          alert('Ocorreu um erro ao cadastrar a loja. Tente novamente.');
        },
      });
    } else {
      console.log('Formulário inválido. Verifique os campos obrigatórios.');
    }
  }

  cancelar() {
    console.log('Submissão cancelada');
  }
}
