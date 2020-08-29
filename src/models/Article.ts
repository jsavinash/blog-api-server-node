import mongoose from "mongoose";
import { IArticle } from "../modules/v1/article/Interface";

export type ArticleDocument = mongoose.Document & IArticle;

/**
 * Article mongo schema.
 */
const articleSchema = new mongoose.Schema(
  {
    title: String,
    id: Number,
    image: String,
    description: String,
    publishDate: Date,
  },
  { timestamps: true }
);

export const Article = mongoose.model<ArticleDocument>(
  "Article",
  articleSchema
);
