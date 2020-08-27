import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'http://api.openweathermap.org/data/2.5/weather';
apikey = '52ee031e4cbb621d2a96dbc929dcca83';
  constructor(private http: HttpClient) { }
getWeatherDataByCityName(city: string)
{
  let params = new HttpParams()
  .set('q',city)
  .set('units', 'imperial')
  .set('appid', this.apikey)
  return this.http.get(this.url, { params})
}
}
