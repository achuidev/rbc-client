import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloWorldService } from 'src/app/services/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  private greetSubscription: Subscription = new Subscription();
  constructor(private helloWorldService: HelloWorldService) {}
  message: String = '';

  ngOnInit(): void {
    this.greetSubscription = this.helloWorldService.greetUser().subscribe({
      next: (data: any) => (this.message = data?.message),
      error: (error) => console.log(error),
    });
  }

  ngOnDestroy(): void {
    this.greetSubscription.unsubscribe();
  }
}
