import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { CharacterService } from "../services/character.service";
import { Character } from "../types/character";

@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./character-list.component.html",
  styleUrl: "./character-list.component.css",
  providers: [CharacterService],
})
export class CharacterListComponent {
  public characters: Character[] = [];
  constructor(private characterService: CharacterService) {
    this.characterService.getCharacters().subscribe((characters) => {
      console.log(characters);
      this.characters = characters.results;
    });
  }
}
