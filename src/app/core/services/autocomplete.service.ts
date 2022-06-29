import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AutocompleteItem } from 'src/app/shared/models/autocompleteItem.model';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  constructor(private httpClient: HttpClient) {}

  apiService: string = `${environment.apiWeather.baseUrl}/search.json`;

  getElementsAutocomplete(searchWord: string): Observable<AutocompleteItem[]> {
    const params = new HttpParams().set('q', searchWord);
    return this.httpClient.get<AutocompleteItem[]>(this.apiService, { params });
  }
}
