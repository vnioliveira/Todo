import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  closed = 0;
  list: Todo[] = [];
  listfinished: Todo[] = [];


  constructor(private service: TodoService,private route:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        todo.finalizado ? this.listfinished.push(todo) : this.list.push(todo);
      })
      this.closed = this.listfinished.length
    })
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task finalizada com sucesso!');
      this.list.filter(todo => todo.id !== item.id);
      this.closed++;
    })
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Task deletada com sucesso!');
        this.list.filter(todo => todo.id !== id)
      }
    })
    this.findAll();
  }

  navegarParaFinalizados(): void{
    this.route.navigate(['finalizados'])
  }

  



}
