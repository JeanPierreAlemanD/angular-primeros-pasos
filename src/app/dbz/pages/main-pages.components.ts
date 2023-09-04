import { DbzService } from './../services/dbz.service';
import { DbzModule } from './../dbz.module';
import { Character } from './../interfaces/character.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-pages.component.html'
})

export class MainPageComponent implements OnInit {


    constructor(private dbzService: DbzService) { }



    get characters(): Character[] {
        return [...this.dbzService.characters]
    }

    ngOnInit() { }

    onDeleteCharacter(id: string): void {
        this.dbzService.eliminarPersonaById(id)
    }



    onNewCharacter(character: Character) {
        this.dbzService.addCharacter(character)
    }
}
