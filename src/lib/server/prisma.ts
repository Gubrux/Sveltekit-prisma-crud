import { PrismaClient } from '@prisma/client'; // importamos el cliente de prisma

const prisma = global.prisma || new PrismaClient(); // si existe la variable global.prisma, la usamos, sino creamos una nueva instancia de PrismaClient

if (process.env.NODE_ENV === 'development') {
	// si estamos en modo desarrollo, guardamos la instancia en la variable global.prisma
	global.prisma = prisma;
}
// exportamos la instancia de prisma
export { prisma };
