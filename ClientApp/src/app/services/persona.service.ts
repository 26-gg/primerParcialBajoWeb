import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  Consultar():Persona[]{
    return JSON.parse(localStorage.getItem('datos'));
  }

  registrar(persona:Persona){
    let personas:Persona[] = [];
    let per:boolean = false;
    if(this.Consultar() != null){
      personas = this.Consultar();
    }
    for (let index = 0; index < personas.length; index++) {
      if(personas[index].identificacion === persona.identificacion){
        per=true;
      }
    }
    if(per === false){
      personas.push(persona);
      localStorage.setItem('datos',JSON.stringify(personas));
      alert('Se ha registrado una nueva persona con ID' + JSON.stringify(persona.identificacion));
    }else{
      alert('Ya se encuentra registrado');
    }
    
    
  }
}
