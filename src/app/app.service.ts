import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
    return this.http.get<Route[]>('./assets/routes.json');
  }
}
