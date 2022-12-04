import { identifierName } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { workflow } from 'src/app/model/workflow_model';

export const COUNTRIES: any[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'France',
		flag: 'c/c3/Flag_of_France.svg',
		area: 640679,
		population: 64979548,
	},
	{
		id: 3,
		name: 'Germany',
		flag: 'b/ba/Flag_of_Germany.svg',
		area: 357114,
		population: 82114224,
	},
	{
		id: 4,
		name: 'Portugal',
		flag: '5/5c/Flag_of_Portugal.svg',
		area: 92090,
		population: 10329506,
	},
	{
		id: 5,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 6,
		name: 'Vietnam',
		flag: '2/21/Flag_of_Vietnam.svg',
		area: 331212,
		population: 95540800,
	},
	{
		id: 7,
		name: 'Brazil',
		flag: '0/05/Flag_of_Brazil.svg',
		area: 8515767,
		population: 209288278,
	},
	{
		id: 8,
		name: 'Mexico',
		flag: 'f/fc/Flag_of_Mexico.svg',
		area: 1964375,
		population: 129163276,
	},
	{
		id: 9,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 10,
		name: 'India',
		flag: '4/41/Flag_of_India.svg',
		area: 3287263,
		population: 1324171354,
	},
	{
		id: 11,
		name: 'Indonesia',
		flag: '9/9f/Flag_of_Indonesia.svg',
		area: 1910931,
		population: 263991379,
	},
	{
		id: 12,
		name: 'Tuvalu',
		flag: '3/38/Flag_of_Tuvalu.svg',
		area: 26,
		population: 11097,
	},
	{
		id: 13,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  selectedWf: workflow = new workflow();
  collapsed: boolean = false;
  activities: any[] = [
    {id: 1, name: 'Prerequisite', description: 'Prerequisite activity', type: 'Activity', parent: 'root'},
    {id: 2, name: 'Workflow management', description: 'workflow manage and setup', type: 'Activity', parent: 'root'},
    {id: 3, name: 'Requests', description: 'Request for the user', type: 'Activity', parent: 'root'},
    {id: 4, name: 'Approval', description: 'Approve user data', type: 'Approval Activity', parent: 'root'},
    {id: 5, name: 'Reports', description: 'Final summary report', type: 'Dashboard', parent: 'root'},
  ];
  constructor(
    public route: ActivatedRoute,
    public appService: AppService,
    public offcanvasService: NgbOffcanvas,
    public ngbModal: NgbModal
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
    this.selectedWf.name = 'Analysis workflow 1';
  }


  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openPopup(content: TemplateRef<any>) {
    this.ngbModal.open(content, {size: 'lg'});
  }

  dateTime(dateString: string | undefined) {
    return new Date(dateString || '').toDateString() || '';
  }


}
