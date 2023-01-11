import {useAppDispatch, useAppSelector} from 'store/hooks'

import { Table } from 'antd';
import { dataSource, columns } from './Table.data'
import DataSource from 'lib/types/Table';

import * as MapReducer from 'store/Map';
import { useEffect } from 'react';

export default function () {
  const state = useAppSelector(MapReducer.getState);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(MapReducer.actions.setCurrCoordinates(dataSource[0]));
  },[])


  return (
    <Table
    key={state.key} 
    className="Table"
    rowClassName={"Table_row"} 
    columns={columns} 
    dataSource={dataSource} 
    rowSelection= {{
      type:"radio",
      defaultSelectedRowKeys: [state.key],
      onSelect: (record:DataSource) => {
        dispatch(MapReducer.actions.setCurrCoordinates(record))
      },
    }}
    />
  )
}