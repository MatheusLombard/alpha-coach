import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputText } from "../../../../shared/components/InputText/InputText";
import { Buttons } from "../../../../shared/components/Buttons/Buttons";
import { Brand } from "../../../../shared/components/brand/brand";

@Component({
  selector: 'app-login-page',
  imports: [InputText, Buttons, Brand],
  templateUrl: './login-page.html',
})
export class LoginPage {}
