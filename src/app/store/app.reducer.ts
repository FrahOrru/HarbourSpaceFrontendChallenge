import { ActionReducer, createReducer, on } from "@ngrx/store"
import * as AppActions from './app.actions';

export interface FrontendChallenge {
    loading: boolean;
    reactDeveloperApprenticeshipPhazero: any;
}

export const initialState: FrontendChallenge = {
    loading: false,
    reactDeveloperApprenticeshipPhazero: null
}

export const frontendChallengeReducer: ActionReducer<FrontendChallenge> = createReducer(
    initialState,
    on(AppActions.reactDeveloperApprenticeshipPhazero, (state: FrontendChallenge) => ({...state, loading: true})),
    on(AppActions.SuccessReactDeveloperApprenticeshipPhazero, (state: FrontendChallenge, { response }) => ({ ...state, loading: false, reactDeveloperApprenticeshipPhazero: response })),
    on(AppActions.FailedReactDeveloperApprenticeshipPhazero, (state: FrontendChallenge) => ({ ...state, loading: false }))
)