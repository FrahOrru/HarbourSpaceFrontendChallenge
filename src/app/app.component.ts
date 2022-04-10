import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getReactDeveloperApprenticeshipPhazero } from './store/app.selector';
import { Observable } from 'rxjs';
import { ApprenticeshipPhazero } from './interface/apprenticeShipPhazero.interfece';
import { FrontendChallenge } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontendChallenge';

  constructor(private _store: Store<any>) {

  }


  ngOnInit(): void {
  }
}
