import { Usuario } from './../../Usuarios';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent implements OnInit {
  @Input() usuario!: Usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
