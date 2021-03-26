import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Datos de tarea Modal
  nombreTareaModal:string = '';
  descripcionTareaModal:string = '';
  colaboradoresModal:any[]=[];
  comentariosModal:any[]=[];
  nombreTarea:string = '';
  descripcionTarea:string= '';
  //Comentario Modal
  comentario:string = '';
  nombreComentario:string = '';
  //Datos Colaborador Modal
  nombreColaborador:string ='';
  correoColaborador:string='';

  

  idLista:number = 0;
  idTarea:number = 0;
  idCurrent: number = 0;
  lista:any={};
  nombre:string = '';
  descripcion:string= '';
  listaTareas:any[]=[];


  
  constructor() {
   }

   crearLista(){
    this.lista = {
      id: this.idLista++,
      nombre: this.nombre,
      descripcion: this.descripcion,
      lista:[]
    }
    this.listaTareas.push(this.lista);
    this.lista = {};
   }

   crearTarea(){
    let listaSimpleTarea = {
      id: this.idTarea++,
      nombre: this.nombreTarea,
      descripcion: this.descripcionTarea,
      colaboradores:[],
      comentarios:[]
     }
     for(let i of this.listaTareas){
       if(i.id === this.idCurrent){
         i.lista.push(listaSimpleTarea);
       }
     }

     
   }

   verTarea(idTarea:number){
     for(let listTotal of this.listaTareas){
      for (let listaTarea of listTotal.lista){
        if(listaTarea.id === idTarea){
          this.nombreTareaModal = listaTarea.nombre;
          this.descripcionTarea = listaTarea.descripcion;
          this.colaboradoresModal = listaTarea.colaboradores;
          this.comentariosModal = listaTarea.comentarios;
        }
      }
     }
    
   }

   agregarColaborador(){
        let colaboradorObj = {
          nombre: this.nombreColaborador,
          correo: this.correoColaborador
        }

        for(let list of this.listaTareas){
          for (let listaTarea of list.lista){
            if(listaTarea.id === this.idCurrent){
              listaTarea.colaboradores.push(colaboradorObj);
            }
          }
        }

   }

   agregarComentario(){
     let comentario = {
       comentario: this.comentario
     }
    for(let listTotal of this.listaTareas){
      for (let listaTarea of listTotal.lista){
        if(listaTarea.id === this.idCurrent){
          listaTarea.comentarios.push(comentario);
        }
      }
     }
   }

   obtenerIdTarea(id:number){
    this.idCurrent = id;
   }

  ngOnInit(): void {
  }

}
