import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ChamadaService } from './chamada.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  ajudaN = false;
  ajudaT = false;
  ajudaC = false;
  ajudaQ = false;

  mensagem = 'Parabens!! Voce acertou: ';

  planetaPego: any;

  pontuacao = 0;

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private chamada: ChamadaService) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null],
      clima: [null],
      terreno: [null],
      qtdA: [null]
    })
    
    this.chamada.getPlaneta().subscribe(dados => this.planetaPego = dados)
  }

  onSubmit() {
    console.log(this.formulario.value)
    
    console.log(this.planetaPego)
    
    // .toLowerCase() pra nao ter diferença entre maiusculo e minusculo no nome
    if (this.formulario.get('clima').value.toLowerCase() == this.planetaPego.climate.toLowerCase()) {
      this.pontuacao++
      let msg = "Clima. "
      this.mensagem = this.mensagem.concat(msg)
      //alert('acertou clima')
    }

    if (this.formulario.get('terreno').value.toLowerCase() == this.planetaPego.terrain.toLowerCase()) {
      this.pontuacao++
      let msg = "Terreno. "
      this.mensagem = this.mensagem.concat(msg)
      //alert('acertou terreno')
    }

    if (this.formulario.get('qtdA').value.toLowerCase() == this.planetaPego.films.length) {
      this.pontuacao++
      let msg = "Qtd Apar. "
      this.mensagem = this.mensagem.concat(msg)
      //alert('acertou aparições')
    }
    
    if (this.pontuacao > 0) {
      alert(this.mensagem)
      alert(`Sua pontuação foi de ${this.pontuacao} ponto(s)!!`)
      alert('Reinicie a pagina para jogar novamente')
    } else {
      alert('Você errou tudo!! Sua pontuação foi de 0 ponto')
      alert('Reinicie a pagina para jogar novamente')
    }

    // resetando as variaveis
    this.pontuacao = 0;
    this.mensagem = 'Parabens!! Voce acertou: '
  }

  ajudaNome() {
    this.ajudaN = !this.ajudaN;
  }
  ajudaClima() {
    this.ajudaC = !this.ajudaC;
  }
  ajudaTerreno() {
    this.ajudaT = !this.ajudaT;
  }
  ajudaQtd() {
    this.ajudaQ = !this.ajudaQ;
  }

}
