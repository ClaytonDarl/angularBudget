import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-ui-my-button',
  standalone: true,
  templateUrl: './baseButton.component.html',
  styleUrls: ['./baseButton.component.css'],
})
export class MyButtonComponent {
  @Input() text = 'baseButton works!';
  @Input() padding = 10;
  @Input() disabled = true;
}