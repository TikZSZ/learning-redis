import type { RequestHandler } from '@sveltejs/kit';
import { searchItems } from '$services/queries/items';

interface Params {
	id: string;
}

export const Get: RequestHandler<Params, any> = async ({ url }) => {
	const term = url.searchParams.get('term');

	const items = await searchItems(term, 5);

	return {
		body: { results: items }
	};
};
