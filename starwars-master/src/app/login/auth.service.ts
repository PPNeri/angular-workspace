import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado:boolean =false
  constructor(private router:Router) { }

  logar(usuario:Usuario){

    if(
      
      usuario.nome==='usuario@email.com' && usuario.senha==='123456'
      
      ){

      this.usuarioAutenticado=true;
      this.router.navigate(['/starwars/categories'])

    }else{
      window.alert('Usuario/Senha incorretos');
    }

  }

}
