import {useAppDispatch} from 'store/hooks'
import { useEffect } from "react"

import Map from "./Map"
import Table from "./Table"

import { dataSource } from './Table/Table.data'
import * as MapReducer from 'store/Map'



export default function () {
  const dispatch =  useAppDispatch();

  useEffect(() => {
    dispatch(MapReducer.actions.setCurrCoordinates(dataSource[0]));
  },[])

  return (
    <>
    <Table/>
    <Map/>
    </>
  )
}