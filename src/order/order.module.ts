import OrderSchema, { Order } from "./schema/order.schema";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { TgFileDonwloader } from "./consumer/tg-file-donwloader-consumer";
import { PrintConsumer } from "./consumer/print-consumer";
import { BullModule } from "@nestjs/bull";

@Module({
  controllers: [OrderController],
  providers: [OrderService, TgFileDonwloader, PrintConsumer],
  exports: [OrderService],
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    BullModule.registerQueue({
      name: "download_telegram_file",
    }),
    BullModule.registerQueue({
      name: "print",
    }),
  ],
})
export class OrderModule {}
