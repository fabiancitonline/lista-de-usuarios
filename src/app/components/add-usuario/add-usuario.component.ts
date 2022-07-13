import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../Usuarios';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/UiService';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
})
export class AddUsuarioComponent implements OnInit {
  nombre_1 = new FormControl('');
  apellido_1 = new FormControl('');
  mail_1 = new FormControl('');
  rut_1 = new FormControl('');
  @Output() onAddUser: EventEmitter<Usuario> = new EventEmitter();
  id!: string;
  nombre!: string;
  apellido!: string;
  mail!: string;
  rut!: string;

  mostrarAgregarUsuario: boolean = false;
  subscription: Subscription;
  usuarios!: Usuario;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.mostrarAgregarUsuario = value));
  }

  ngOnInit(): void {}

  agregarU() {
    if (!this.nombre_1.value) {
      alert('Agregue un nombre');
      return;
    }

    const newUsuario = {
      id: this.id,
      nombre: this.nombre_1.value,
      apellido: this.apellido_1.value,
      mail: this.mail_1.value,
      rut: this.rut_1.value,
    };

    this.onAddUser.emit(newUsuario);
    this.id = '';
    this.nombre_1.setValue('');
    this.apellido_1.setValue('');
    this.mail_1.setValue('');
    this.rut_1.setValue('');
}
}
