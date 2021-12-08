import { userType } from '../../core/types/me';
import { postsType } from '../../core/types/posts';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getPosts();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getPosts() {
    const users: userType = {
      id: 87,
      name: 'Gregório',
      url_profile: '124'
    };

    return res.status(200).json(users);
  }
}
