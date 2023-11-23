import { Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react';


const emptyObject = [{
  "id": "",
  "name": "",
}]

const TableForDashboard = () => {
    const Data:[]=[{"id": "1", "name": "Vikas","position":"Develeoper"},{"id": "2", "name": "Pratik","position":"Develeoper"},{"id": "3", "name": "Narayan","position":"Develeoper"},{"id": "4", "name": "Chaitanya","position":"Develeoper"},{"id": "5", "name": "Shubham","position":"Develeoper"},{"id": "6", "name": "Vikas","position":"QA"},{"id": "7", "name": "Pratik","position":"QA"},{"id": "8", "name": "Narayan","position":"QA"},{"id": "9", "name": "Chaitanya","position":"QA"},{"id": "10", "name": "Shubham","position":"QA"},]

    const columns: GridColDef[] = [
        { field: 'id', flex:1, filterable: false, sortable: true, renderHeader: () => <Typography variant='h6'>ID</Typography>}, 
        { field: 'name', flex:2, filterable: false, sortable: true, renderHeader: () => <Typography variant='h6'>Name</Typography>},
        { field: 'position', flex:2, filterable: false, sortable: true, renderHeader: () => <Typography variant='h6'>Position</Typography>},
      ];
    
  return (
    <React.Fragment>
      <div className='tab-panel-list' style={{padding:10}}>
          <DataGrid 
            getRowId={(row)=> row.id} 
            rows={Data ? Data : emptyObject} 
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }} 
            pageSizeOptions={[5, 10, 15]}
            checkboxSelection={false}
            rowSelection={false}
          />
      </div>
    </React.Fragment>
  )
}

export default TableForDashboard;
