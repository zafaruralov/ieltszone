import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import CreateOrderData from "./dto/create-order-data";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() data: CreateOrderData) {
    try {
      const crud = await this.orderService.createOrder(data);
      return crud;
    } catch (error) {
      return error.message;
    }
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get("/:id")
  findOne(@Param("id") id: string) {
    return this.orderService.findOne(id);
  }
}
