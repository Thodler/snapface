import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {FaceSnapsService} from "../_services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap-row',
  templateUrl: './face-snap-row.component.html',
  styleUrls: ['./face-snap-row.component.scss']
})
export class FaceSnapRowComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapServ: FaceSnapsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onDetail(id: number) {
    this.router.navigateByUrl(`facesnaps/${id}`);
  }
}
