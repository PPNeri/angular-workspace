import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'sw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private usuario:Usuario=new Usuario();

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logar(){

  
    this.auth.logar(this.usuario);

  }

}
