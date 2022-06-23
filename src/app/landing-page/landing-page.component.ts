import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private routeur: Router
  ) { }

  ngOnInit(): void {
  }

  onContinue(){
    this.routeur.navigateByUrl('facesnaps');
  }
}
