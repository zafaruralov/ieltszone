import { ClientModule } from "./../client/client.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TelegrafModule } from "nestjs-telegraf";
import { OrderModule } from "src/order/order.module";
import { BullModule } from "@nestjs/bull";
import TelegramModule from "src/telegram/telegram.module";
import { FalshCardModule } from "src/pages/Flashcard/flashcard.module";
import { MatchModule } from "src/pages/Match/match.module";
import { HistoryModule } from "src/pages/History/history.module";
import { PrintConsumer } from "src/order/consumer/print-consumer";
import { TgFileDonwloader } from "src/order/consumer/tg-file-donwloader-consumer";
require("dotenv").config();

// const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}`;
// const webhookURL = `${process.env.SERVER_URL}`;

@Module({
  imports: [
    ClientModule,
    OrderModule,
    FalshCardModule,
    MatchModule,
    HistoryModule,
    TelegrafModule.forRoot({
      token: `${process.env.TELEGRAM_TOKEN}`,
      // launchOptions: {
      //   webhook: {
      //     domain: `${TELEGRAM_API}/setWebhook?url=${webhookURL}`,
      //   },
      // },
      // botName: "Print Services",
      // useFactory: () => ({
      //   token: process.env.TELEGRAM_TOKEN,
      //   middlewares: [],
      //   include: [TelegramModule],
      // }),
    }),
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 16379,
      },
    }),
    TelegramModule,
    MongooseModule.forRoot(
      "mongodb+srv://zafaruralov:1A1s1D1f0@cluster0.rwu0b.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "ieltsZona",
      }
    ),
  ],
})
export class AppModule {}
