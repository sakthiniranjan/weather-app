import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss']
})
export class Grid3Component implements OnInit {
  weather;
  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }
}
