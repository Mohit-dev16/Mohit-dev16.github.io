import { Injectable } from '@angular/core';

// Declare gtag as a global function
declare let gtag: (...args: any[]) => void;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  /**
   * Send a custom event to Google Analytics (GA4).
   * @param eventName - The name of the event (e.g., 'resume_opened')
   * @param params - Optional key-value pairs for event parameters
   */
  trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
    }
  }

  // ── About Section ──

  trackResumeOpened() {
    this.trackEvent('resume_opened', {
      event_category: 'engagement',
      event_label: 'View My Resume'
    });
  }

  trackProfileImageOpened() {
    this.trackEvent('profile_image_opened', {
      event_category: 'engagement',
      event_label: 'Profile Image Lightbox'
    });
  }

  // ── Contact Section ──

  trackSocialLinkClicked(platform: string) {
    this.trackEvent('social_link_clicked', {
      event_category: 'outbound',
      event_label: platform
    });
  }

  trackContactCopied(field: string) {
    this.trackEvent('contact_copied', {
      event_category: 'engagement',
      event_label: field
    });
  }

  trackContactFormSubmitted() {
    this.trackEvent('contact_form_submitted', {
      event_category: 'conversion',
      event_label: 'Contact Form'
    });
  }

  // ── Hero Section ──

  trackHeroCtaClicked(button: string) {
    this.trackEvent('hero_cta_clicked', {
      event_category: 'engagement',
      event_label: button
    });
  }
}
