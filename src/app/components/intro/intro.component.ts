import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scholarship } from '../../interface/apprenticeShipPhazero.interfece';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public screenHeight: any;
  public screenWidth: any;

  public column = 2;
  public rowHeight = '800px';
  constructor(private store: Store<any>) {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1100) {
      this.column = 1;
      this.rowHeight = '700px'
    } else {
      this.column = 2;
    }
  }

}
