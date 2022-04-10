import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public screenHeight: any;
  public screenWidth: any;

  public columnFirstGrid = 2;
  public columnSecondGrid = 3;
  public rowHeightFirstGrid = '900px';
  public rowHeightSecondGrid = '300px';

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1100) {
      this.columnFirstGrid = 1;
      this.rowHeightFirstGrid = '500px'

      this.columnSecondGrid = 2;
    } else {
      this.columnFirstGrid = 2;
    }
  }

}
