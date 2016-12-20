import { Directive, Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	private varsUrl = '/app/vars.json';  // URL to web API

	constructor(private http:Http) {}

	private _request = new Request({
		method: "GET",
		url: this.varsUrl
	});

	getData(){
		return this.http.get(this.varsUrl)
		.map((response: Response) => response.json());
	}

	getProductName() {
		return this.http.request(this._request)
		.map((res => res.json()));
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
