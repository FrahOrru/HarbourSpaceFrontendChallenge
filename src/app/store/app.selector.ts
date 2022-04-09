import { createFeatureSelector, createSelector } from "@ngrx/store"
import { FrontendChallenge } from './app.reducer';



export const getAppState = (state: FrontendChallenge) => state;

export const getReactDeveloperApprenticeshipPhazero = createSelector(
    getAppState,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero
)