import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {FaceSnapSingleComponent} from "./face-snap-single/face-snap-single.component";
import {NewFaceSnapComponent} from "./new-face-snap/new-face-snap.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'facesnaps/:id', component: FaceSnapSingleComponent },
  {path:'facesnaps', component: FaceSnapListComponent },
  {path:'create', component: NewFaceSnapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
