import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TechnologyComponent } from './content/technology/technology.component';
import { ConceptComponent } from './content/concept/concept.component';
import { PageNotFoundComponent } from './not-found.component';
import { Technology_Routes } from './app.route';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    TechnologyComponent,
    ConceptComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Technology_Routes, { enableTracing: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
