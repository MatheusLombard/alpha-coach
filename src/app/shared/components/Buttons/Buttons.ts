import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-buttons',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './Buttons.html',
  styleUrl: './Buttons.css'
})
export class Buttons {
  public icon = input<string>();
  public value = input.required<string>();
  public class = input<string>();
  public to = input<string>()  ;
}
