import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { on, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFaq } from 'src/app/store/app.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;
  dropdownOpen = false;
  public faq$: Observable<any>;
  
  public screenHeight: any;
  public screenWidth: any;

  public gridCols = 2;
  public gridRowsHeight = '300px';

  constructor(private render: Renderer2,
              private _store: Store<AppState>) {
                this.onResize();
                this.faq$ = this._store.select(getFaq);
              }

  ngOnInit(): void {

    const element:any = document.getElementsByClassName('accordion-pannel');
    let index = 1;

    for(let elem of element) {
      console.log('elem', elem);
      this.render.listen(elem, 'click', (target)=>{
        console.log('css-button' + index);
        (document.getElementById('css-button' + index) as HTMLFormElement).classList.toggle("animate");
      });
      index++;

    }
    
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
