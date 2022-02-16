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

  @Input()
  public isLoading = false

  @Input()
  public disabled = false
 
  @Output()
  public readonly clicked = new EventEmitter()

  public handleClick(): void {
    this.clicked.emit()
  }
}
