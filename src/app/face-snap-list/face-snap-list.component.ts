import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {FaceSnapsService} from "../_services/face-snaps.service";
import {interval, Subject, take, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(
    private faceSnapService: FaceSnapsService
  ) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
