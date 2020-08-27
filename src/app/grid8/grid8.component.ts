import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid8',
  templateUrl: './grid8.component.html',
  styleUrls: ['./grid8.component.scss']
})
export class Grid8Component implements OnInit {
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
