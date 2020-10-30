import Landing from "../containers/landing"

import { IRouteItem } from "./types"

const Route:IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    menu: false,
    path: '/'
  },
]

export default Route;