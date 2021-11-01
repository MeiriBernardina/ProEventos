import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public eventos: any=[];
  public eventosFiltrados: any=[];
  marginImg: number = 2;
  widthImg: number = 100;
  mostrarImagem: boolean = true;
  private _filtroLista: string = '';


public get filtroLista(): string{
  return this._filtroLista;
}

public set filtroLista(value: string){
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtraEventos(this.filtroLista): this.eventos;

}



filtraEventos(filtrarPor: string): any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    //(evento: any) => evento.tema.toLocaleLowerCase().indexof(filtrarPor) !== -1
    //(evento: (tema: string; local: string)) => evento.tema.toLocaleLowerCase().indexOf(filtroPor) !== -1)

    (evento:{tema: string; local:string; lote:string; dataEvento:string}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    || evento.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -1

  );
}
//importar o HttpClient
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(){
    this.mostrarImagem=!this.mostrarImagem;
  }
//apagou o array
  public getEventos():void {
    this.http.get('https://localhost:5000/api/Eventos').subscribe(
      response => {
        this.eventos = response,
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );

  }

}
