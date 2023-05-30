const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
module.exports.get = async (request, response, next) => {
  // listar videojuegos
  const videojuego = await prisma.videojuego.findMany({
    orderBy: {
      nombre: 'asc',
    },
  });
  response.json(videojuego);
};
//Obtener por Id
module.exports.getById = async (request, response, next) => {
  const id = parseInt(request.params.id);
  const videojuego = await prisma.videojuego.findUnique({
    where: { id: id },
  });
  response.json(videojuego)
};
//Crear un videojuego
module.exports.create = async (request, response, next) => {};
//Actualizar un videojuego
module.exports.update = async (request, response, next) => {};
