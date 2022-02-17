import { Component, forwardRef, Input, Provider } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

type onChange = (value: string) => void
type onTouched = () => void

const TextAreaProvider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true
}

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [TextAreaProvider]
})
export class TextAreaComponent implements ControlValueAccessor {
  @Input()
  public placeholder = ''

  @Input()
  public height = 120

  public value = ''
  public disabled = false

  public onChange: onChange = () => {}
  public onTouched: onTouched = () => {}

  public onInput(event: Event): void {
    const element = event.target as HTMLInputElement
    this.onChange(element.value)
  }

  public writeValue(value: string): void {
    this.value = value
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled
  }

  public registerOnChange(onChange: onChange): void {
    this.onChange = onChange
  }

  public registerOnTouched(onTouched: onTouched): void {
    this.onTouched = onTouched
  }
}
