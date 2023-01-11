import { LatLngExpression } from "leaflet"

export interface InitialState {
  key: string,
  from: LatLngExpression,
  to: LatLngExpression
}

 const initialState: InitialState  = {
  key:"",
  from: [0,0],
  to: [0,0]
}

export default initialState;