import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > h1 {
    color: ${(props) => props.theme.orange100};
    font-weight: 500;
    line-height: 0.5;

    span {
      font-weight: bold;
      color: ${(props) => props.theme.blue200};
    }
  }

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    > p {
      color: ${(props) => props.theme.gray400};
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
    z-index: 99;

    > h1 {
      display: none;
    }

    > ul {
      flex-direction: row;
      gap: 0;
      justify-content: space-around;
      padding: 0.5rem 0;

      > p {
        display: none;
      }
    }
  } ;
`;

type IList = {
  isDisabled?: boolean;
};

export const List = styled.li<IList>`
  display: flex;
  border-radius: 1rem;
  > a {
    padding: 1rem 4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) =>
      props.isDisabled ? props.theme.gray200 : props.theme.blue200};
    text-decoration: none;
    font-weight: bold;
    cursor: ${(props) => (props.isDisabled ? "initial" : "pointer")};
  }

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? props.theme.white : props.theme.neutral};
  }

  @media (max-width: 768px) {
    > a {
      padding: 0.5rem;
      flex-direction: column;
      min-width: 64;
    }
  }
`;
