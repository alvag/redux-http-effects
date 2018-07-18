import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styles: []
})
export class ListaComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuarioService.getUsers().subscribe(usuarios => {
            this.usuarios = usuarios;
            console.log(this.usuarios);
        });
    }

}
