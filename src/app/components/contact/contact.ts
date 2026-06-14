import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  email = 'mail.mohitkr13@gmail.com';
  phone = '+91-8789123199';
  linkedin = 'https://www.linkedin.com/in/mohitkr13/';
  github = 'https://github.com/Mohit-dev16/';

  copiedField = '';

  copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField = field;
      setTimeout(() => {
        if (this.copiedField === field) {
          this.copiedField = '';
        }
      }, 2000);
    });
  }
}
