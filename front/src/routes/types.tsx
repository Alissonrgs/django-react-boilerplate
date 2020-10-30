export interface IRouteItem {
    component: React.FC,
    exact: boolean,
    menu: boolean
    path: string,
    routes?: IRouteItem[]
}