import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educationList = [
    {
      degree: 'B.Tech CSE',
      institution: 'Global Group of Institutes, Amritsar',
      period: 'Jul 2019 — Jul 2023',
      score: 'CGPA: 8.76'
    },
    {
      degree: 'Higher Secondary (12th Grade)',
      institution: 'SGDM College, Patna',
      period: 'Mar 2017 — Mar 2019',
      score: 'Percentage: 85.8%'
    }
  ];

  certifications = [
    { title: 'HackerRank Certificate Java Basic', org: 'HackerRank', url: 'https://www.hackerrank.com/certificates/3d0b93bc4d07' },
    { title: 'Internshala Certificate Of Training (Core Java)', org: 'Internshala', url: 'https://trainings.internshala.com/view_certificate/8CE9C836-0F14-371D-1C1B-799980AE3D89/7A1C2C61-2094-FADB-96FA-D58D05CBEE07' },
    { title: 'Python By GUVI Geek Networks', org: 'GUVI', url: 'https://www.guvi.in/verify-certificate?id=5B484T7I65641m4D9X' },
    { title: 'Gold Badge (5 Star) in JAVA', org: 'HackerRank', highlight: true, url: 'https://www.hackerrank.com/mohitkr13?hr_r=1&badge=java&stars=5&level=3&social=linkedin' },
    { title: 'Specialist level on Code Studio', org: 'Code Studio', url: 'https://www.codingninjas.com/codestudio/profile/7a2144e2-1a19-42e3-8241-5ef2cdc80aa7' }
  ];
}
