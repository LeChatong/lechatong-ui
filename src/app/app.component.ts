import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lechatongui'

  inputTextMessage = ''
  inputTextShowMessage = false
  inputTextDisable = false
  inputTextType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  data = {
    text: ''
  }

  onSubmit(){
    if(this.data.text){
      this.inputTextShowMessage = true
      this.inputTextMessage = 'Thanks you for your Text'
      this.inputTextType = 'success'
    }else{
      this.inputTextShowMessage = true
      this.inputTextMessage = 'Write a Text please'
      this.inputTextType = 'error'
    }
  }


  onChange($event: any) {
    this.data.text = $event.target['value']
    console.log($event.target['value'])
  }
}
