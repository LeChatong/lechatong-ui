import { Component } from '@angular/core';
import ButtonComponent from '../stories/components/lechatong-button/button.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lechatongui'

  data = {
    text: ''
  }

  onSubmit(){
    alert(this.data.text)
  }

}
