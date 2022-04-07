import { createAction, props } from "@ngrx/store";

export const reactDeveloperApprenticeshipPhazero = createAction('[1] - bla');
export const SuccessReactDeveloperApprenticeshipPhazero = createAction('[2] - bla', props<{response: any}>());
export const FailedReactDeveloperApprenticeshipPhazero = createAction('[2] - bla');