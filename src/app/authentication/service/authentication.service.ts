import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http:HttpClient) { }

    createUser(body:any):Observable<any>{
        return this.http.post(`${environment.Main_Api}user`,body)
    }

    login(body:any):Observable<any>{
        return this.http.post(`${environment.Main_Api}user/login`,body)
    }

    isAuthenticated(){
        if(sessionStorage.getItem('access_token') != undefined){
            // let validateToken = 
            return true
        }
        else if(localStorage.getItem('access_token') != undefined){
            return true
        }
        else{
            return false
        }
    }

    logOut(){
        sessionStorage.clear();
        localStorage.clear();
    }

}