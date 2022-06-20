import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  ohSnapBtn!: string;

  ngOnInit(): void {
    this.ohSnapBtn = "Oh Snap !";
  }

  onClickSnap() {
    if(this.ohSnapBtn == "Oh Snap !"){
      this.ohSnapBtn = "Oops, Oh Snap !"
      this.faceSnap.snaps++;
    } else {
      this.ohSnapBtn = "Oh Snap !"
      this.faceSnap.snaps--;
    }
  }

}
