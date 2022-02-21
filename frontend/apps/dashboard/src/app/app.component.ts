import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboards-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = '$RESX{{token}:{key}:{Dashboard App}}';
}
