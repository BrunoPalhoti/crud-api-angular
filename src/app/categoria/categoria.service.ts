import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  auth_token: string ='';
  url = `https://gorest.co.in/public-api/categories`;

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

  save(cat: any){
    return this.http.post(this.url,cat,this.getHeaders());
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`, this.getHeaders());
  }

  update(id: number, cat: any){
    return this.http.patch(`${this.url}/${id}`, cat, this.getHeaders());
  }
}
