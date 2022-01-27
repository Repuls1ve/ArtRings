import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-toggler',
  templateUrl: './quantity-toggler.component.html',
  styleUrls: ['./quantity-toggler.component.scss']
})
export class QuantityTogglerComponent {
  @Input()
  public value!: number

  @Output()
  public readonly increased = new EventEmitter<number>()

  @Output()
  public readonly decreased = new EventEmitter<number>()

  public increase(): void {
    this.increased.emit(this.value)
  }

  public decrease(): void {
    this.decreased.emit(this.value)
  }
}
