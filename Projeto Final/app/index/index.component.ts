import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { ChamadaService } from '../jogo/chamada.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  usuarios: any;

  constructor(private authService: AuthService, private chamada: ChamadaService) { }

  ngOnInit() {
    this.chamada.getUsuario().subscribe(dados => this.usuarios = dados)
  }

  fazerLogin() {
    console.log(this.usuario)
    this.authService.fazerLogin(this.usuario, this.usuarios);
  }

}
