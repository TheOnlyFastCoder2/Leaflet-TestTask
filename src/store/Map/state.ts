import { LatLngExpression } from "leaflet"

export interface InitialState {
  from: LatLngExpression,
  to: LatLngExpression
}

 const initialState: InitialState  = {
  from: [0,0],
  to: [0,0]
}

export default initialState;