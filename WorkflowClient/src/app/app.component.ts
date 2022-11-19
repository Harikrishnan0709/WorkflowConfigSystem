import { Component } from '@angular/core';
import { AppService } from './app.service';
import { user } from './model/workflow_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkflowClient';

}
