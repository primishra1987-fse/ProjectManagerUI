import { User } from './user';
import {Task} from './task';
export class Project {
    
    projectId: number;
    projectName: string;
    priority: number = 0;
    startDate: string;
    endDate: string;
    status: string;
    user: User = new User();
    noOfTask: number;
}
