import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './lista/list.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: [
        ListComponent,
        UsuarioComponent
    ],
    exports: [
        ListComponent,
        UsuarioComponent
    ]
} )
export class UsuariosModule {}
