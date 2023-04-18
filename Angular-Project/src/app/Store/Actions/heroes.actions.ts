import { Hero } from "src/app/interfaces/hero";
import { createAction, props } from '@ngrx/store';
import { HeroState } from "../hero.store";


export enum HeroActionType {
  ADD_ITEM = 'ADD_HERO',
  ALL_DATA = 'ALL_HEROES'
}

export const addHero = createAction(HeroActionType.ADD_ITEM, props<{name: string}>())



export const loadHerosData = createAction(HeroActionType.ALL_DATA, props<{ data: Hero[] }>())
