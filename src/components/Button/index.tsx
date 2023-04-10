import { Container } from "./styles";

type IButton = {
  image: any;
  value: string;
  type: "button" | "submit" | "reset";
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: IButton) => {
  return (
    <Container onClick={props.handleClick} type={props.type}>
      <img src={props.image} alt='' />
      {props.value}
    </Container>
  );
};
