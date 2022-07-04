import { Injectable } from '@angular/core';
import {FaceSnap} from "../_models/FaceSnap";
import {take, map, Observable, tap, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }

  getAllFaceSnaps(): Observable<FaceSnap[]>
  {
    return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps")
  }

  getFaceSnapById(id: number): Observable<FaceSnap>
  {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>
  {
    return this.getFaceSnapById( faceSnapId ).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updateFaceSnap))
    );
  }

addNewFaceSnap(formValue: FaceSnap){
  /*const faceSnap: FaceSnap = {
  ...formValue,
  snaps: 0,
  createdDate: new Date(),
  id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
};
this.faceSnaps.push(faceSnap);*/
}

}
