import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
const cors = require("cors");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableCors({
    origin: ["http://localhost:8080"],
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://ieltszone.netlify.app/");
    next();
  });
  const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
