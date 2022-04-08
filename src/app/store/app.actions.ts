import { createAction, props } from "@ngrx/store";
import { Scholarship } from '../interface/apprenticeShipPhazero.interfece';

export const reactDeveloperApprenticeshipPhazero = createAction('[1] - get full info');
export const SuccessReactDeveloperApprenticeshipPhazero = createAction('[1] - get full info success', props<{response: any}>());
export const FailedReactDeveloperApprenticeshipPhazero = createAction('[1] - get full info failed');
