import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontendChallenge';
  public tryObs$: any;

  constructor(private _store: Store<any>) {}


  ngOnInit(): void {
  }

  onClick() {
    this._store.dispatch(appActions.reactDeveloperApprenticeshipPhazero());

  }
}
