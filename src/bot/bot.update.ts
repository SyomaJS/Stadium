import { Command, Ctx, On, Start, Update } from 'nestjs-telegraf';
import { BotService } from './bot.service';
import { Context } from './contex.interface';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.start(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    return this.botService.onContact(ctx);
  }

  @Command('stop')
  async onStop(@Ctx() ctx: Context) {
    return this.botService.onStop(ctx);
  }

  // @On('photo')
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ('photo' in ctx.message) {
  //     console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
  //     );
  //   }
  // }

  // @On('video')
  // async onVideo(@Ctx() ctx: Context) {
  //   if ('video' in ctx.message) {
  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On('sticker')
  // async onSticker(@Ctx() ctx: Context) {
  //   if ('sticker' in ctx.message) {
  //     await ctx.reply('🫡');
  //   }
  // }
  // @On('animation')
  // async onAnimation(@Ctx() ctx: Context) {
  //   if ('animation' in ctx.message) {
  //     await ctx.reply('Animation');
  //   }
  // }

  // @On('contact')
  // async onContact(@Ctx() ctx: Context) {
  //   if ('contact' in ctx.message) {
  //     await ctx.reply(String(ctx.message.contact.phone_number));
  //     await ctx.reply(String(ctx.message.contact.first_name));
  //     await ctx.reply(String(ctx.message.contact.last_name));
  //     await ctx.reply(String(ctx.message.contact.user_id));
  //   }
  // }

  // @On('location')
  // async onLocation(@Ctx() ctx: Context) {
  //   if ('location' in ctx.message) {
  //     await ctx.reply(String(ctx.message.location.latitude));
  //     await ctx.reply(String(ctx.message.location.longitude));
  //   }
  // }

  // @On('invoice')
  // async onInvoice(@Ctx() ctx: Context) {
  //   if ('invoice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.invoice.title));
  //   }
  // }

  // @On('voice')
  // async onVoice(@Ctx() ctx: Context) {
  //   if ('voice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.voice.duration));
  //   }
  // }

  // @On('venue')
  // async onVenue(@Ctx() ctx: Context) {
  //   if ('venue' in ctx.message) {
  //     await ctx.reply(String(ctx.message.venue.address));
  //   }
  // }

  // @Hears('hi')
  // async hears(@Ctx() ctx: Context) {
  //   await ctx.reply('Hi there!');
  // }

  // @Command('info')
  // async info(@Ctx() ctx: Context) {
  //   await ctx.reply('informational');
  // }
  // @Command('inline_keyboard')
  // async inlineButton(@Ctx() ctx: Context) {
  //   const inlineKeyboard = [
  //     [
  //       { text: 'Button 1', callback_data: 'button1' },
  //       { text: 'Button 2', callback_data: 'button2' },
  //       { text: 'Button 3', callback_data: 'button3' },
  //     ],
  //     [
  //       { text: 'Button 4', callback_data: 'button4' },
  //       { text: 'Button 5', callback_data: 'button5' },
  //     ],
  //   ];
  //   ctx.reply('Choose a inline button', {
  //     reply_markup: {
  //       inline_keyboard: inlineKeyboard,
  //     },
  //   });
  // }

  // @Action('button1')
  // async onActionButton1(@Ctx() ctx: Context) {
  //   ctx.reply('You pressend the button 1');
  // }
  // @Action('button2')
  // async onActionButton2(@Ctx() ctx: Context) {
  //   ctx.reply('You pressend the button 2');
  // }

  // //!--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

  // @Command('main_keyboard')
  // async mainButton(@Ctx() ctx: Context) {
  //   ctx.reply('Choose a main button', {
  //     parse_mode: 'HTML',
  //     ...Markup.keyboard([
  //       ['one', 'two', 'three'],
  //       ['four', 'five', 'six'],
  //       ['seven', 'eight', 'nine'],
  //       [Markup.button.contactRequest('📞 Send Phone number')],
  //       [Markup.button.locationRequest('၌ Send Location')],
  //     ])
  //       .oneTime()
  //       .resize(),
  //   });
  // }
}
