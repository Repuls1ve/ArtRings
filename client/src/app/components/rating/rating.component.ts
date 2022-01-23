import { Component, Input, OnInit } from '@angular/core';

type star = 'semi' | 'filled' | 'outlined'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  public rating!: number

  public stars: star[] = []

  ngOnInit(): void {
    this.fillStars()
  }

  public starSource(star: star): string {
    const baseSource = '/assets/svg/'
    switch(star) {
      case 'filled':
        return baseSource + 'star-filled.svg'
      case 'outlined':
        return baseSource + 'star-outlined.svg'
      case 'semi': 
        return baseSource + 'star-semi.svg'
    }
  }

  private fillStars(): void {
    this.stars = [1, 2, 3, 4, 5].map(num => {
      if (num <= this.rating) {
        return 'filled'
      }
      else if (num - this.rating < 1) {
        return 'semi'
      }
      else {
        return 'outlined'
      }
    })
  }
}
