import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scholarship } from '../../interface/apprenticeShipPhazero.interfece';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
  }

}
