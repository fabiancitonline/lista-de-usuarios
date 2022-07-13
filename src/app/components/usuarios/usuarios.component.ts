import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Usuario } from '../../Usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios!: Usuario[];

  constructor(private usuarioService: UsersService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log(res);
      }
    );
    }
  addUsuario(usuario: Usuario) {
    this.usuarioService
      .addUsuarios(usuario)
      .subscribe((usuario) => this.usuarios.push(usuario));
  }
}
