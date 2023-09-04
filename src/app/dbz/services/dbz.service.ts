import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }]


  addCharacter(character: Character) {
    const newPersonaje: Character = { ...character, id: uuid() }
    this.characters.push(newPersonaje)
    console.log('Llego --> ', newPersonaje)
  }

  // eliminarPersona(index: number) {
  //   console.log('llego', index);
  //   this.characters.splice(index, 1);
  // }

  eliminarPersonaById(id: string) {
    console.log('llego', id);
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
