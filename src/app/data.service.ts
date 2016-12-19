import { Directive, Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
@Injectable()
export class DataService {
	private varsUrl = '/app/vars.json';  // URL to web API
	constructor(private http:Http) {}

	getData(){
		return this.http.get(this.varsUrl)
		.map((response: Response) =>response.json());
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
