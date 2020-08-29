"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Article mongo schema.
 */
const articleSchema = new mongoose_1.default.Schema({
    title: String,
    id: Number,
    image: String,
    description: String,
    publishDate: Date,
}, { timestamps: true });
exports.Article = mongoose_1.default.model("Article", articleSchema);
//# sourceMappingURL=Article.js.map