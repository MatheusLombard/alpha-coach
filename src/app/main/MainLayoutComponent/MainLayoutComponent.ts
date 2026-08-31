import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from "@angular/router";
import { Brand } from '../../shared/components/brand/brand';
import { Buttons } from "../../shared/components/Buttons/Buttons";

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, Brand, Buttons],
  templateUrl: './MainLayoutComponent.html',
  styleUrl: './MainLayoutComponent.css',
})
export class MainLayoutComponent {}
