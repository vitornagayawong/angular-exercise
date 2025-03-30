import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {



    http = inject(HttpClient);
  
    API = 'http://localhost:8080/api/student';
  
    constructor() { }
  
    save(curso: Curso): Observable<string> {
      return this.http.post<string>(this.API+'/save', curso, {responseType: 'text' as 'json'});
    }
    
    findAll(): Observable<Curso[]>{
      return this.http.get<Curso[]>(this.API+'/findAll');
      
    }  
  
    findById(id: number): Observable<Curso>{
      return this.http.get<Curso>(this.API+'/findById/'+id);
    }
  
    deleteById(id: number): Observable<string>{
      return this.http.delete<string>(this.API+'/delete/'+id, {responseType: 'text' as 'json'});
    }
  
  
    update(curso: Curso, id: number): Observable<string> {
      return this.http.put<string>(this.API+'/update/'+id, curso, {responseType: 'text' as 'json'});
    }
}
