import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURI: String = "http://localhost:8096/task/";
  constructor(private http: HttpClient) { }

  getTasks(): any {
    return this.http.get(this.baseURI + 'getAllTasks');
  }

  getAllParent(): any {
    return this.http.get(this.baseURI + 'getAllParent');
  }

  getTaskById(taskId): any {
        return this.http.get(this.baseURI + 'getTask/' + taskId);
  }

  addTask(task): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    console.log("Display Project ID:"+task.project.projectId);
    return this.http.post(this.baseURI + 'add', task, httpOptions);
  }

  addParentTask(task): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    console.log("Parent task-- " +task.taskName);
    return this.http.post(this.baseURI + 'addParent', task, httpOptions);
  }

  endTask(taskId): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    return this.http.put(this.baseURI + 'suspend/' + taskId, httpOptions);
  }

  updateTask(task:Task): any {
    console.log(" edit task service " +task.taskId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    return this.http.put(this.baseURI + 'update/'+task.taskId ,task, httpOptions);
  }
}
