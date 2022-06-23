import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private routeur: AppRoutingModule
  ) { }

  ngOnInit(): void {
  }

  linkFaceSnap(){

  }
}
