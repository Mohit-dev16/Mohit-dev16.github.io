import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Hospital Inventory Management System',
      description: 'Actively engaged in the day-to-day full-stack development, monitoring, and continuous enhancement of this system (Angular & Ruby on Rails). My major contributions include building an advanced AI agent pipeline for processing quotes, contracts, and images, alongside a multi-agent chat system.',
      tags: ['Angular', 'Ruby on Rails', 'AI/ML', 'Agent Pipeline']
    },
    {
      title: 'Hotel Property Management System',
      description: 'Currently managing day-to-day development and system enhancements for this PMS. My major architectural contributions include developing a Kiosk check-in/checkout & Grab & Go system (Angular/Ruby on Rails) and engineering secure HMAC-SHA256 Webhook Signature Authentication.',
      tags: ['Angular', 'Ruby on Rails', 'HMAC Security', 'Webhooks']
    },
    {
      title: 'Internet Booking Engine (IBE)',
      description: 'Involved in the continuous development, monitoring, and optimization of this booking platform. My key contributions include implementing Google Recaptcha v2/v3 for robust fraud prevention, optimizing backend cron jobs, and integrating OpenTelemetry.',
      tags: ['Fraud Prevention', 'OpenTelemetry', 'Cron Jobs', 'Backend']
    },
    {
      title: 'E-Commerce Laravel Platform',
      description: 'Built custom e-commerce features utilizing raw HTML, AJAX, and jQuery. Spearheaded R&D for integrations, implementing social logins and major payment gateways including Apple Pay, Google Pay, PayPal, and AfterPay.',
      tags: ['Laravel', 'Payment Gateways', 'jQuery', 'AJAX']
    },
    {
      title: 'Enterprise CRM Application',
      description: 'Developed core modules for lead management and inventory listings. Focused heavily on backend performance by optimizing complex database queries and architecting efficient background processing jobs.',
      tags: ['CRM', 'Query Optimization', 'Background Jobs', 'Backend']
    }
  ];
}
