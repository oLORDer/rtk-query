import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import {
  useLazyGetPostsQuery,
  useDeletePostMutation,
} from "../../redux/postsApi";

import Button from "react-bootstrap/Button";

function List() {
  const [page, setPage] = useState(1);
  const [postId, setPostId] = useState(null);
  const [deletePost, {isLoading}] = useDeletePostMutation();
  // const {data} = useGetPostsQuery(1);
  const [getPosts, { data }] = useLazyGetPostsQuery();

  useEffect(() => {
    getPosts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if(postId)
    deletePost(postId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId])

  const handleDelete = ({ target }) => {
    setPostId(target.id)
  };

  return (
    <ListGroup>
      {data?.map(({ title, body, id }) => (
        <ListGroup.Item key={id}>
          <p>Title: {title}</p>
          <p>Description: {body}</p>
          <Button
            variant="primary"
            type="button"
            id={id}
            onClick={handleDelete}
          >
            {isLoading && postId === id ? 'Deleting...' : 'Delete'}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default List;
