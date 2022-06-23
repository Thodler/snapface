import { Injectable } from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
        id:1,
      title: "Kenobi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus vehicula lacus, a scelerisque eros ornare et. Integer accumsan accumsan augue, eget pharetra orci ornare eu.",
      imageUrl: "https://www.journaldugeek.com/content/uploads/2022/05/obi-wan-kenobi-critique-star-wars.jpg",
      createdDate: new Date(),
      snaps: 173,
      location: "Tatoine"
    },{
      id:2,
      title:"Dark Vador",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ligula non orci scelerisque aliquet sed non libero. Vivamus quis turpis id massa aliquet condimentum. Donec eu nisl eleifend leo placerat tempus. Praesent commodo massa bibendum, pellentesque lectus tristique, tincidunt lectus. Integer venenatis consectetur urna, vitae rhoncus nunc ultrices ut.",
      imageUrl: "https://www.breizh-info.com/wp-content/uploads/2021/04/dark_vador.jpeg",
      createdDate: new Date(),
      snaps: 138
    },{
      id:3,
      title:"Yoda",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget eleifend mauris. Aliquam tincidunt lobortis pharetra. Praesent nec ante eu metus ornare laoreet tincidunt ut justo. Cras pretium sem nec placerat porttitor. Suspendisse arcu lorem, mattis ac leo vitae, dapibus pulvinar dolor.",
      imageUrl: "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2EplurimediaNews.2F2018.2F01.2F11.2F99cdd0a3-823a-4ef7-902f-6f44aff8abfb.2Ejpeg/1200x600/crop-from/top/quality/80/star-wars-maitre-yoda-de-retour-dans-l-episode-8.jpg",
      createdDate: new Date(),
      snaps: 29,
      location: "Dagobah"
    }
  ];

  getAllFaceSnaps(): FaceSnap[]
  {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap
  {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!faceSnap){
      throw new Error('FaceSnap not Found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void
  {
    const faceSnap = this.getFaceSnapById( faceSnapId );
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
  }

}
