import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">MK</span>
          <span class="logo-bracket">/&gt;</span>
        </div>
        <p class="footer-text">
          &copy; {{ currentYear }} Mohit Kumar.<br>
          <span class="footer-subtext">Built with Angular & Designed with AI Support</span>
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 32px 0;
      border-top: 1px solid var(--border-color);
      background: var(--bg-secondary);
      margin-top: 60px;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-logo {
      font-family: var(--font-code);
      font-weight: 600;
      font-size: 1.2rem;
    }
    .logo-bracket { color: var(--accent-cyan); }
    .logo-text { color: var(--text-primary); }
    .footer-text {
      color: var(--text-muted);
      font-size: 0.9rem;
      text-align: right;
    }
    .footer-subtext {
      font-size: 0.8rem;
      opacity: 0.8;
      display: inline-block;
      margin-top: 4px;
    }
    @media (max-width: 576px) {
      .footer-content {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `]
})
export class Footer {
  currentYear = new Date().getFullYear();
}
