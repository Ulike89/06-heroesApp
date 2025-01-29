import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: false,
  
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  searchInput = new FormControl('');
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor( private heroesService: HeroesService, private router: Router ){}

  searchHero(){
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value)
    .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }
}
