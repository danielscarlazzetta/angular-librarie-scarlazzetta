import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-scarlazzetta-button',
  template: `
    <button><ng-content #name></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class NgxScarlazzettaButtonComponent {

}
