import { Component, forwardRef, Input, Provider } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

type onChange = (rating: number) => void
type onTouched = () => void

const RatingInputProvider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingInputComponent),
  multi: true
}

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [RatingInputProvider]
})
export class RatingInputComponent implements ControlValueAccessor {
  @Input()
  public name = 'rating'

  @Input()
  public height = 20

  public stars = Array(5).fill(false)

  public onChange: onChange = () => {}
  public onTouched: onTouched = () => {}

  public rate(rating: number): void {
    this.writeValue(rating)
  }

  public get value(): number {
    return this.stars.reduce((total, starred) => total + (starred ? 1 : 0), 0)
  }

  public starSource(starred: boolean): string {
    const baseSource = '/assets/svg/'
    return baseSource + (starred ? 'star-filled.svg' : 'star-outlined.svg')
  }

  public writeValue(rating: number): void {
    this.stars = this.stars.map((_, index) => rating > index)
    this.onChange(rating)
  }

  public registerOnChange(onChange: onChange): void {
    this.onChange = onChange
  }

  public registerOnTouched(onTouched: onTouched): void {
    this.onTouched = onTouched
  }
}
