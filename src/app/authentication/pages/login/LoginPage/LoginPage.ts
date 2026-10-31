import { Component } from '@angular/core';
import { InputText } from "../../../../shared/components/InputText/InputText";
import { Buttons } from "../../../../shared/components/Buttons/Buttons";
import { Brand } from "../../../../shared/components/Brand/Brand";

@Component({
  selector: 'app-login-page',
  imports: [InputText, Buttons, Brand],
  templateUrl: './LoginPage.html',
})
export class LoginPage {}
