import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;
  ohSnapBtn!: string;

  ngOnInit(): void {
    this.title = "Kenobi";
    this.description = "Le dernier Jedi";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageURL = "https://www.journaldugeek.com/content/uploads/2022/05/obi-wan-kenobi-critique-star-wars.jpg";
    this.ohSnapBtn = "Oh Snap !";
  }

  onAddSnap() {
    if(this.ohSnapBtn == "Oh Snap !"){
      this.ohSnapBtn = "Oops, Oh Snap !"
      this.snaps++;
    } else {
      this.ohSnapBtn = "Oh Snap !"
      this.snaps--;
    }
  }

}
