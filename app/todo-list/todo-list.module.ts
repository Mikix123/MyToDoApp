import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ToDoListRoutingModule } from "./todo-list-routing.module";
import { ToDoListComponent } from "./todo-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ToDoListRoutingModule
    ],
    declarations: [
        ToDoListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ToDoListModule { }
