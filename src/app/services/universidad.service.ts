import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universidad} from "../models/universidad.model";

export class UniversidadService {
  public listadoDeUniversidades: string = "http://universities.hipolabs.com/search?country=spain";

  constructor(private httpClient: HttpClient) {
  }

  public listaUniversidad(): Observable<Universidad[]> {
    return this.httpClient.get<Universidad[]>("http://universities.hipolabs.com/search?country=spain");
  }
}
