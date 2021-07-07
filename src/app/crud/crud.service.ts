import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  auth_token: string ='';
  url = `https://gorest.co.in/public-api/users`;

  constructor(private http: HttpClient) {}

  private getHeaders(){
    // validação do token da API
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth_token}`
    });
    return { headers: headers }
  }

  getAll() {
    // pegando todos os usuarios
    return this.http.get(this.url);
  }

  getOne(id: number){
    //pegando o usuario pelo id
    return this.http.get(`${this.url}/${id}`);
  }

  save(user: any) {
    // salvar um novo usuario
    return this.http.post(this.url, user, this.getHeaders());
  }

  delete(id: number) {
    // deltetar usuario
    return this.http.delete(`${this.url}/${id}`, this.getHeaders());
  }

  update(id: number, user: any){
    // edição
    return this.http.patch(`${this.url}/${id}`, user, this.getHeaders())
  }
}
