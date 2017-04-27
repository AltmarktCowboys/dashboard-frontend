import * as React from "react";
import * as assign from "object-assign";
import App from "./../../../App";
import Tile from "./../tile/Tile";
const WidthProvider = require("react-grid-layout").WidthProvider;
const ReactGridLayout = WidthProvider(require("react-grid-layout"));
const theme = require("./Dashboard.scss");
const columnCount = 10;

interface DashboardContainerProps {
    tiles: any[];
}

class Dashboard extends React.Component<DashboardContainerProps, null> {
    public renderTiles() {
        return this.props.tiles.map((tile: any) => {
            const def = assign({}, tile.definition, App.getTile(tile.definition.templateId));

            return (
                <div key={ def.id }>
                    <Tile definition={ def } content={ tile.content } loading={ tile.loading } />
                </div>
            );
        });
    }

    public render() {
        let x = 0;
        const layout = this.props.tiles.map((tile) => {
            const def = App.getTile(tile.definition.templateId);

            if (x + def.width <= columnCount) {
                x += def.width;
            } else {
                x = 0;
            }

            return {
                i: tile.definition.id,
                x: x,
                y: Infinity,
                w: def.width,
                h: def.height,
                draggableHandle: ".tile-handle"
            };
        });

        return (
            <div className={ theme["dashboard"] }>
                <ReactGridLayout layout={ layout } cols={ columnCount } isResizable={ false }>
                    { this.renderTiles() }
                </ReactGridLayout>
            </div>
        );
    }
}

export default Dashboard;