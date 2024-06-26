import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Fruta } from './fruta.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EMPTY,  catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  baseUrl = "http://localhost:3001/frutas";

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  showOnConsole(msg: String): void{
    console.log(msg);
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration : 3000,
      horizontalPosition : "right",
      verticalPosition : "top"
    })
  }

  create (fruta : Fruta) : Observable<Fruta>{
    return this.http.post<Fruta>(this.baseUrl, fruta);
    } 

    read() :Observable<Fruta[]>{
      return this.http.get<Fruta[]>(this.baseUrl);
  }

  readById(id: string) : Observable<Fruta>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Fruta> (url);
  }

  update (fruta : Fruta) : Observable<Fruta> {
    const url = `${this.baseUrl}/${fruta.id}`;
    return this.http.put<Fruta>(url, fruta);
  }

  delete(fruta : Fruta) : Observable<Fruta>{
    const url = `${this.baseUrl}/${fruta.id}`;
    return this.http.delete<Fruta> (url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e : any): Observable<any>{
    console.log(e);
    this.showMessage("Ocorreu um erro!");
    return EMPTY;
  }

}
