import { Component, Input } from '@angular/core';
import { ComponentList } from '../../listComponent';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({ required: true }) list!: ComponentList

}
