import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/interfaces/hero';


export interface HeroState {
    heros: Hero[];
}

@Injectable()
export class HeroStore extends ComponentStore<HeroState> {
    constructor() {
        super({heros: [
            { id: 12, name: 'Dr. Nice' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr. IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
          ]})  
    }

    addHero = this.updater((state, newHero: Hero) => ({
        ...state,
        heros: [newHero, ...state.heros]
    }) )

    heros$: Observable<Hero[]> = this.select((state) => state.heros)

}
