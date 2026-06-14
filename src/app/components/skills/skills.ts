import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories = [
    {
      title: 'Programming Languages',
      icon: '⌨️',
      skills: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'Ruby']
    },
    {
      title: 'Frontend Development',
      icon: '🖥️',
      skills: ['Angular', 'AngularJS', 'HTML5', 'CSS3', 'jQuery']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Ruby on Rails', 'NestJS', 'Laravel', 'CakePHP']
    },
    {
      title: 'AI Technologies',
      icon: '🧠',
      skills: ['LangGraph.js', 'LangChain.js', 'Vertex AI', 'Prompt Engineering', 'Claude Code (Anthropic)']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Elastic Search', 'Kibana', 'Octopus']
    },
    {
      title: 'Tools & Workflows',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Trello', 'Qlty', 'n8n']
    }
  ];
}
