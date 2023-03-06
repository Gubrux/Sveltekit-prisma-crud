import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	// exportamos las acciones
	createArticle: async ({ request }) => {
		// creamos la acción createArticle
		// obtenemos los datos del formulario
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};
		try {
			await prisma.article.create({
				// creamos el artículo
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Error al crear el artículo' });
		}
		return {
			status: 201
		};
	}
};
