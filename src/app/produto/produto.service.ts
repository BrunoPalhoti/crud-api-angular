import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  auth_token: string ='';
  url = `https://gorest.co.in/public-api/products`;

constructor(private http: HttpClient) { }

private getHeaders(){
  // validação do token da API
  let headers = new HttpHeaders({
    Authorization: `Bearer ${this.auth_token}`
  });
  return { headers: headers }
  }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  save(prod: any){
    return this.http.post(this.url,prod,this.getHeaders());
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`,this.getHeaders());
  }

  update(id: number, prod: any){
    return this.http.patch(`${this.url}/${id}`, prod,this.getHeaders());
  }
}
