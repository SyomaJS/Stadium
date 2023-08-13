import { Bot } from './models/bot.model';
import { Telegraf } from 'telegraf';
import { Context } from './contex.interface';
export declare class BotService {
    private botRepo;
    private readonly bot;
    constructor(botRepo: typeof Bot, bot: Telegraf<Context>);
    start(ctx: Context): Promise<void>;
    onContact(ctx: Context): Promise<void>;
    onStop(ctx: Context): Promise<void>;
    sendOTP(phoneNumber: string, OTP: string): Promise<boolean>;
}
