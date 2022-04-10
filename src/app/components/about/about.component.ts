import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Description, Scholarship } from '../../interface/apprenticeShipPhazero.interfece';
import { getAbout } from 'src/app/store/app.selector';
import { getScholarship } from '../../store/app.selector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about$: Observable<Description>;
  public scholarship$: Observable<Scholarship>;

  constructor(private _store: Store<AppState>) {
    this.about$ = this._store.select(getAbout);
    this.scholarship$ = this._store.select(getScholarship);
  }

  ngOnInit(): void {
  }

}
