import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  cardValue = input<string>()
  cardLabel = input.required<String>()
  type = input<string>()
  icon = signal<string>('')

  classChoosed = computed(() => {
    if(this.type() === 'up'){
      this.icon.set('graph-up-arrow')
    }
  })
}
