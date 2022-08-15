import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;


  todayWithPipe = Date;

  //tasks: Task[] = TASKS;
  pipe = new DatePipe('en-US');
  date = this.pipe.transform(Date.now(), 'yyyy-MM-dd');
  fecha: string ="";

  constructor() { }

  ngOnInit(): void {

    if (this.date != null) {
        this.fecha = this.date;
    }

  }


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);

  }



}
