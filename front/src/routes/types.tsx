// third party imports
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export interface IRouteItem {
    component: React.FC,
    exact: boolean,
    menu: boolean
    path: string,
    routes?: IRouteItem[],
    icon: SemanticICONS,
    name: string
}