import React from 'react'
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableColumnResizing
} from '@devexpress/dx-react-grid-material-ui'

import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid'

import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid'

import {
  DateTypeProvider,
  LinkProvider,
  DurationProvider
} from './formatter'

import './AppGrid.css'

const courses = require('../data/courses.json')
const columns = [
  // { name: 'Name', title: 'name' },
  { name: 'Title', title: 'title' },
  { name: 'AuthorsFullnames', title: 'author' },
  { name: 'DurationInMilliseconds', title: 'duration' },
  { name: 'ReleaseDate', title: 'released' },
  { name: 'UpdatedDate', title: 'updated' },
  { name: 'UrlSlug', title: 'link' },
]
const defaultColumnWidths = [
  { columnName: 'Title', width: 300 },
  { columnName: 'AuthorsFullnames', width: 180 },
  { columnName: 'DurationInMilliseconds', width: 100 },
  { columnName: 'ReleaseDate', width: 100 },
  { columnName: 'UpdatedDate', width: 100 },
  { columnName: 'UrlSlug', width: 160 },
]

const AppGrid = () => (
  <div className="App">
    <h2>Resources</h2>
    <Paper>
      <Grid
        rows={courses}
        columns={columns}>
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <DateTypeProvider
          for={['ReleaseDate', 'UpdatedDate']}
        />
        <LinkProvider
          for={['UrlSlug']}
        />
        <DurationProvider
          for={['DurationInMilliseconds']}
        />
        <SortingState
          defaultSorting={[{ columnName: 'Title', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow showSortingControls />
        <TableFilterRow />
      </Grid>
    </Paper>
  </div>
);

export default AppGrid
