"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bot_model_1 = require("./models/bot.model");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../app.constants");
const telegraf_1 = require("telegraf");
let BotService = exports.BotService = class BotService {
    constructor(botRepo, bot) {
        this.botRepo = botRepo;
        this.bot = bot;
    }
    async start(ctx) {
        const userId = ctx.from.id;
        const user = await this.botRepo.findOne({
            where: { user_id: userId },
        });
        if (!user) {
            await this.botRepo.create({
                user_id: userId,
                first_name: ctx.from.first_name,
                last_name: ctx.from.last_name,
                username: ctx.from.username,
            });
            await ctx.reply(`Please, tap the button <b> "Send phone number" </b>⬇️`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.keyboard([
                    [telegraf_1.Markup.button.contactRequest('Send phone number 📞')],
                ])
                    .oneTime()
                    .resize(),
            });
        }
        else if (!user.status) {
            await ctx.reply(`Please, tap the button <b> "Send phone number" </b>📞`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.keyboard([
                    [telegraf_1.Markup.button.contactRequest('Send Phone Number 📞')],
                ])
                    .oneTime()
                    .resize(),
            });
        }
        else {
            await this.bot.telegram.sendChatAction(userId, 'typing');
            await ctx.reply('With this bot, one can connect to Staduum ☎️', {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.removeKeyboard(),
            });
        }
    }
    async onContact(ctx) {
        if ('contact' in ctx.message) {
            const userId = ctx.from.id;
            const user = await this.botRepo.findOne({
                where: { user_id: userId },
            });
            if (!user) {
                ctx.reply(`Please tap <b> "Start" </b> button !⬇️`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.keyboard([['/start']])
                        .oneTime()
                        .resize(),
                });
            }
            else if (ctx.message.contact.user_id != userId) {
                await ctx.reply(`Please send you own phone number! ☎️`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.keyboard([
                        [telegraf_1.Markup.button.contactRequest('Send Phone Number 📞')],
                    ])
                        .oneTime()
                        .resize(),
                });
            }
            else {
                let phone;
                ctx.message.contact.phone_number[0] == '+'
                    ? (phone = ctx.message.contact.phone_number)
                    : (phone = '+' + ctx.message.contact.phone_number);
                await this.botRepo.update({
                    phone_number: phone,
                    status: true,
                }, { where: { user_id: userId } });
                await ctx.reply(`Congratulations you registered !🤩`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.removeKeyboard(),
                });
            }
        }
    }
    async onStop(ctx) {
        const userId = ctx.from.id;
        const user = await this.botRepo.findOne({
            where: { user_id: userId },
        });
        if (user.status) {
            await this.botRepo.update({
                status: false,
                phone_number: null,
            }, {
                where: { user_id: userId },
            });
        }
        await ctx.reply(`You loogged out from BOT 🙁`, {
            parse_mode: 'HTML',
            ...telegraf_1.Markup.keyboard([['/start']])
                .oneTime()
                .resize(),
        });
    }
    async sendOTP(phoneNumber, OTP) {
        const user = await this.botRepo.findOne({
            where: { phone_number: phoneNumber },
        });
        if (!user || !user.status) {
            return false;
        }
        await this.bot.telegram.sendChatAction(user.user_id, 'typing');
        await this.bot.telegram.sendMessage(user.user_id, 'Verify code: ' + OTP);
        return true;
    }
};
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(bot_model_1.Bot)),
    __param(1, (0, nestjs_telegraf_1.InjectBot)(app_constants_1.BOT_NAME)),
    __metadata("design:paramtypes", [Object, telegraf_1.Telegraf])
], BotService);
//# sourceMappingURL=bot.service.js.map