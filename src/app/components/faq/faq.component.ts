import { Component, OnInit, Renderer2 } from '@angular/core';
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
  selectedPath = 'prova';
  selectionForm: FormGroup = new FormGroup({
    typeSelection: new FormControl(1)
  });
  public faq$: Observable<any>;

  constructor(private render: Renderer2,
              private _store: Store<AppState>) {
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
}
