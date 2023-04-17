import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HerosService } from '../heros.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { addHero } from '../Store/Actions/heroes.actions';
// import { heroDataSuccess } from '../Store/hero.selector';
import { Hero } from '../interfaces/hero';
import { HeroStore } from '../Store/hero.store';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  providers: [HeroStore]
})
export class HerosComponent implements OnInit {
  data = <any>[];
  constructor(
    private store: HeroStore,
    private http: HttpClient,
    private herosService: HerosService) {      
     }

     heroes$ = this.store.heros$;
    AddHero() {
      this.store.addHero({id: 13, name: 'Santhosh Guntha'})
    }
    
    
  

    ngOnInit(){
      

  }

}
