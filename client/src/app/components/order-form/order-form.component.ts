import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'

export enum OrderFormControls {
  Name = 'name',
  Email = 'email',
  Phone = 'phone',
  Comment = 'comment'
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  public readonly controls = OrderFormControls
  public readonly form = this.formBuilder.group({
    [this.controls.Name]: ['', Validators.required],
    [this.controls.Email]: ['', [Validators.required, Validators.email]],
    [this.controls.Phone]: ['', Validators.required],
    [this.controls.Comment]: ['', [Validators.required, Validators.minLength(12)]]
  })

  constructor(private readonly formBuilder: FormBuilder) {}

  public onSubmit(): void {
    alert('Submitted')
  }
  
  public get name(): AbstractControl {
    return this.form.get(OrderFormControls.Name)!
  }

  public get email(): AbstractControl {
    return this.form.get(OrderFormControls.Email)!
  }

  public get phone(): AbstractControl {
    return this.form.get(OrderFormControls.Phone)!
  }

  public get comment(): AbstractControl {
    return this.form.get(OrderFormControls.Comment)!
  }
}
