import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { isUrlOrRelativePath } from '@/utils/is-url-or-relative-path';
import sanitizeHtml from 'sanitize-html';
import { z } from 'zod';

const PostBaseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Título deve ter, no mínimo, 3 caracteres')
    .max(120, 'Título deve ter um máximo de 120 caracteres'),
  content: z
    .string()
    .trim()
    .min(3, 'Conteúdo é obrigatório')
    .transform(val => sanitizeHtml(val)),
  author: z
    .string()
    .trim()
    .min(4, 'Autor precisa de um mínimo de 4 caracteres')
    .max(100, 'Nome do autor não deve ter mais que 100 caracteres'),
  excerpt: z
    .string()
    .trim()
    .min(3, 'Excerto precisa de um mínimo de 3 caracteres')
    .max(200, 'Excerto não deve ter mais que 200 caracteres'),
  coverImageUrl: z.string().trim().refine(isUrlOrRelativePath, {
    message: 'URL da capa deve ser uma URL ou caminho para imagem',
  }),
  published: z
    .union([
      z.literal('on'),
      z.literal('true'),
      z.literal('false'),
      z.literal(true),
      z.literal(false),
      z.literal(null),
      z.literal(undefined),
    ])
    .default(false)
    .transform(val => val === 'on' || val === 'true' || val === true),
});

// PostCreateSchema: igual ao base por enquanto
export const PostCreateSchema = PostBaseSchema;

// PostUpdateSchema: pode incluir campos extras no futuro (ex: id)
export const PostUpdateSchema = PostBaseSchema.extend({
  // id: z.string().uuid('ID inválido'),
});

const obj = {
  $ACTION_REF_1: '',
  '$ACTION_1:0':
    '{"id":"6067f416d4d91fc8377a31b65f9817851789018dca","bound":"$@1"}',
  '$ACTION_1:1':
    '[{"formState":{"id":"","slug":"","title":"","excerpt":"","author":"","content":"","coverImageUrl":"","createdAt":"","published":false},"errors":[]}]',
  $ACTION_KEY: 'k504142243',
  id: '',
  slug: '',
  author: 'Dudu',
  title: 'Titulo qualquer',
  excerpt: 'excerto qualquer',
  content: 'fasdfasdfasdf',
  file: {
    size: 0,
    type: 'application/octet-stream',
    name: 'undefined',
    lastModified: 1751917179127,
  },
  coverImageUrl: '',
  published: 'on',
};

const zodParsedObj = PostCreateSchema.safeParse(obj);

if (!zodParsedObj.success) {
  const errors = getZodErrorMessages(zodParsedObj.error.format());
  console.log(errors);
}
