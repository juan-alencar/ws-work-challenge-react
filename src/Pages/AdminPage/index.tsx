import { Button } from "../../components/Button";
import { Container, Form, TableButton, Title } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import ReactModal from "react-modal";
import { ModalStyle } from "../../styles/global";
import { useForm } from "react-hook-form";

import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";

type IProduct = {
  id: number;
  name: string;
  price: number;
};

export const AdminPage = () => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [createIsOpen, setCreateIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();

  const [actualRow, setActualRow] = useState<IProduct>({
    id: 0,
    name: "",
    price: 0,
  });

  const localDatabase = localStorage.getItem("database");

  function setLocalDatabase(newDatabase: IProduct[]) {
    localStorage.setItem("database", JSON.stringify(newDatabase));
  }

  function createData(id: number, name: string, price: number) {
    return { id, name, price };
  }

  function createRow({ name, price }: IProduct) {
    const max = database.reduce(function (prev, current) {
      return prev.id > current.id ? prev : current;
    });
    const id = max.id + 1;

    const newDatabase = [...database, createData(id, name, +price)];
    setDatabase(newDatabase);
    setCreateIsOpen(false);
    setLocalDatabase(newDatabase);
    reset();
  }

  const rows = [
    createData(1, "Chocolate", 13.0),
    createData(2, "Tomato", 12.0),
    createData(3, "Potato", 11.0),
    createData(4, "Carrot", 10.0),
  ];

  const [database, setDatabase] = useState<IProduct[]>(
    localDatabase !== null ? JSON.parse(localDatabase) : rows
  );

  function editRow({ name, price }: IProduct) {
    const row = database.find((row) => row.id === actualRow.id);
    if (row) {
      const newDatabase = database.filter((row) => row.id !== actualRow.id);

      const newRow = {
        id: actualRow.id,
        name: name === "" ? row.name : name,
        price: +price,
      };

      newDatabase.push(newRow);
      setDatabase(newDatabase);
      setLocalDatabase(newDatabase);
      setEditIsOpen(false);
      reset();
    }
  }

  function deleteRow(id: number) {
    let row = database.find((row) => row.id === id);
    if (row) {
      const newDatabase = database.filter((row) => row.id !== id);
      setDatabase(newDatabase);
      setLocalDatabase(newDatabase);
    }
    setDeleteIsOpen(false);
  }

  return (
    <Container>
      <Title>
        <h1>Product List</h1>
        <Button
          type='button'
          handleClick={() => setCreateIsOpen(true)}
          image={""}
          value={"New Product"}
        />
      </Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id.</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Price (R$)</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {database.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  #{row.id}
                </TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>R$ {row.price}</TableCell>
                <TableCell align='right'>
                  <TableButton
                    onClick={() => {
                      setActualRow(row);
                      setEditIsOpen(true);
                    }}
                  >
                    <img src={Edit} alt='' />
                  </TableButton>
                  <TableButton
                    onClick={() => {
                      setActualRow(row);
                      setDeleteIsOpen(true);
                    }}
                  >
                    <img src={Delete} alt='' />
                  </TableButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Create Modal */}

      <ReactModal
        style={ModalStyle}
        isOpen={createIsOpen}
        onRequestClose={() => setCreateIsOpen(false)}
      >
        <Form onSubmit={handleSubmit(createRow)}>
          <input type='text' {...register("name")} placeholder='Product Name' />
          <input type='text' {...register("price")} placeholder='Price (R$)' />
          <Button image={""} type='submit' value='SAVE' />
        </Form>
      </ReactModal>

      {/* Edit Modal */}

      <ReactModal
        style={ModalStyle}
        isOpen={editIsOpen}
        onRequestClose={() => setEditIsOpen(false)}
      >
        <Form onSubmit={handleSubmit(editRow)}>
          <input type='text' {...register("name")} placeholder='Product Name' />
          <input
            type='number'
            {...register("price")}
            placeholder='Price (R$)'
          />
          <Button image={""} type='submit' value='SAVE' />
        </Form>
      </ReactModal>

      {/* Delete Modal */}

      <ReactModal
        style={ModalStyle}
        isOpen={deleteIsOpen}
        onRequestClose={() => setDeleteIsOpen(false)}
      >
        <p>Are you sure you want to delete Product #{actualRow.id}</p>
        <Button
          image={""}
          type='button'
          value='DELETE'
          handleClick={() => deleteRow(actualRow.id)}
        />
      </ReactModal>
    </Container>
  );
};
