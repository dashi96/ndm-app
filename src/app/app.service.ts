import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getData(): Observable<Route[]> {
    return this.http.get('./assets/routes.json').pipe(
      map((response: any) => {
        return response
      })
    );
  }
}
