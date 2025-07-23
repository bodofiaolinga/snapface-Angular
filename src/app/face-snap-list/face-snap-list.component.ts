import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { Facesnap } from '../model/Face-snap';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
facesnap!:Facesnap[];


  ngOnInit(): void {
    this.facesnap=[
    new Facesnap(
          'bodif',
          'bodif est fullstack',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date,
          10
    ),
      new Facesnap(
          'bodif',
          'bodif est fullstack',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date,
          189
       
    )];

    this.facesnap[0].setlocation("a la montagne");
      
  }
}
