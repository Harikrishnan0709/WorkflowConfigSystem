import { Component, OnInit } from '@angular/core';
import { activity } from 'src/app/model/workflow_model';

@Component({
  selector: 'app-activity-viewer',
  templateUrl: './activity-viewer.component.html',
  styleUrls: ['./activity-viewer.component.css']
})
export class ActivityViewerComponent implements OnInit {

  activityList!: activity[];
  selectedActivity: activity = new activity();
  constructor() { }

  ngOnInit(): void {

  }

}
