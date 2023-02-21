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

@Module({
  imports: [
    ClientModule,
    OrderModule,
    FalshCardModule,
    MatchModule,
    HistoryModule,
    TelegrafModule.forRoot({
      token: "5371565200:AAGy3-A_nG_aWt54yhQogjqoodtrkCi76IE",
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
