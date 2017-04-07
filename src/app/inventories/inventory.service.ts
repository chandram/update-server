import {
  Injectable,
  Inject
} from '@angular/core';
import {Http, RequestMethod, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {BASE_URL} from '../../environments/environment';

@Injectable()
export class InventoryService {

  private opts: RequestOptions;
  private headers: Headers;
  private apiUrl;

  constructor(private http: Http) {
    this.apiUrl = BASE_URL.switchUrl;
    this.headers = new Headers();

    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

    const opts: RequestOptions = new RequestOptions({
      method: RequestMethod.Get
    });
  }

  fetch(query: string): Observable<any[]> {
    /*console.log(query);
    const params: string = [
      `q=${query}`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    console.log(queryUrl); */
    return this.http.get(this.apiUrl, this.headers)
      .map((response: Response) => {
          return (<any>response.json()).map(item => {
            return item;
          });
        });
  }
}
