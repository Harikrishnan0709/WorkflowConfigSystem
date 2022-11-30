import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user, workflow } from './model/workflow_model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllWorkflow() {
    return this.http.get(environment.service + 'workflow/all');
  }

  getWorkflow(id: number) {
    return this.http.get(environment.service + 'workflow/' + id);
  }

  addWorkflow(wf: workflow) {
    return this.http.post(environment.service + 'workflow/add', wf);
  }

  deleteWorkflow(id: number) {
    return this.http.delete(environment.service + 'workflow/delete', { params: { id: id } });
  }

  addActivity() {

  }

  login(user: user) {
    return this.http.get(environment.service + 'user/' + user.name);
  }
}
