import { Component, Input } from '@angular/core'
import { IProductReview } from 'src/app/models/product.model'

const mockReview: IProductReview = {
  author: 'Андрей и Екатерина',
  content: 'Долго искали обручальные кольца. Тут нам не навязывали ничего, мы просто выбрали. Всё приятно. Кольцами очень довольны.',
  rating: 4
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input()
  public review: IProductReview = mockReview
}
