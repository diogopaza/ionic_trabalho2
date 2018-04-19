import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl =  'https://reqres.in/api/users?page=2';

  getUsers(){

    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data=>{
        resolve(data.data);
      },err =>{
          console.log(err);
      });
    });

  }


}
