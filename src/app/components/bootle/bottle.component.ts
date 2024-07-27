import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBottle } from "../../models/bottle.model";
import { NgStyle } from "@angular/common";
import { ColorsDictionary } from "../../models/colors.enum";

@Component({
  selector: 'app-bottle',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './bottle.component.html',
  styleUrl: './bottle.component.scss'
})
export class BottleComponent {
  @Input() selectedId: string | null = null;
  @Input() bottle!: IBottle;

  @Output() bottleClick = new EventEmitter<string>();

  onBottleClick(bottleId: string): void {
    this.bottleClick.emit(bottleId);
  }
}
