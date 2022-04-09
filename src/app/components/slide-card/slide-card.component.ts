import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss']
})
export class SlideCardComponent implements OnInit {
  public reviews: {id: string}[] = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<p> < </p>', '<p> > </p>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() {}
  ngOnInit(): void {
    
  }
}
