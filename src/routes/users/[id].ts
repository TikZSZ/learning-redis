import type { RequestHandler } from '@sveltejs/kit';
import { getUserById } from '$services/queries/users';
import { commonLikedItems, likedItems } from '$services/queries/likes';

interface Params {
	id: string;
}

export const GET: RequestHandler<Params, any> = async ({ params, locals }) => {
	const { id } = params;

	const user = await getUserById(id);
	const sharedItems = await commonLikedItems(id, locals.session.userId);
	const liked = await likedItems(id);

	return {
		body: {
			username: user.username,
			sharedItems,
			likedItems: liked
		}
	};
};
