// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { select, Store } from '@ngrx/store';
// import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
// import { HerosService } from '../heros.service';
// import { herosSuccess, addHero } from './Actions/heroes.actions';
// import { heroDataSuccess } from './hero.selector'; 
 
// @Injectable()
// export class HeroEffect {
//   constructor(
//     private actions$: Actions,
//     private herosService: HerosService,
//     private store: Store
//   ) {}
 
//   loadAllBooks$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(heroDataSuccess),
//       withLatestFrom(this.store.pipe(select(heroDataSuccess))),
//       mergeMap(([, heroformStore]) => {
//         if (heroformStore.length > 0) {
//           return EMPTY;
//         }
//         return this.herosService
//           .getHeroes()
//           .pipe(map((data) => herosSuccess({ allHeros: data })));
//       })
//     )
//   );
// }