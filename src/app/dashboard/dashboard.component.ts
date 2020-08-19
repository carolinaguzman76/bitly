import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../services/short-url.service';
import { ShortLink } from '../models/shortLink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  btnString = 'Shorter';
  url = '';
  urlShort = '';

  constructor(private shortUrlService: ShortUrlService) { }

  ngOnInit(): void {
  }

  shorter(): void {

    if (this.btnString === 'Shorter') {
      this.shortUrlService.getUrlShort(this.url).subscribe(data => {
        console.log(data.link);
        this.urlShort = data.link;
      },
      err => {
        alert('Se ha producido un error');
      })

      this.btnString = 'Reset';

    } else {
      this.btnString = 'Shorter';
      this.urlShort = '';
      this.url = '';
    }

  }
}
