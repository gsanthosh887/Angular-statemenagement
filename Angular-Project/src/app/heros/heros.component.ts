import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HerosService } from '../heros.service';
import { Store, props, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { addHero } from '../Store/Actions/heroes.actions';
// import { heroDataSuccess } from '../Store/hero.selector';
import { Hero } from '../interfaces/hero';
import { HeroStore } from '../Store/hero.store';
import { addHero, loadHerosData } from '../Store/Actions/heroes.actions';
import { HeroState } from '../Store/Reducer/heroes.reducer';

interface StoreState{
  heroReducer:HeroState
}


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  providers: [HeroStore]
})
export class HerosComponent implements OnInit {
  data: any;
  constructor(
    private store: Store<StoreState>,
    private http: HttpClient,
    private herosService: HerosService) {      
     }
public allHerosList$ = this.store.select((state) => state.heroReducer.heros);
    //  heroes$ = this.store.heros$;
    AddHero() {
      console.log("add")
      this.store.dispatch(addHero({name: 'Santhu'}));
    }
    
    loadAllHeroes() {
      this.store.dispatch(loadHerosData({data: this.data}));
    }
  

    ngOnInit(){
      this.data = this.herosService.getHeroes().subscribe(items => {
        this.data = items;
        console.log(items)
        this.loadAllHeroes()
      });
      

    }

}
