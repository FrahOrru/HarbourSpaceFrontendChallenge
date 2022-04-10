import { Store, select } from '@ngrx/store';
import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontendChallengeEffects } from 'src/app/store/app.effects';
import { FrontendChallenge } from 'src/app/store/app.reducer';
import { getCompany, getReactDeveloperApprenticeshipPhazero } from 'src/app/store/app.selector';
import { ApprenticeshipPhazero, Scholarship, Company } from '../../interface/apprenticeShipPhazero.interfece';
import * as appActions from '../../store/app.actions';
import { AppState } from '../../store/app.state';
import { getScholarship } from '../../store/app.selector';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public getReactDeveloperApprenticeshipPhazero$: Observable<ApprenticeshipPhazero>;
  public scholarship$: Observable<Scholarship>;
  public company$: Observable<Company>;
  
  public description: string = '';
  public logoSrc: string = '';

  public screenHeight: any;
  public screenWidth: any;

  public column = 2;
  public rowHeight = '800px';

  constructor(private store: Store<AppState>) {
    this.onResize();
    this.getReactDeveloperApprenticeshipPhazero$ = this.store.select(getReactDeveloperApprenticeshipPhazero)
    this.scholarship$ = this.store.select(getScholarship);
    this.company$ = this.store.select(getCompany);
 }

  ngOnInit(): void {
    this.store.dispatch(appActions.reactDeveloperApprenticeshipPhazero());

    this.scholarship$.subscribe((value) => {
      if(value) {
        this.description = value.description[0].data
      }
    })
    this.company$.subscribe((value) => {
      if(value) {
        this.logoSrc = value.logo_dark.src;
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1100) {
      this.column = 1;
      this.rowHeight = '700px'
    } else {
      this.column = 2;
    }
  }

}
