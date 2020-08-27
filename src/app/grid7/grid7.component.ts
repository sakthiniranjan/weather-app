import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid7',
  templateUrl: './grid7.component.html',
  styleUrls: ['./grid7.component.scss']
})
export class Grid7Component implements OnInit {
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
