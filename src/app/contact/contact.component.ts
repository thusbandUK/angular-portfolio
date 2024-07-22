import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="text-start mx-auto mb-5">
      <div class="main-title-inner">
        <h2>Get in touch</h2>
        <p class="fs-5">
          I am currently seeking full-time employment as a software developer, so if you are looking to recruit, please get in touch. 
        </p>
      <div class="list-group d-flex flex-row">
        <a class="list-group-item list-group-item-action pe-2" aria-label="email link" title="link to email T Husband" href="mailto:thusbandUK@gmail.com"><p id="email-link" class="fs-2 my-auto">thusbandUK&#64;gmail.com</p></a>
        <a class="list-group-item list-group-item-action my-auto  pe-2" aria-label="email link" title="link to email T Husband" href="mailto:thusbandUK@gmail.com">
          <i class="bi bi-envelope"></i>
        </a>        
        <button class="list-group-item list-group-item-action my-auto pe-2" aria-label="copy email address" title="link to copy T Husband email to clipboard" (click)="copyToClipboard('thusbandUK@gmail.com')">
          <i class="bi bi-clipboard"></i>
        </button>
      </div>
    </div>
  </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  copyToClipboard(s: string){
    // Copy the text inside the text field
    navigator.clipboard.writeText(s);

  }

}

/*

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
        */