
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Description, Scholarship } from '../../interface/apprenticeShipPhazero.interfece';
import { getAbout } from 'src/app/store/app.selector';
import { getScholarship } from '../../store/app.selector';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about$: Observable<Description>;
  public scholarship$: Observable<Scholarship>;
  public screenHeight: any;
  public screenWidth: any;

  public columnFirstGrid = 2;
  public columnSecondGrid = 3;
  public rowHeightFirstGrid = '900px';
  public rowHeightSecondGrid = '300px';


  constructor(private _store: Store<AppState>) {
    this.onResize();
    this.about$ = this._store.select(getAbout);
    this.scholarship$ = this._store.select(getScholarship);
  }


  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1100) {
      this.columnFirstGrid = 1;
      this.rowHeightFirstGrid = '500px'

      this.columnSecondGrid = 2;
    } else {
      this.columnFirstGrid = 2;
    }
  }

}
