import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private mostrarAgregarUsuario: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAgregar(): void {
    this.mostrarAgregarUsuario = !this.mostrarAgregarUsuario;
    this.subject.next(this.mostrarAgregarUsuario);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
