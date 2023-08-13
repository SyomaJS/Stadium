import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../users/models/user.model';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: User): Promise<void>;
}
