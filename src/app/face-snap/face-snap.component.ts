import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input() faceSnap!: FaceSnap
  @Input() snapType! :'snap'|'unsnap'
  @Output() newItemEvent = new EventEmitter<'snap' | 'unsnap'>();

  ohSnapBtn!: string;

  constructor(
    private faceSnapServ: FaceSnapsService
  ) {
  }

  ngOnInit(): void {
    if(this.snapType == 'snap')
      this.ohSnapBtn = "Oh Snap !";
    else
      this.ohSnapBtn =  "Oops, Oh Snap !";
  }

  onClickSnap(faceSnapId: number) {
    if(this.ohSnapBtn == "Oh Snap !"){
      this.ohSnapBtn = "Oops, Oh Snap !";
      this.newItemEvent.emit('unsnap')
//      this.faceSnapServ.snapFaceSnapById(faceSnapId, 'snap').subscribe();
//      this.faceSnap = this.faceSnapServ.getFaceSnapById(faceSnapId);
    } else {
      this.ohSnapBtn = "Oh Snap !";
      this.newItemEvent.emit('snap')
//      this.faceSnapServ.snapFaceSnapById(faceSnapId, 'unsnap').subscribe();
//      this.faceSnap = this.faceSnapServ.getFaceSnapById(faceSnapId);
    }
  }

}
