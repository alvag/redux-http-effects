import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import * as userActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class UserEffects {
    constructor( private actions$: Actions, private userService: UserService ) {}

    @Effect()
    loadUser$ = this.actions$.ofType( userActions.LOAD_USER )
    .pipe(
        switchMap( ( action: any ) => {
            return this.userService.getUserById( action.id )
            .pipe(
                map( user => new userActions.LoadUserSuccess( user ) ),
                catchError( error => of( new userActions.LoadUserFail( error ) ) )
            );
        } )
    );

}
