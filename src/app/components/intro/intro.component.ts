import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FrontendChallengeEffects } from 'src/app/store/app.effects';
import { FrontendChallenge } from 'src/app/store/app.reducer';
import { getReactDeveloperApprenticeshipPhazero } from 'src/app/store/app.selector';
import { ApprenticeshipPhazero, Scholarship } from '../../interface/apprenticeShipPhazero.interfece';
import * as appActions from '../../store/app.actions';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public getReactDeveloperApprenticeshipPhazero$: Observable<FrontendChallenge>;
  public getReactDeveloperApprenticeshipPhazero: ApprenticeshipPhazero = {} as ApprenticeshipPhazero;
  
  constructor(private store: Store<any>) {
    this.getReactDeveloperApprenticeshipPhazero$ = this.store.pipe(select('app'))
  }

  ngOnInit(): void {
    console.log('wewew')
    this.store.dispatch(appActions.reactDeveloperApprenticeshipPhazero());

    this.getReactDeveloperApprenticeshipPhazero$.subscribe((value) => {
        this.getReactDeveloperApprenticeshipPhazero = value?.reactDeveloperApprenticeshipPhazero;
        console.log(value);
    })
  }

}
