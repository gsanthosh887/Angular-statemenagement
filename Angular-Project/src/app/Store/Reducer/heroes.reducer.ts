export interface HeroState {
    heros: Hero[];
}

import { Hero } from "src/app/interfaces/hero";
import { createReducer, on } from "@ngrx/store";
import { addHero, loadHerosData } from "../Actions/heroes.actions";

export const initialState:HeroState = {
    heros: []
}
export const heroReducer = createReducer(
    initialState,
    on(loadHerosData, (state, action) => {

       
        return {...state, 
            heros: [...state.heros, ...action.data]
        }
    }),
    on(addHero, (state, action) => {

       
        return {...state, 
            heros: [...state.heros, {id: Number(Date.now().toString()), name: action.name}]
        }
    })
    
)