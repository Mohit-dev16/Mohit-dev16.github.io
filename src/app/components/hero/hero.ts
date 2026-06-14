import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {
  typedText = signal('');
  private titles = [
    'Full Stack Developer',
    'AI Solutions Architect',
    'Angular Specialist',
    'Problem Solver'
  ];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;

  ngOnInit() {
    this.type();
    this.createParticles();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
  }

  private type() {
    const current = this.titles[this.currentIndex];
    if (this.isDeleting) {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      speed = 500;
    }

    this.typingTimer = setTimeout(() => this.type(), speed);
  }

  private createParticles() {
    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; opacity: number}> = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.4 // Increased base opacity from 0.1 to 0.4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Add some friction so the burst speed slows down
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Ensure minimum speed to keep them moving
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < 0.2) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - dist / 120)})`; // Increased line opacity multiplier from 0.06 to 0.2
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Burst effect: push particles away rapidly
      particles.forEach(p => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 250) {
          const force = (250 - dist) / 250;
          p.vx += (dx / dist) * force * 15;
          p.vy += (dy / dist) * force * 15;
        }
      });
      
      // Spawn new particles at click position
      for (let i = 0; i < 12; i++) {
        particles.push({
          x: clickX,
          y: clickY,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.5) * 12,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      
      // Limit total particles to prevent performance issues
      if (particles.length > 200) {
        particles.splice(0, particles.length - 200);
      }
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
