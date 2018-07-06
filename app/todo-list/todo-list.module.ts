import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { ToDoListRoutingModule } from "./todo-list-routing.module";
import { ToDoListComponent } from "./todo-list.component";
import { CalendarComponent } from "~/calendar/calendar.component";
import { ToDoListItemComponent } from "~/todo-list/todo-list-item/todo-list-item.component.";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ToDoListRoutingModule,
        TNSCheckBoxModule
    ],
    declarations: [
        ToDoListComponent,
        CalendarComponent,
        ToDoListItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ToDoListModule { }
