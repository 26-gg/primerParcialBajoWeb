import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona:Persona;
  constructor(private service:PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();
  }

  add(){
    this.service.registrar(this.persona);
  }

}
