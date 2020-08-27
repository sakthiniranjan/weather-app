import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-grid9',
  templateUrl: './grid9.component.html',
  styleUrls: ['./grid9.component.scss']
})
export class Grid9Component implements OnInit {
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
