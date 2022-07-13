import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/UiService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lista de usuarios';

  mostrarAgregarUsuario: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.mostrarAgregarUsuario = value);
}

  ngOnInit(): void {}
  toggleAgregar() {
    this.uiService.toggleAgregar();
  }
}
