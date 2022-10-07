import styled from "styled-components";

interface IPerson {
  age: string;
  name: string;
}

export const Style = styled.button`
  color: white;
`;

export const LargeStyle = styled(Style)<{ isPerson: IPerson }>`
  background-color: ${(props) =>
    props.isPerson.age === "23" ? "black" : "white"};
  font-size: 50px;
`;
