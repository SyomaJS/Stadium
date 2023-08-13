import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../users/models/user.model';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User): Promise<void> {
    const url = `${process.env.API_HOST}/api/users/activate/${user.activation_link}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Stadium app! Confirm your Email',
      template: './confirmation',
      context: {
        name: user.first_name,
        url,
      },
    });
  }
}
