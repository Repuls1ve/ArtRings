import { Component, forwardRef, Input, Provider } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

type onChange = (value: string) => void
type onTouched = () => void

const TextFieldProvider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFieldComponent),
  multi: true
}

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [TextFieldProvider]
})
export class TextFieldComponent implements ControlValueAccessor {
  @Input()
  public placeholder = ''

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
