import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShortLink } from '../models/shortLink';


@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  urlBitly = 'https://api-ssl.bitly.com/v4/shorten';
  token = '214e793fe4fbc72aeb50e06b324af79f3a6da39f';

  constructor(private http: HttpClient) { }

  getUrlShort(url: string): Observable<ShortLink> {
    const token: HttpHeaders  = this.getToken();
    const body = {
      long_url: url
    };

    return this.http.post<ShortLink>(this.urlBitly, body, {headers: token});
  }

  getToken(): HttpHeaders {

    const tokenHeader = new HttpHeaders()
    .set ('Authorization', 'Bearer ' + this.token)
    .set ('Content-Type', 'application/json' );
    return tokenHeader;
  }

}
