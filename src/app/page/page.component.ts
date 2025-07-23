import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [

  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {


  constructor(private router: Router) { }


  onContinue() {
    this.router.navigateByUrl('facesnap');
}

}
