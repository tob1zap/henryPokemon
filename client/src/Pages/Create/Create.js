import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import validate from "./validate";
import {
  Button,
  Container,
  Container2,
  Div,
  FormStyle,
  IMG,
  Input,
  Label,
  Select,
} from "./StyledCreate";
import img from "../../Assets/CardDesign/cardImg-06.png";
import { useHistory } from "react-router-dom";

export default function Create() {
  const history = useHistory();
  const types = useSelector((state) => state.creatorTypes);
  const [create, setCreate] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    weight: "",
    height: "",
    type: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (property === "type") {
      setCreate({ ...create, [property]: [value] });
    } else {
      setCreate({ ...create, [property]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validation = validate(create);
    if (validation !== "valido") {
      alert(validation);
    } else {
      // Send a POST request to the server to save the Pokemon
      axios
        .post("http://localhost:3001/pokemons", create)
        .then((response) => {
          setCreate({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            weight: "",
            height: "",
            type: "",
          });
          alert("your pokemon was successfully saved");
          history.push("/home");
        })
        .catch((error) => {
          alert("your pokemon wasn't created");
        });
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <Div>
        <Container>
          <div>
            <Label>Name </Label>
            <Input
              type="text"
              value={create.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div>
            <Label>HP </Label>
            <Input
              type="text"
              value={create.hp}
              onChange={changeHandler}
              name="hp"
            />
          </div>
          <div>
            <Label>Attack </Label>
            <Input
              type="text"
              value={create.attack}
              onChange={changeHandler}
              name="attack"
            />
          </div>
          <div>
            <Label>Defense </Label>
            <Input
              type="text"
              value={create.defense}
              onChange={changeHandler}
              name="defense"
            />
          </div>
          <div>
            <Label>Weight </Label>
            <Input
              type="text"
              value={create.weight}
              onChange={changeHandler}
              name="weight"
            />
          </div>
          <div>
            <Label>Height </Label>
            <Input
              type="text"
              value={create.height}
              onChange={changeHandler}
              name="height"
            />
          </div>
          <div>
            <Select onChange={changeHandler} name="type">
              <option hidden>Select type</option>
              {types &&
                types.length > 0 &&
                types.map((t, index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
            </Select>
          </div>
          ;<Button type="submit">Submit</Button>
        </Container>
        <Container2>
          <IMG src={img} />
        </Container2>
      </Div>
    </FormStyle>
  );
}
