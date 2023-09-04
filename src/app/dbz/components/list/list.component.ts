import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input()
  public characterList: Character[] = []

  @Output() emitIndex: EventEmitter<string> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }


  // onDeleteCharacter(index: number): void {
  //   console.log('Index', index);
  //   this.emitIndex.emit(index)
  // }

  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    this.emitIndex.emit(id)
  }

}
