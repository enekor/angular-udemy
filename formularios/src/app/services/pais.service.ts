import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api = 'https://restcountries.com/v3.1/all'
  paises:any[] = []

  constructor(private http:HttpClient) { }

  getPaises():any[]{
   let countries:Observable<Country[]> = this.http.get<Country[]>(this.api)

   countries.subscribe(paises2=> 
    {
      return paises2.forEach(pais => {
        return this.paises.push({
          nombre: pais.name.common,
          codigo: pais.cca3
        });
      });
    });

   return this.paises
  }
}
