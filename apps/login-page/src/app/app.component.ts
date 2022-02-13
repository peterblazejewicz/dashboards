import { Component } from '@angular/core';

@Component({
  selector: 'dashboards-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '$RESX{{token}:{key}:{Login Page}}';
}
