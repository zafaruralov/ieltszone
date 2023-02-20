import { TelegramUpdate } from "./telegram.upate";
import { OrderModule } from "./../order/order.module";
import { ClientModule } from "./../client/client.module";
import { Module } from "@nestjs/common";

@Module({
  providers: [TelegramUpdate],
  imports: [ClientModule, OrderModule],
})
export default class TelegramModule {}
