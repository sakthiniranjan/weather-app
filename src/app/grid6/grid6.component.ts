import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid6',
  templateUrl: './grid6.component.html',
  styleUrls: ['./grid6.component.scss']
})
export class Grid6Component implements OnInit {
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
