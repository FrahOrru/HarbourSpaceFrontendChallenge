import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scholarship } from '../../interface/apprenticeShipPhazero.interfece';
import { getScholarship } from '../../store/app.selector';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public scholarship$: Observable<Scholarship>;

  constructor(private store: Store<any>) {
    this.scholarship$ = this.store.select(getScholarship);
  }

  ngOnInit(): void {
    this.scholarship$.subscribe((value) => {
      console.log('scholarship', value);
    })
  }

}
