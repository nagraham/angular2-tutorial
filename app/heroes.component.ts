import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{

  // Attributes
  selectedHero: Hero;
  heroes: Hero[];

  // Methods
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this.router.navigate(link);
  }
}
