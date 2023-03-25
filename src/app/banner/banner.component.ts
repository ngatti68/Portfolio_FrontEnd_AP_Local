import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerService } from '../services/banner.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() user!: string;

  banner: Banner[] = [];

  constructor(
    private bannerserv: BannerService,
    private tokenServ: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarBanner();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBanner(): void {
    this.bannerserv.lista().subscribe((data) => {
      this.banner = data;
    });
  }

}
