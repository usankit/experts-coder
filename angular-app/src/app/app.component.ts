import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Chatbot } from './shared/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Chatbot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mobileOpen = false;
}
