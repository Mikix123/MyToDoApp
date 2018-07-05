import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ToDoList",
    moduleId: module.id,
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.css"]
})
export class ToDoListComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
