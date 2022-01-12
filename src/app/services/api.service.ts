import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { textModel } from '../models/textModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}

  configUrl= 'http://localhost:5050/text/'
  
  getAllTexts():Observable<textModel[]>{
    return this.http.get<textModel[]>(this.configUrl)
  }

  getText(id: number):Observable<textModel[]>{
    const url = `${this.configUrl}${id}`
    return this.http.get<textModel[]>(url)
  }

  addText(text:textModel){
    return this.http.post(this.configUrl,text)
  }  
  
  getMaxId(): Observable<textModel[]>{
    const url = `${this.configUrl}maxId`
    return this.http.get<textModel[]>(url)
  }

  deleteText(id: number){
    const url = `${this.configUrl}${id}`
    return this.http.delete(url)
  }

  editText(text: textModel): Observable<textModel>{
    return this.http.put<textModel>(this.configUrl,text)
  }
}
