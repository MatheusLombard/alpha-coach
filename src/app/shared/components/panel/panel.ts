import { Component, computed, input } from '@angular/core';


@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {

  title = input<string>('')
  padding = input<string>('24px 16px')

}
