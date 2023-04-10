import { Container, List } from "./styles";
import Cart from "../../assets/Cart.svg";
import Flower from "../../assets/Flower.svg";
import Food from "../../assets/Food.svg";
import Heart from "../../assets/Heart.svg";
import Home from "../../assets/Home.svg";
import Pet from "../../assets/Pet.svg";

export const Sidebar = () => {
  return (
    <Container>
      <h1>
        my<span>products</span>
      </h1>
      <ul>
        <List isDisabled={true}>
          <a href=''>
            <img src={Home} alt='' />
            Home
          </a>
        </List>
        <List>
          <a href=''>
            <img src={Cart} alt='' />
            Products
          </a>
        </List>
        <p>Categories</p>
        <List isDisabled={true}>
          <a href=''>
            <img src={Heart} alt='' />
            Health
          </a>
        </List>
        <List isDisabled={true}>
          <a href=''>
            <img src={Food} alt='' />
            Food
          </a>
        </List>
        <List isDisabled={true}>
          <a href=''>
            <img src={Pet} alt='' />
            Pet
          </a>
        </List>
        <List isDisabled={true}>
          <a href=''>
            <img src={Flower} alt='' />
            Flower
          </a>
        </List>
      </ul>
    </Container>
  );
};
