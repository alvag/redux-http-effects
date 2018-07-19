import { Component, OnInit } from '@angular/core';
import { User } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as usersActions from '../../store/actions';

@Component( {
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: []
} )
export class ListComponent implements OnInit {

    users: User[] = [];
    loading: boolean;
    error: any;

    constructor( private store: Store<AppState> ) { }

    ngOnInit() {

        this.store.select( 'users' )
        .subscribe( usersData => {
            this.users = usersData.users;
            this.loading = usersData.loading;
            this.error = usersData.error;
        } );

        this.store.dispatch( new usersActions.LoadUsers );

    }

}
