"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlashCardDto = void 0;
const create_flashcard_dto_1 = require("./create-flashcard.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateFlashCardDto extends (0, mapped_types_1.PartialType)(create_flashcard_dto_1.CreateFlashCardDto) {
}
exports.UpdateFlashCardDto = UpdateFlashCardDto;
//# sourceMappingURL=update-flashcard.dto.js.map