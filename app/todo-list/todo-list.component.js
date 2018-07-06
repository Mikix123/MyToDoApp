"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_item_1 = require("~/models/todo-item");
var page_1 = require("ui/page");
var ToDoListComponent = /** @class */ (function () {
    function ToDoListComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
        this.toDoItems = [];
        for (var i = 0; i < 10; i++) {
            this.toDoItems.push(new todo_item_1.ToDoItem("Test item " + [i], false));
        }
    }
    ToDoListComponent.prototype.ngOnInit = function () { };
    ToDoListComponent = __decorate([
        core_1.Component({
            selector: "ToDoList",
            moduleId: module.id,
            templateUrl: "./todo-list.component.html",
            styleUrls: ["./todo-list.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ToDoListComponent);
    return ToDoListComponent;
}());
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0RBQThDO0FBQzlDLGdDQUErQjtBQVEvQjtJQUdFLDJCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBa0IsQ0FBQztJQVpSLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJMkIsV0FBSTtPQUhwQixpQkFBaUIsQ0FhN0I7SUFBRCx3QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwifi9tb2RlbHMvdG9kby1pdGVtXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiVG9Eb0xpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdG9kby1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RvZG8tbGlzdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb0RvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHRvRG9JdGVtczogVG9Eb0l0ZW1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy50b0RvSXRlbXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy50b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0oXCJUZXN0IGl0ZW0gXCIgKyBbaV0sIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19