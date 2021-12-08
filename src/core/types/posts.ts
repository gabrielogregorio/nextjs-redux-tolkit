// userId: number;
// id: number;
// title: string;
// body: string;
// likes: number[]

export type postsType = {
  posts: {
    byId: any;
    allIds: number[];
  };
};

export type postStateType = {
  data: postsType;
  loading: boolean;
  error: boolean;
};

export type addLikeType = {
  idPost: number;
  idUser: number;
};
