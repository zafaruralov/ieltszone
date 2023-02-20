"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
class ObjectIdPipe {
    transform(value) {
        try {
            return new mongoose_1.Types.ObjectId(value);
        }
        catch (_a) {
            throw new common_1.BadRequestException("Validation failed");
        }
    }
}
exports.default = ObjectIdPipe;
//# sourceMappingURL=objectid-pipe.js.map