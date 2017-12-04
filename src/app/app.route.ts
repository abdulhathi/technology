import { Routes } from '@angular/router';
import { TechnologyComponent } from './content/technology/technology.component';
import { ConceptComponent } from './content/concept/concept.component';
import { PageNotFoundComponent } from './not-found.component';

export const Technology_Routes : Routes = [
  {pathMatch:"full", path: "", component: TechnologyComponent},
  {pathMatch:"full", path: "technology", component: TechnologyComponent},
  {pathMatch:"full", path: "concept", component : ConceptComponent},
];