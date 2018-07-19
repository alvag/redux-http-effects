import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor( private actions$: Actions, private userService: UserService ) {
    }

    @Effect()
    loadUsers$ = this.actions$.ofType( usersActions.LOAD_USERS )
    .pipe(
        switchMap( () => {
            return this.userService.getUsers()
            .pipe(
                map( users => new usersActions.LoadUsersSuccess( users ) ),
                catchError( error => of( new usersActions.LoadUsersFail( error ) ) )
            );
        } )
    );

}
