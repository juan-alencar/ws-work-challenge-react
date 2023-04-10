import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 4rem 0;
  max-width: 1000px;
  gap: 4rem;
  margin: 0 auto;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > h1 {
    color: ${(props) => props.theme.blue200};
    font-size: 1.5rem;
  }
`;
export const TableContainer = styled.div`
  display: flex;

  > table {
    background-color: ${(props) => props.theme.white};
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    > tr {
      > th {
        margin-right: 1rem;
        text-align: left;
      }
      > td {
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  > input {
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${(props) => props.theme.neutral};
    border-radius: 0.5rem;
    outline: none;
  }
`;

export const TableButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
