import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detailblog } from '../pages/detailblog/detailblog.model';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient) { }

  // newsapiurl
  newsApiUrl = "http://compro-api.ddnsfree.com/blogs";
  // newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8102b6d807234649813c5dc2d86619a6";

  // blog() 
  blog():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //detailblog
  getDetailblogById(id: any)
  {
    return this._http.get<Detailblog>(this.newsApiUrl + '/' + id);
  }

  //load-spinner
  getUsers() {
    return this._http.get(this.newsApiUrl)
  } 

}