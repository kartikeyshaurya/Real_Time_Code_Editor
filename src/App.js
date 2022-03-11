import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
  
const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'NAME', width: 170 },
  { field: 'age', headerName: 'AGE', width: 170 },
  { field: 'Eid', headerName: 'EID', width: 170 },
  { field: 'Ename', headerName: 'ENAME', width: 170 },
  { field: 'Eage', headerName: 'EAGE', width: 170 },
  { field: 'fid', headerName: 'FID', width: 170 },
  { field: 'fname', headerName: 'FNAME', width: 170 },
  { field: 'fage', headerName: 'FAGE', width: 170 },
];
  
const rows = [
  { id: 1, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 },
  { id: 2, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 },
  { id: 3, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 },
  { id: 4, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 },,
  { id: 5, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 },
  { id: 6, name: 'Gourav', age: 12,Eid: 1, Ename: 'Gourav', Eage: 12,fid: 1, fname: 'Gourav', fage: 12 }
 
];
  

export default function App() {
  return (
    <div style={{ height: 500, width: '80%' }}>
      <h4>How to use DataGrid Component in ReactJS?</h4>
      <
      DataGrid rows={rows} columns={columns} pageSize={9}
      
      Pagination count={10}
      checkboxSelection
      disableSelectionOnClick
      />
    </div>
  );
}

// <Pagination count={10} />