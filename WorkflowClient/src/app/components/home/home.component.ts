import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { workflow } from 'src/app/model/workflow_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedWorkflow: workflow = new workflow();
  workflows: workflow[] = [
    { name: 'Test workflow',  description: 'Sample workflow for testing and learning'},
    { name: 'Product analysis',  description: 'Product analysis and the finance tracking'},
    { name: 'Employee report workflow',  description: 'Stores employee details'},
    { name: 'Development Tracking',  description: 'Application development team workflow'},
    { name: 'Audit workflow',  description: 'Audit based financial workflow'},
    { name: 'Human resource workflow',  description: 'Human resource information and the tasks configuration'},
    { name: 'Company archive workflow',  description: 'Storage of company data and archives'},
  ];
  constructor(
    public offcanvasService: NgbOffcanvas,
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.appService
      .getAllWorkflow()
      .subscribe((data: any) => {
        this.workflows = data;
      });
  }

  addWorkflow() {
    if (this.selectedWorkflow.name == '') {
      alert('Please enter a workflow name');
    } else {
      this.appService
        .addWorkflow(this.selectedWorkflow)
        .subscribe((data) => {
          this.ngOnInit();
          this.selectedWorkflow = new workflow();
        });
      this.offcanvasService.dismiss('Close click');
    }
  }

  deleteWorkflow(wf: workflow) {
    if (wf.id && confirm('Are you sure to delete the workflow \'' + wf.name + '\'')) {
      this.appService
        .deleteWorkflow(wf.id)
        .subscribe((data) => {
          this.ngOnInit();
        });
    }
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  dateTime(dateString: string | undefined) {
    return new Date(dateString || '').toDateString() || '';
  }

  navigateToWorkflow(id: number | undefined) {
    this.router.navigate(['workflow'], {
      queryParams: {
        id
      }
    });
  }

}
