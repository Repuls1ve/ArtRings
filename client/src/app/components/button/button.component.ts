import { Component, EventEmitter, Input, Output } from '@angular/core'

export type themes = 'primary' | 'secondary'
export type types = 'button' | 'menu' | 'reset' | 'submit'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('type')
  public buttonType: types = 'button'

  @Input()
  public theme: themes = 'primary' 

  @Input()
  public text = ''
 
  @Output()
  public readonly click = new EventEmitter()

  public handleClick(): void {
    this.click.emit()
  }
}
