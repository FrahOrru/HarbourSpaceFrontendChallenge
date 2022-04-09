import { Component, OnInit, Renderer2 } from '@angular/core';
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
  selectedPath = 'prova';
  selectionForm: FormGroup = new FormGroup({
    typeSelection: new FormControl(1)
  });

  constructor(private render: Renderer2) { }

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
}
