import Landing from "../containers/landing"

import { IRouteItem } from "./types"

const Route:IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    menu: true,
    path: '/',
    icon: 'home',
    name: 'Inicial',
  },
]

export default Route;