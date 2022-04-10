import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { on } from '@ngrx/store';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;
  dropdownOpen = false;

  public screenHeight: any;
  public screenWidth: any;

  public gridCols = 2;
  public gridRowsHeight = '300px';

  constructor(private render: Renderer2) {
    this.onResize();
  }

  ngOnInit(): void {

    const element = document.getElementsByClassName('accordion-pannel');

    this.render.listen(element[0], 'click', (target)=>{
      (document.getElementById('css-button') as HTMLFormElement).classList.toggle("animate");
    });
  }

  onSelection() {
    this.dropdownOpen = !this.dropdownOpen;
    (document.getElementById('myDropdown') as HTMLFormElement).classList.toggle("show");
    (document.getElementById('dropbtn') as HTMLFormElement).classList.toggle("opened");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1100) {
      this.gridCols = 1;
      this.gridRowsHeight = '150px'
    } else {
      this.gridCols = 2;
    }
  }
}
