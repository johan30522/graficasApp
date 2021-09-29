import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redes } from '../interfaces/redes';
import { map, delay } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private readonly http: HttpClient) { }

  public getRedes() {
    return this.http
      .get(`http://localhost:3000/grafica`);

  }
  public getFormatedValuesRedes() {
    return this.getRedes()
      .pipe(
        delay(1500),
        map(
          (data => {
            
            const labels=Object.keys(data);
            const valores=Object.values(data);
            return {
              labels,valores
            };
          })
        )
      )
  }

}
