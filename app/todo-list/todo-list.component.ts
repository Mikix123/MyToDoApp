import { Component, OnInit } from "@angular/core";
import { ToDoItem } from "~/models/todo-item";
import { Page } from "ui/page";

@Component({
  selector: "ToDoList",
  moduleId: module.id,
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class ToDoListComponent implements OnInit {
  public toDoItems: ToDoItem[];

  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
    this.toDoItems = [];

    for (let i = 0; i < 10; i++) {
      this.toDoItems.push(new ToDoItem("Test item " + [i], false));
    }
  }

  ngOnInit(): void {}
}
