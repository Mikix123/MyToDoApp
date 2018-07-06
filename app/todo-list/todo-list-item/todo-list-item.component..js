"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_item_1 = require("~/models/todo-item");
var ToDoListItemComponent = /** @class */ (function () {
    function ToDoListItemComponent() {
    }
    ToDoListItemComponent.prototype.ngOnInit = function () {
    };
    ToDoListItemComponent.prototype.onClickDone = function () {
        this.toDoItem.done = !this.toDoItem.done;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", todo_item_1.ToDoItem)
    ], ToDoListItemComponent.prototype, "toDoItem", void 0);
    ToDoListItemComponent = __decorate([
        core_1.Component({
            selector: "ToDoListItem",
            moduleId: module.id,
            templateUrl: "./todo-list-item.component.html",
            styleUrls: ["./todo-list-item.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], ToDoListItemComponent);
    return ToDoListItemComponent;
}());
exports.ToDoListItemComponent = ToDoListItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LWl0ZW0uY29tcG9uZW50Li5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC1pdGVtLmNvbXBvbmVudC4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0RBQThDO0FBUTlDO0lBR0U7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBVlE7UUFBUixZQUFLLEVBQUU7a0NBQVUsb0JBQVE7MkRBQUM7SUFEaEIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDOztPQUNXLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwifi9tb2RlbHMvdG9kby1pdGVtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJUb0RvTGlzdEl0ZW1cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdG9kby1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdG9kby1saXN0LWl0ZW0uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0b0RvSXRlbTpUb0RvSXRlbTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0RvbmUoKSB7XHJcbiAgICB0aGlzLnRvRG9JdGVtLmRvbmUgPSAhdGhpcy50b0RvSXRlbS5kb25lO1xyXG4gIH1cclxufVxyXG4iXX0=