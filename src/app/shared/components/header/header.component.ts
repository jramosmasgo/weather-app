import { Component, OnInit } from '@angular/core';
import { AutocompleteService } from 'src/app/core/services/autocomplete.service';
import { AutocompleteItem } from '../../models/autocompleteItem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  providers: [AutocompleteService],
})
export class HeaderComponent implements OnInit {
  constructor(private autocomleteService: AutocompleteService) {}

  itemsAutocomplete: AutocompleteItem[] = [];

  ngOnInit(): void {}

  getResultsAutcomplete(word: string): void {
    if (word.length < 3) {
      this.itemsAutocomplete = [];
      return;
    }
    this.autocomleteService.getElementsAutocomplete(word).subscribe({
      next: (res) => (this.itemsAutocomplete = res),
      error: (err) => console.error(err),
    });
  }
}
