import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Brand } from '../../shared/components/Brand/Brand';
import { Buttons } from "../../shared/components/Buttons/Buttons";

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, Brand, Buttons],
  templateUrl: './MainLayoutComponent.html',
  styleUrl: './MainLayoutComponent.css',
})
export class MainLayoutComponent {}
