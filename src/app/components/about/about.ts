import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  isResumeOpen = signal(false);
  isImageOpen = signal(false);
  resumeUrl: SafeResourceUrl;

  highlights = [
    { icon: '🤖', title: 'AI & Chatbots', desc: 'Multi-agent AI systems with LangGraph.js, LangChain.js & Vertex AI' },
    { icon: '🏗️', title: 'Full Stack', desc: 'End-to-end development with Angular, Rails, Laravel, NestJS' },
    { icon: '💳', title: 'Payment Systems', desc: 'Apple Pay, Google Pay, PayPal, AfterPay integrations' },
    { icon: '🔐', title: 'Security', desc: 'OAuth, secure APIs, Google Recaptcha V2 & V3, and authentication systems' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1YpzIbcOwSiB-lH72oQlKrovU6ry-j5MO/preview');
  }

  openResume() {
    this.isResumeOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeResume() {
    this.isResumeOpen.set(false);
    document.body.style.overflow = '';
  }

  openImage() {
    this.isImageOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.isImageOpen.set(false);
    if (!this.isResumeOpen()) {
      document.body.style.overflow = '';
    }
  }
}
