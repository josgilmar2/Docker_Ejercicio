import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../dto/tutorial.dto';
import { TutorialResponse } from '../interfaces/tutorial.interface';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  createTutorial(tutorial: Tutorial): Observable<TutorialResponse> {
    return this.http.post<TutorialResponse>(`http://localhost:6868/api/tutorials`, tutorial);
  }

  getAllTutorials(): Observable<TutorialResponse[]> {
    return this.http.get<TutorialResponse[]>(`http://localhost:6868/api/tutorials`);
  }

}
