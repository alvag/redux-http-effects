import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { LoadUser } from '../../store/actions';
import { User } from '../../models/usuario.model';

@Component( {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: []
} )
export class UserComponent implements OnInit {

    user: User;
    loading: boolean;
    error: any;

    constructor( private router: ActivatedRoute,
                 private store: Store<AppState> ) { }

    ngOnInit() {

        this.store.select( 'user' )
        .subscribe( userData => {
            this.user = userData.user;
            this.loading = userData.loading;
            this.error = userData.error;
        } );

        this.router.params
        .subscribe( params => {
            const id = params.id;
            this.store.dispatch( new LoadUser( id ) );
        } );
    }

}
