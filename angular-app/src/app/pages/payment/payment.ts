import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  onPayment(event: Event) {
    event.preventDefault();
    window.alert('Payment flow submitted. Replace with real gateway integration.');
  }
}
