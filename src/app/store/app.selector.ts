import { createFeatureSelector, createSelector } from "@ngrx/store"
import { FrontendChallenge } from './app.reducer';
import { AppState } from './app.state';


export const selectFeature = (state: AppState) => state.frontendChallenge;

export const getReactDeveloperApprenticeshipPhazero = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero
)

export const getScholarship = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero.scholarship
)

export const getCompany = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero?.scholarship?.company
)

export const getAbout = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero?.scholarship?.about[0]
)

export const getFaq = createSelector(
    selectFeature,
    (state: FrontendChallenge) => state.reactDeveloperApprenticeshipPhazero?.scholarship?.faqs
)