import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {

  title = input.required<string>()
}
