import { Component } from '@angular/core';
import {Universidad} from "./models/universidad.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listadoUniversidades: any[];

  constructor(private  httpClient: HttpClient) {
    this.listadoUniversidades = [];
  }

  public listaUniversidad() {
    this.httpClient.get<Universidad>("http://universities.hipolabs.com/search?country=spain").subscribe(
      {
        next: (datos: Universidad) => {
          console.log("han llegado los datos", datos);
          this.listadoUniversidades = datos;
        },
        error: (error) => {

        }
      }
    )
  }
}
