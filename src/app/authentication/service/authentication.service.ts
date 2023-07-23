import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }



    isAuthenticated() {
        if (sessionStorage.getItem('token') != undefined) {
            // let validateToken = 
            return true
        }
        else if (localStorage.getItem('token') != undefined) {
            return true
        }
        else {
            return false
        }
    }

    logOut() {
        sessionStorage.clear();
        localStorage.clear();
    }

    public getJSON(): Observable<any> {
        return this.http.get("assets/data.json");
    }

    updateUser(data: any) {
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)

        for (let i = 0; i < value.length; i++) {
            if (data.email == value[i].email) {
                value[i] = data
            }
        }

        sessionStorage.setItem("user", JSON.stringify(value))
        return { error: false }
    }

    setUser(data: any) {
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)

        for (let i = 0; i < value.length; i++) {
            if (data.email == value[i].email) {
                return { error: true }
            }
        }

        value.push(data)
        sessionStorage.setItem("user", JSON.stringify(value))
        return { error: false }
    }

    deleteUser(data: any) {
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)

        for (let i = 0; i < value.length; i++) {
            if (data.email == value[i].email) {
                value.splice(i, 1)
                sessionStorage.setItem("user", JSON.stringify(value))
                return { error: false }
            }
        }
        return { error: true }
    }

    returnUser(data: any) {
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)
        for (let i = 0; i < value.length; i++) {
            if (data.email == value[i].email ) {
                return value[i]
            }
        }
        return { error: true }
    }

    check(data: any) {
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)
        for (let i = 0; i < value.length; i++) {
            if (data.email == value[i].email && data.password == value[i].password) {
                return value[i]
            }
        }
        return { error: true }
    }

    getAllUser(){
        let temp: any = sessionStorage.getItem("user")
        let value = JSON.parse(temp)
        return value
    }

    getAllMessage(){
        let temp: any = sessionStorage.getItem("message")
        let value = JSON.parse(temp)
        return value
    }

    saveMessage(data: any) {
        let temp: any = sessionStorage.getItem("message")
        let value = JSON.parse(temp)
        value.push(...data)

        sessionStorage.setItem("message", JSON.stringify(value))
        return { error: false }
    }

}