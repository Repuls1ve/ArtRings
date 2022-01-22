import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { BehaviorSubject, delay } from 'rxjs'

@Directive({
  selector: '[visibility]'
})
export class VisibilityDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  private debounceTime = 0

  @Input()
  private threshold = 0.9

  @Output()
  public readonly visible = new EventEmitter<boolean>()

  private subject$ = new BehaviorSubject<IntersectionObserverEntry | null>(null)
  private observer!: IntersectionObserver

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createObserver()
  }

  ngAfterViewInit(): void {
    this.startObserving()
  }

  ngOnDestroy(): void {
    this.observer.disconnect()
    this.subject$.complete()
  }

  private createObserver(): void {
    const options = this.createOptions()
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.isIntersecting ?
        this.subject$.next(entry) :
        this.subject$.next(null)
      })
    }, options)
  }

  private createOptions(): IntersectionObserverInit {
    const options = {
      threshold: this.threshold
    } as IntersectionObserverInit
    return options
  }

  private startObserving(): void {
    this.observer.observe(this.elementRef.nativeElement)
    this.subject$.pipe(
      delay(this.debounceTime)
    ).subscribe(entry => {
      this.visible.emit(Boolean(entry))
    })
  }
}
