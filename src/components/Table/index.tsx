import {useAppDispatch} from 'store/hooks'

import { Table } from 'antd';
import { dataSource, columns } from './Table.data'
import DataSource from 'lib/types/Table';

import * as MapReducer from 'store/Map';

export default function () {
  const dispatch = useAppDispatch();
  
  return (
    <Table 
    className="Table"
    rowClassName={"Table_row"} 
    columns={columns} 
    dataSource={dataSource} 
    rowSelection= {{
      type:"radio",
      onSelect: (record:DataSource) => {
        dispatch(MapReducer.actions.setCurrCoordinates(record))
      }
    }}
    />
  )
}