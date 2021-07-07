import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produto: any;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.produtoService.getAll().subscribe((data) =>{
      this.produto =  data;
      console.log(data);
    });
  }

  deletar(id: any){
    this.produtoService.delete(id).subscribe((data) =>{
      this.getAll();
    });
  }
}
