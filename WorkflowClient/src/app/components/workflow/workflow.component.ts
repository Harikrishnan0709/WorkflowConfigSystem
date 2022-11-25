import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { workflow } from 'src/app/model/workflow_model';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  selectedWf: workflow = new workflow();
  collapsed: boolean = false;
  active: number = 0;
  constructor(
    public route: ActivatedRoute,
    public appService: AppService
  ) {
    this.route
      .queryParams
      .subscribe((data) => {
        console.log(data);
        if (data && data['id'])
          this.appService
            .getWorkflow(data['id'])
            .subscribe((wf: any) => {
              if (wf.length == 1)
                this.selectedWf = wf[0];
            });
      });
  }

  ngOnInit(): void {
  }

}
