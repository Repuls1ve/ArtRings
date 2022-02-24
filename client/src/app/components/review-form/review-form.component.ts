import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

export enum ReviewFormControls {
  Name = 'name',
  Comment = 'comment',
  Rating = 'rating'
}

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent {
  @Input()
  public isLoading = false

  @Output()
  public readonly onSubmit = new EventEmitter<FormGroup>()

  public readonly controls = ReviewFormControls
  public readonly form = this.formBuilder.group({
    [this.controls.Name]: ['', Validators.required],
    [this.controls.Comment]: ['', [Validators.required, Validators.minLength(12)]],
    [this.controls.Rating]: [0, Validators.required]
  })

  constructor(private readonly formBuilder: FormBuilder) {}

  public submit(): void {
    this.onSubmit.emit(this.form)
  }

  public get name(): AbstractControl {
    return this.form.get(this.controls.Name)!
  }

  public get comment(): AbstractControl {
    return this.form.get(this.controls.Comment)!
  }

  public get rating(): AbstractControl {
    return this.form.get(this.controls.Rating)!
  }
}
