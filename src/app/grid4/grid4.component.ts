import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss']
})
export class Grid4Component implements OnInit {
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
