import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {FaceSnapListComponent} from "../face-snap-list/face-snap-list.component";
import {FaceSnapsService} from "../_services/face-snaps.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  ohSnapBtn!: string;

  constructor(
    private faceSnapServ: FaceSnapsService
  ) {
  }

  ngOnInit(): void {
    this.ohSnapBtn = "Oh Snap !";
  }

  onClickSnap(faceSnapId: number) {
    if(this.ohSnapBtn == "Oh Snap !"){
      this.faceSnapServ.snapFaceSnapById(faceSnapId, 'snap').pipe(

        tap(() => this.ohSnapBtn = "Oops, Oh Snap !")
      );
    } else {
      this.faceSnapServ.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.ohSnapBtn = "Oh Snap !")
      )
    }
  }

}
