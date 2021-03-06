import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <>
      <Container>
        { props.name}
      </Container>
    </>
  )
}