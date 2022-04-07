import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, switchMap} from "rxjs/operators";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getReactDeveloperApprenticeshipPhazero$() {
      const header = new HttpHeaders({'Content-Type' : 'application/json'})
      return this.http.get('https://stage.harbour.space/api/v1/scholarship_pages/react-developer-apprenticeship-phazero')
      .pipe(
          map((resp) => resp)
        );
  }
}