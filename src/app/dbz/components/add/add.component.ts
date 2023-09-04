import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }


  constructor() { }

  ngOnInit(): void {
  }

  emitCharacter() {
    console.log(this.character);
    if (this.character.name.length === 0) return
    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }

}
