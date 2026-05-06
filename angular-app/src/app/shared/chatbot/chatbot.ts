import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  chatOpen = false;
  messages: ChatMessage[] = [
    { role: 'bot', text: 'Hello! I can help with courses, fees, schedules and payment options.' }
  ];

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage(text: string) {
    const message = text.trim();
    if (!message) {
      return;
    }

    this.messages.push({ role: 'user', text: message });
    const reply = this.getReply(message);
    setTimeout(() => {
      this.messages.push({ role: 'bot', text: reply });
    }, 350);
  }

  private getReply(message: string) {
    const lower = message.toLowerCase();
    if (lower.includes('course')) {
      return 'We offer Software Testing, Python, Java, Full Stack, Data Science and MySQL courses with placement support.';
    }
    if (lower.includes('payment') || lower.includes('fee') || lower.includes('price')) {
      return 'The payment options include card, UPI and net banking. Contact us for the best affordable plan.';
    }
    if (lower.includes('time') || lower.includes('batch') || lower.includes('schedule')) {
      return 'We run weekday, weekend and fast-track batches. Tell me your preferred timing and I can guide you.';
    }
    if (lower.includes('contact') || lower.includes('call') || lower.includes('email')) {
      return 'Reach us at +91 9594956055 or expertsscoder@gmail.com for a quick response.';
    }
    return 'That sounds great! Please tell me which course you are interested in, and I will help you with the details.';
  }
}
