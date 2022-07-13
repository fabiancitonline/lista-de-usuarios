import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuarios';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/usuarios';

  constructor(private http: HttpClient) {
  }

    getUsuarios() : Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl);
   }
   addUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario, httpOptions);
  }
}
