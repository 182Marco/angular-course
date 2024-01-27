import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TryComponent } from './try/try.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-course';
}
