import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/action";
import { Navigate } from "react-router-dom";
const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addContact({ name, email, phone }));
    setCancel(!cancel);
  };
  return (
    <>
      {cancel ? (
        <Navigate to="/list" />
      ) : (
        <div style={{ margin: "100px" }}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="examplePassword"
                placeholder="name placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">phone</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                id="examplePassword"
                placeholder="phone placeholder"
              />
            </FormGroup>
            <Button onClick={add}>Add contact</Button>
            <Button onClick={() => setCancel(!cancel)}>cancel</Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddForm;