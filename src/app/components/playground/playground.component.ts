import { Component } from '@angular/core';
import { BottleComponent } from "../bootle/bottle.component";
import { mockBottles } from "../../models/bottle.model";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    BottleComponent
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  bottles = mockBottles(8, 4, 2);
  selectedId: string | null = null;

  bottleClick(bottleId: string): void {
    const clickedBottle = this.bottles.find(b => b.id === bottleId)!;

    if (this.selectedId) {
      const selectedBottle = this.bottles.find(b => b.id === this.selectedId)!;

      if (clickedBottle.layers.length >= 4) {
        this.selectedId = null;
        return;
      }

      if (clickedBottle.layers.length !== 0 && clickedBottle.layers[0].colorCode !== selectedBottle.layers[0].colorCode) {
        return;
      }

      const layer = selectedBottle.layers.shift()!;
      clickedBottle.layers.unshift(layer);

      this.selectedId = null;
    } else {
      if (!clickedBottle.layers.length)
        return;

      this.selectedId = bottleId;
    }
  }
}
