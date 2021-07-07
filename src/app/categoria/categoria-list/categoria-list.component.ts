import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categoria: any;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.categoriaService.getAll().subscribe((data) =>{
      console.log(data)
      this.categoria =  data;
    });
  }

  deletar(id: number){
    this.categoriaService.delete(id).subscribe((data) =>{
      this.getAll();
    })
  }
}
