import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
