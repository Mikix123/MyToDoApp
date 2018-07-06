import { Component, OnInit, Input } from "@angular/core";
import { ToDoItem } from "~/models/todo-item";

@Component({
  selector: "ToDoListItem",
  moduleId: module.id,
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class ToDoListItemComponent implements OnInit {
  @Input() toDoItem:ToDoItem;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  onClickDone() {
    this.toDoItem.done = !this.toDoItem.done;
  }
}
