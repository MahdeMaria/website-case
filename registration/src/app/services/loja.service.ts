import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class LojaService {
  private apiUrl = 'http://localhost:5228/api/Loja';

  constructor(private http: HttpClient) {}

  getLojas(): Observable<Loja[]> {
    return this.http.get<Loja[]>(this.apiUrl);
  }

  addLoja(loja: any): Observable<any> {
    return this.http.post(this.apiUrl, loja);
  }
}
