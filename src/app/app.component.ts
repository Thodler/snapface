import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./_models/FaceSnap";
import {map, filter, interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interval$!: Observable<string>;
  ngOnInit(){
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `Je suis ${value} et je suis pair` : `Je suis ${value} et je suis impair`),
      tap(value => this.logger(value))
    );
  }

  logger(text: string): void
  {
    console.log(`Log: ${text}`);
  }
}
