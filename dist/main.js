"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map