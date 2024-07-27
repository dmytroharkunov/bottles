import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaygroundComponent } from "./components/playground/playground.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bottles';
}
