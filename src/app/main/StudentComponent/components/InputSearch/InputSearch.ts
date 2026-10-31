import { Component, output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  imports: [],
  templateUrl: './InputSearch.html',
  styleUrl: './InputSearch.css',
})
export class InputSearch {
  valueSearched = output<string | undefined>()

}
