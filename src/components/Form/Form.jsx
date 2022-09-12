import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useAddPostMutation } from "../../redux/postsApi";

function FormPost() {
  const [addPost] = useAddPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.elements['title'].value;
    const body = e.target.elements['Description'].value;

    const newPost = {
      title,
      body,
      userId: 1,
    };
    addPost(newPost);
    // console.log(result);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="type" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
}

export default FormPost;
