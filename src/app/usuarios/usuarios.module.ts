import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './lista/list.component';
import { UserComponent } from './usuario/user.component';

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: [
        ListComponent,
        UserComponent
    ],
    exports: [
        ListComponent,
        UserComponent
    ]
} )
export class UsuariosModule {}
