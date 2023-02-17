import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroPresentationComponent } from './hero-presentation/hero-presentation.component';
import { HeroParcoursComponent } from './hero-parcours/hero-parcours.component';
import { HeroRecentComponent } from './hero-recent/hero-recent.component';
import { HeroNutritionComponent } from './hero-nutrition/hero-nutrition.component';
import { HeroPopulaireComponent } from './hero-populaire/hero-populaire.component';
import { HeroSouscatComponent } from './hero-souscat/hero-souscat.component';
import { HeroBlogComponent } from './hero-blog/hero-blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroPresentationComponent,
    HeroParcoursComponent,
    HeroRecentComponent,
    HeroNutritionComponent,
    HeroPopulaireComponent,
    HeroSouscatComponent,
    HeroBlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
