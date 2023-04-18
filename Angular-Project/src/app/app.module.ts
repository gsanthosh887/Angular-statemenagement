import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HerosComponent } from './heros/heros.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
// import { heroReducer } from './Store/Reducer/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { heroReducer } from './Store/Reducer/heroes.reducer';
// import { HeroEffect } from './Store/hero.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // EffectsModule.forFeature([HeroEffect]),
    StoreModule.forRoot({heroReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
