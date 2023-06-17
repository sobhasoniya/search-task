import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import{HttpClient, HttpParams}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http:HttpClient) {
    this.responseData = [];
  }

  search = '';
  //AIzaSyB7hdN4-AJenqmGF8a_W1BiH4Q4GOohZQ4
  //https://www.googleapis.com/customsearch/v1?key=AIzaSyB7hdN4-AJenqmGF8a_W1BiH4Q4GOohZQ4&cx=017576662512468239146:omuauf_lfve&q=music
  title = 'search';
   nameTest = "";
   responseData: any[];
   getSearchResult(){
    console.log("test" +" - "+ this.search);

    this.http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyB7hdN4-AJenqmGF8a_W1BiH4Q4GOohZQ4&cx=017576662512468239146:omuauf_lfve&q='+this.search).subscribe
      (response=>
        {
          //console.log(response.item());
          let resSTR = JSON.stringify(response);
          let resJSON = JSON.parse(resSTR);
          console.log(resJSON.body);
          this.responseData = resJSON.items;
       } ,
      error =>{
        console.log("error occur ", error)
      });
   
    
  }
}
