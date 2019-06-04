import { Component } from '@angular/core';

@Component({
  selector: 'app-merittrac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ant-ui';

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
}
