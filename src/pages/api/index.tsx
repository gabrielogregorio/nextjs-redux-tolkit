export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getPosts();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getPosts() {
    const posts = {
      posts: {
        byId: {
          1: {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            likes: []
          },
          2: {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
            likes: []
          },
          3: {
            userId: 1,
            id: 3,
            title:
              'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
            likes: []
          }
        },
        allIds: [1, 2, 3]
      }
    };

    return res.status(200).json(posts);
  }
}
