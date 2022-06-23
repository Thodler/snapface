import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {FaceSnapListComponent} from "../face-snap-list/face-snap-list.component";
import {FaceSnapsService} from "../_services/face-snaps.service";

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

  onClickSnap() {
    if(this.ohSnapBtn == "Oh Snap !"){
      this.ohSnapBtn = "Oops, Oh Snap !"
      this.faceSnapServ.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.ohSnapBtn = "Oh Snap !"
      this.faceSnapServ.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }

}
