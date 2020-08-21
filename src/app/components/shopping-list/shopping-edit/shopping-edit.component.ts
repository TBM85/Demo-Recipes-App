import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) shopListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shopListService.getIngredient(index);
        this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClearInput() {
    this.shopListForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shopListService.deleteIngredients(this.editedItemIndex);
    this.onClearInput();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
