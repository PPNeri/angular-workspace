import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ChamadaService } from '../jogo/chamada.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  planetaAchado: any;

  selecaoSelect = false;

  planetas = new Array();

  formulario2: FormGroup;

  cont = 0;

  constructor(private chamada: ChamadaService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {

    this.formulario2 = this.formBuilder.group({
      nome: [null],
      clima: [null],
      terreno: [null],
      qtdA: [null]
    })

    for (let i=1; i< 62; i++) {
      this.chamada.getPlanetaC(i).subscribe(dados => this.popularPlanetas(dados))//this.planetas[i] = dados)
    }

    console.log(this.planetas)
  }

  popularPlanetas(dados) {
    this.planetas[this.cont] = dados
    this.cont++
  }


  onChange(nome) {  
 
    for (let i=0; i < this.planetas.length; i++) {
      if (nome == this.planetas[i].name) {
        this.planetaAchado = this.planetas[i]
        //console.log(this.planetaAchado)
        //alert(this.planetaAchado.name)
      }
    }
  
    this.formulario2.patchValue({
      nome: [this.planetaAchado.name],
      clima: [this.planetaAchado.climate],
      terreno: [this.planetaAchado.terrain],
      qtdA: [this.planetaAchado.films.length]
    })

  }

  resetaDadosForm(formulario2){
    this.formulario2.patchValue({
      nome: [null],
      clima: [null],
      terreno: [null],
      qtdA: [null]
    })
  }

  selecionouSelect() {
    this.selecaoSelect = true;
  }
}
