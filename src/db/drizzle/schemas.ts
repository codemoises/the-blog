import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const postTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull(),
  createdAt: text('created_at').notNull(),
  updateAt: text('update_at').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postTable>;
export type PostsTableInsertMode = InferInsertModel<typeof postTable>;
