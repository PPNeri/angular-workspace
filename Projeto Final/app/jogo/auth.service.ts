import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../index/usuario';
import { ChamadaService } from './chamada.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  mostrarUsuarioEmitter = new EventEmitter<number>();

  usuarios: Usuario;

  constructor() { }

  fazerLogin(usuario: Usuario, usuarios: any) {

    for (let i=0; i< usuarios.length; i++) {
      if (usuarios[i].nome == usuario.nome && usuarios[i].senha == usuario.senha) {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true)
        this.mostrarUsuarioEmitter.emit(usuarios[i])
        console.log(usuarios[i])
        alert('foi')
      }
    }

    /* if (usuario.nome == "alberto" && usuario.senha == "123") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true)
      alert('foi')
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false)
    } */

  }

}
