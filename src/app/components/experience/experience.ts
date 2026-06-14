import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Clerisy Solutions Pvt Ltd',
      location: 'Mohali, Punjab',
      period: 'Oct 2022 — Present',
      type: 'full-time',
      achievements: [
        'Spearheading the Hospital Inventory Management System (Angular & Ruby on Rails) by building an AI agent pipeline for quotes/contracts and a multi-agent chat system, while leading full-stack system redesigns.',
        'Engineered Kiosk check-in/checkout and Grab & Go features for a Hotel PMS using Angular and Ruby on Rails. Implemented secure HMAC-SHA256 Webhook authentication for trusted third-party API integrations.',
        'Managed an Internet Booking Engine (IBE), integrating Google Recaptcha v2/v3 for fraud prevention, optimizing cron jobs, and setting up OpenTelemetry monitoring.',
        'Developed custom E-Commerce solutions in Laravel, utilizing AJAX/jQuery and integrating various payment gateways (Apple Pay, Google Pay, PayPal, AfterPay) alongside social authenticators.',
        'Optimized backend performance for an Enterprise CRM by refining complex database queries and managing background processing jobs for lead and inventory management.'
      ]
    },
    {
      role: 'Software Development Trainee',
      company: 'Clerisy Solutions Pvt Ltd',
      location: 'Mohali, Punjab',
      period: 'Jul 2022 — Sep 2022',
      type: 'trainee',
      achievements: [
        'Gained hands-on experience in full-stack development with Angular, PHP, Laravel, and MySQL.',
        'Worked on Angular 10, AngularJS, CakePHP, and Laravel projects, contributing code to live production systems.',
        'Acquired practical knowledge of Agile methodologies and production workflows.'
      ]
    }
  ];
}
