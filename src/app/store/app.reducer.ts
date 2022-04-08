import { ActionReducer, createReducer, on } from "@ngrx/store"
import * as AppActions from './app.actions';
import { ApprenticeshipPhazero, Scholarship } from '../interface/apprenticeShipPhazero.interfece';

export interface FrontendChallenge {
    loading: boolean;
    reactDeveloperApprenticeshipPhazero: ApprenticeshipPhazero;
}

export const initialState: FrontendChallenge = {
    loading: false,
    reactDeveloperApprenticeshipPhazero: {
        scholarship: {
            
        }
    } as ApprenticeshipPhazero,
}

export const frontendChallengeReducer: ActionReducer<FrontendChallenge> = createReducer(
    initialState,
    on(AppActions.reactDeveloperApprenticeshipPhazero, (state: FrontendChallenge) => ({...state, loading: true})),
    on(AppActions.SuccessReactDeveloperApprenticeshipPhazero, (state: FrontendChallenge, { response }) => ({ ...state, loading: false, reactDeveloperApprenticeshipPhazero: response })),
    on(AppActions.FailedReactDeveloperApprenticeshipPhazero, (state: FrontendChallenge) => ({ ...state, loading: false }))

)