import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from '../../services/carga-imagenes.service';
import { FileItem } from '../../models/file-item';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  
  archivos: FileItem[] = [];

  constructor( public cargaImagenes: CargaImagenesService ) { }

  ngOnInit(): void {
  }

  cargarImagenes(){

    console.log('hola');
    this.cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(){

    this.archivos = [];
  }

}
