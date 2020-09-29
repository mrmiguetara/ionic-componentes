import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../interfaces/component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: AppComponent[] = [
    {
      name: 'Action Sheet',
      icon: 'build-outline',
      redirectTo: '/action-sheet'
    },
    {
      name: 'Alert',
      icon: 'build-outline',
      redirectTo: '/alert'
    },
    {
      name: 'Avatar',
      icon: 'beaker-outline',
      redirectTo: '/avatar'
    },
    {
      name: 'Button',
      icon: 'beaker-outline',
      redirectTo: '/button'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
