import { Component, input } from '@angular/core';


@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './Panel.html',
  styleUrl: './Panel.css',
})
export class Panel {

  title = input<string>('')
  padding = input<string>('24px 16px')

}
