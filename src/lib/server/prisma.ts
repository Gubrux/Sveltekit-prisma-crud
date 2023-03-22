// importamos el cliente de prisma
import { PrismaClient } from '@prisma/client';

// si existe la variable global.prisma, la usamos, sino creamos una nueva instancia de PrismaClient
const prisma = global.prisma || new PrismaClient();
// si estamos en modo desarrollo, guardamos la instancia en la variable global.prisma
if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}
// exportamos la instancia de prisma
export { prisma };
