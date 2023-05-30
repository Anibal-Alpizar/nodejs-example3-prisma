const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports.get = async (request, response, next) => {
  // lista todas las ordenas ordenaas pr fehc ade menro incluyendo la informacion del usuario
  const orden = await prisma.orden.findMany({
    orderBy: {
      fecha: 'asc',
    },
    include: {
      usuario: true,
    },
  });
  response.json(orden);
};

module.exports.getById = async (request, response, next) => {
  const id = parseInt(request.params.id);
  const orden = await prisma.orden.findUnique({
    where: { id: id },
    include: {
      videojuegos: {
        select: {
          videojuego: true,
          cantidad: true,
        },
      },
      usuario: true,
    },
  });
  response.json(orden);
};
