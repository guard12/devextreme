import React, { useState } from 'react';
import {
	Grid,
	Table,
	TableHeaderRow,
	TableSelection,
	PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import {
	SelectionState,
	PagingState,
	IntegratedPaging,
	IntegratedSelection,
	SortingState,
	IntegratedSorting,
} from '@devexpress/dx-react-grid';
import Paper from '@material-ui/core/Paper';
import ddts from './ddts.json'

export function List() {
    const [columns] = useState([
        { name: 'id', title: 'No.' },
        { name: 'date', title: 'Date' },
		{ name: 'customerGroup', title: 'Group', },
		{ name: 'customerNumber', title: 'Customer no.', getCellValue: row => (row.owner ? row.owner.id : undefined)},
        { name: 'customerName', title: 'Customer Name', getCellValue: row => (row.owner ? row.owner.name : undefined)},
        { name: 'totalAmount', title: 'Net Amount' },
      ]);
      const [rows] = useState(ddts.collection);
	  const [selection, setSelection] = useState([]);
	  const [sorting, setSorting] = useState([{ columnName: 'id', direction: 'asc' }]);

      return <Paper>
	  <Grid
		rows={rows}
		columns={columns}
	  >
		<SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
		<SelectionState
		  selection={selection}
		  onSelectionChange={setSelection}
		/>
		<PagingState
		  defaultCurrentPage={0}
		  pageSize={6}
		/>
		<IntegratedSelection />
		<IntegratedPaging />
		<IntegratedSorting />
		<Table />
		<TableHeaderRow showSortingControls/>
		<TableSelection showSelectAll />
		<PagingPanel />
	  </Grid>
	</Paper>
}