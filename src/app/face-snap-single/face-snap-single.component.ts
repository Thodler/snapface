import { Component, OnInit } from '@angular/core';
import {FaceSnapsService} from "../_services/face-snaps.service";
import {FaceSnap} from "../_models/FaceSnap";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-face-snap-single',
  templateUrl: './face-snap-single.component.html',
  styleUrls: ['./face-snap-single.component.scss']
})
export class FaceSnapSingleComponent implements OnInit {

  facesnap! : FaceSnap

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const snapId = +this.router.snapshot.params['id'];
    this.facesnap= this.faceSnapService.getFaceSnapById(snapId);
  }

}
