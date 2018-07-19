import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: reducers.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usersReducer
};
