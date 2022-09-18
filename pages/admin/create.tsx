import dynamic from "next/dynamic";
import * as React from "react";
import { Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BlogService } from "./../../api/service";
import { PostDTO } from "./../../Components/Item/post.dto";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});
export interface ICreatePostProps {
  title: string;
  content: any;
}
export default function CreatePost(props: ICreatePostProps) {
  const [content, setContent] = React.useState<any>("");
  const [post, setPost] = React.useState<PostDTO>({});
  const applyChange = (prop: string, value: any) => {
    const _post: any = { ...post };
    _post[prop] = value;
    setPost(_post);
  };
  const submit = () => {
    BlogService.createPost({
      ...post,
      content,
      author: "Xuan Tien",
      tag: ["FrontEnd"],
    }).then((res) => {
      return (
        <Toast className="d-inline-block m-1" bg={"Success".toLowerCase()}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      );
    });
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            required
            value={post.title}
            type="text"
            onChange={(e) => applyChange("title", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nội dung</Form.Label>
          <div data-color-mode="dark">
            <ReactQuill theme="snow" value={content} onChange={setContent} />{" "}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Đánh dấu"
            onChange={(e) => applyChange("highlight", e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" onClick={submit}>
          Tạo mới
        </Button>
      </Form>
    </div>
  );
}
