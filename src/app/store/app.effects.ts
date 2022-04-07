import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { ApiService } from "../app-service/api.service";
import * as appActions from './app.actions';
import { catchError, map, exhaustMap} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class FrontendChallengeEffects {

    tryCall2$ = createEffect(() => 
    this._actions$.pipe(
        ofType(appActions.reactDeveloperApprenticeshipPhazero),
        exhaustMap(() => this._api.getReactDeveloperApprenticeshipPhazero$().pipe(
        map(response => appActions.SuccessReactDeveloperApprenticeshipPhazero({response})),
        catchError(() => of(appActions.FailedReactDeveloperApprenticeshipPhazero()))
    ))));
    
    constructor(private _api: ApiService,
        private _actions$: Actions) { }
} 