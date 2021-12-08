import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../core/hooks/useRedux';
import { addLike, getPosts, postSelector } from '../core/features/posts';
import LayoutTheme from '../components/layouts/layoutTheme';
import styles from '../../styles/pages/posts.module.css';
import { postsType } from '../core/types/posts';
import { getMe, meSelector } from '../core/features/me';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(postSelector);
  const {
    data: { id: idUser }
  } = useAppSelector(meSelector);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  function renderPosts() {
    return (
      <div className={styles.posts}>
        {Object.keys(data.posts.byId).map((key) => {
          let post = data.posts.byId[Number(key)];

          return (
            <div key={post.id} className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button
                className={`${
                  post.likes.includes(idUser) ? styles.active : ''
                }`}
                onClick={() => dispatch(addLike({ idPost: post.id, idUser }))}
              >
                Like {post.likes.length}
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <LayoutTheme>
      {data.posts.allIds.length > 0 ? renderPosts() : null}
      {loading && <p>Loading...</p>}
      {error && <p>Ops, algo deu errado</p>}

      <div className={styles.morePosts}>
        <button onClick={() => dispatch(getPosts())} disabled={loading}>
          Buscar dados
        </button>
      </div>
    </LayoutTheme>
  );
};

export default Posts;
