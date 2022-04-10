import { createFeatureSelector, createSelector } from "@ngrx/store"
import { FrontendChallenge } from './app.reducer';

export interface AppState {
    frontendChallenge: FrontendChallenge;
}

export const selectFeature = (state: AppState) => state.frontendChallenge;

export const getReactDeveloperApprenticeshipPhazero = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero
)