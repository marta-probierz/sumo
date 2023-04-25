import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogosService {
  constructor(private httpService: HttpClient) {}

  getLogos() {
    return this.httpService.get('../../assets/data/logos.json');
  }
}
