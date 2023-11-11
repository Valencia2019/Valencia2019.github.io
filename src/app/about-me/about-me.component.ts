import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  standalone: true,
  imports: [MatCardModule, MatGridListModule]
})
export class AboutMeComponent {

}
