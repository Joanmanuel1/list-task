import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Input() task: Task = TASKS[0];


  //tasks: Task[] = TASKS;


  constructor() { }

  ngOnInit(): void {
  }

}
