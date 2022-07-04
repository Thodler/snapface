import { Component, OnInit } from '@angular/core';
import {FaceSnapsService} from "../_services/face-snaps.service";
import {FaceSnap} from "../_models/FaceSnap";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-face-snap-single',
  templateUrl: './face-snap-single.component.html',
  styleUrls: ['./face-snap-single.component.scss']
})
export class FaceSnapSingleComponent implements OnInit {

  facesnap$! : Observable<FaceSnap>
  faceID!: number
  snapType! :'snap'|'unsnap'

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.faceID= +this.router.snapshot.params['id'];
    this.facesnap$= this.faceSnapService.getFaceSnapById(this.faceID);
    this.snapType = 'snap';
  }

  onSnapEvent(value: 'snap' | 'unsnap'){
    this.faceSnapService.snapFaceSnapById(this.faceID, value).subscribe();
    this.snapType = value;
    this.facesnap$ = this.faceSnapService.getFaceSnapById(this.faceID);
  }

}
