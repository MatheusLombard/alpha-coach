import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './Card.html',
  styleUrl: './Card.css',
})
export class Card {
  cardValue = input<string>()
  cardLabel = input.required<String>()
  type = input<'up' | 'down'>()
  trend = input<string>(); // ex: '+3', '+12%', '-1'
  icon = input<'graph-up-arrow' | 'graph-down-arrow'>('graph-up-arrow')
    trendColorClass = computed(() => this.type() === 'up' ? 'trend-up' : 'trend-down');
}
