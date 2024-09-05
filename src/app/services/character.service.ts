import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../types/character";
import { Pagination } from "../types/pagination";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Pagination<Character>> {
    return this.http.get<Pagination<Character>>(
      "https://rickandmortyapi.com/api/character"
    );
  }
}
