import { Component, OnInit } from '@angular/core';

import { CapabilitiesService } from '../services/capabilities.service';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss'],
})
export class CapabilitiesComponent implements OnInit {
  capabilitiesData: any;

  constructor(private capabilitiesService: CapabilitiesService) {}

  ngOnInit(): void {
    this.capabilitiesService.getCapabilities().subscribe((res) => {
      this.capabilitiesData = res;
    });
  }
}
