import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {FaceSnapsService} from "../_services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(
    private faceSnapService: FaceSnapsService
  ) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.faceSnaps;
  }

}
