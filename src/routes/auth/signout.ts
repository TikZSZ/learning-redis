import type { RequestHandler } from '@sveltejs/kit';

export const Post: RequestHandler = async ({ request, locals }) => {
	locals.session = null;

	return {
		status: 200
	};
};
