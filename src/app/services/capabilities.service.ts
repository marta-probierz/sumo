import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CapabilitiesService {
  constructor(private httpService: HttpClient) {}

  getCapabilities() {
    return this.httpService.get('../../assets/data/capabilities.json');
  }
}
