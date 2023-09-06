import React, { FC } from 'react';
import TableRowSkeleton from '../TableRowSkeleton';
import { Error } from '../error';
//styles
import { Table, TableHead, TableRow, TableBody, TableContainer } from '@mui/material';
import { StyledTableCell, StyledTableRowAlternative } from 'src/styles/styled';
//types
import { Person } from 'src/store/people/types';

type FilmCardtypes = {
  people: Person[];
  loading: boolean;
  error: string | null;
};

export const PeopleTable: FC<FilmCardtypes> = ({ people, loading, error }) => {
  const peopleNotFoundRow = (
    <StyledTableRowAlternative>
      <StyledTableCell colSpan={7} sx={{ cursor: 'auto' }}>
        No people found
      </StyledTableCell>
    </StyledTableRowAlternative>
  );
  return (
    <>
      <TableContainer sx={{ mt: 5, height: '280px', overflowY: 'scroll' }}>
        <Table sx={{ minWidth: 500 }} size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Birth Year</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">Mass kg</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRowSkeleton count={5} colSpan={7} />
            ) : (
              people?.map((person) => (
                <StyledTableRowAlternative key={person.url}>
                  <StyledTableCell>{person.name}</StyledTableCell>
                  <StyledTableCell style={{ width: 200 }} align="left">
                    {person.birth_year}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 200 }} align="left">
                    {person.gender}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 200 }} align="left">
                    {person.mass}
                  </StyledTableCell>
                </StyledTableRowAlternative>
              ))
            )}
            {people.length === 0 && !loading && peopleNotFoundRow}
            {error && !people && <Error error={error} />}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
