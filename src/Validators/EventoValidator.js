const { default: mongoose } = require('mongoose');
const { z } = require('zod');
const {
  validateRequest,
  validateRequestBody,
} = require('zod-express-middleware');

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: 'Nome é obrigatório' }),
    descricao: z.string({ required_error: 'Descrição é obrigatória' }),
    URLimagem: z.string({ required_error: 'Imagem é obrigatória' }),
    tipo: z.string({ required_error: 'Tipo é obrigatório' }),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    descricao: z.string().optional(),
    URLimagem: z.string().optional(),
    tipo: z.string().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, 'ID Inválido'),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, 'ID Inválido'),
  }),
});

module.exports = {
  create,
  update,
  destroy,
};
