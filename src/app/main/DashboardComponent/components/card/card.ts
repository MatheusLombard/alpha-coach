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

  iconChoosed = computed(() => {
    console.log('passei aqui')
    if(this.type() === 'up'){

      return 'graph-up-arrow'
    }else{
      return 'graph-down-arrow'
    }
  })

  danger = computed(() => {
    if(this.type() == 'down'){
      return 'danger'
    }else {
      return ''
    }
  })


}
