import { Component, Input, OnInit } from '@angular/core';
import { Facesnap } from '../model/Face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() facesnap!:Facesnap;

SnapButtonText!: string;
userHasSnapped!: Boolean;

ngOnInit(): void {
  
  this.SnapButtonText='oh Snap';
  this.userHasSnapped=false;
  
}


OnSnap():void {
  if (this.userHasSnapped) {
    this.unSnap();
    
  } else {
    this.Snapping();

  }
}
     unSnap():void {
        this.facesnap.removeSnap();
        this.SnapButtonText='oh snap';
        this.userHasSnapped=false;
      }
        Snapping():void {
         this.facesnap.addSnap();
         this.SnapButtonText='Oops, unSnap!';
         this.userHasSnapped=true;

        }

}