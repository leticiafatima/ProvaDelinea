import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Candidate } from '../model/candidate';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

const apiUrl = 'https://delineaapi.herokuapp.com:443/candidate/';
const urlLogin = 'http://delineaapi.herokuapp.com/o/token/,'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  register(candidate): Observable<Candidate> {
    return this.http.post<Candidate>(apiUrl, candidate, httpOptions)
  }

  list(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(apiUrl)
  }

  getCandidateById(id: number): Observable<Candidate> {
    const url = `${apiUrl}${id}`;
    return this.http.get<Candidate>(url)
  }

  editCandidate(id, candidate): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, candidate, httpOptions)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
