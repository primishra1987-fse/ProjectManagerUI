import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './UI/user/user.component';
import {ProjectComponent} from './UI/project/project.component';
import {AddTaskComponent} from './UI/add-task/add-task.component';
import {ViewTaskComponent} from './UI/view-task/view-task.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'task',
    component: AddTaskComponent
  },
  {
    path: 'viewTask',
    component: ViewTaskComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
