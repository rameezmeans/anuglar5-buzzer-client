import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuzzerService } from './buzzer-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(
    private buzzerService: BuzzerService,
  ) { }
  
  fireBuzzer() {
    this.buzzerService.sendMessage("send a thing");
  }

}
