import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./_models/FaceSnap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faceSnaps!: FaceSnap[];

  ngOnInit(){
    this.faceSnaps = [
      {
        title: "Kenobi",
        description: "Le dernier Jedi",
        imageUrl: "https://www.journaldugeek.com/content/uploads/2022/05/obi-wan-kenobi-critique-star-wars.jpg",
        createdDate: new Date(),
        snaps: 64308,
        location: "Tatoine"
      },{
        title:"Dark Vador",
        description: "Le Mechant",
        imageUrl: "https://www.breizh-info.com/wp-content/uploads/2021/04/dark_vador.jpeg",
        createdDate: new Date(),
        snaps: 10062
      },{
        title:"Yoda",
        description: "Le grand maitre Jedi",
        imageUrl: "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2EplurimediaNews.2F2018.2F01.2F11.2F99cdd0a3-823a-4ef7-902f-6f44aff8abfb.2Ejpeg/1200x600/crop-from/top/quality/80/star-wars-maitre-yoda-de-retour-dans-l-episode-8.jpg",
        createdDate: new Date(),
        snaps: 1000,
        location: "Dagobah"
      }
    ];
  }
}
