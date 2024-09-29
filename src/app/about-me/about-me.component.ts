import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  standalone: true,
  imports: [MatCardModule, MatTooltipModule, MatButtonModule]
})
export class AboutMeComponent {
  showAboutMeCard = true;

  //text for the about me card
  aboutMeText = `Thank you for taking the time to learn more about me. My name is Valencia, but I go by V or Wolf, and I use she/her and they/them pronouns. I hold a Bachelor's degree in Computer Science
   and have been working in tech for 9 years, primarily focusing on quality assurance, software development, and team leadership. Based in the NYC metro area, I bring a strong technical background in both
    manual and automated testing, and I thrive on solving complex problems, mentoring junior engineers, and collaborating across teams.

Outside of work, you'll find me gaming, writing creatively, or spending time with loved ones. I’m passionate about personal growth, animals, and engaging in conversations where people share their passions.
While I prefer to work independently day-to-day, I value opportunities for collaboration and am always eager to learn from others or offer my support when needed.`;

//text for the my philosophy card
  myPhilosophyText = `In my QA philosophy, I focus on building quality into the foundation of every project, ensuring it is a priority from the very start. Rather than simply identifying defects,
 I aim to prevent them through early collaboration, well-architected test cases, and a robust automation framework that stands the test of time. By blending manual and automated testing with performance testing,
  I create comprehensive, scalable strategies. Clear documentation and adaptability are key, but I also believe that fostering a culture of open communication and cross-team collaboration is essential to maintaining
   quality at every stage of development. Ultimately, quality isn’t just about the absence of defects—it’s about delivering a well-engineered, user-centric solution that is built to last.`;


  toggleCards() {
    this.showAboutMeCard = !this.showAboutMeCard;
  }
}
