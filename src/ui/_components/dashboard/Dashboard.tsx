import * as React from "react";
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
            return (
                <div key={ tile.id }>
                    <Tile definition={ tile } />
                </div>
            );
        });
    }

    public render() {
        const layout = this.props.tiles.map((tile, i) => {
            return {
                i: tile.id,
                x: i * 2 % columnCount,
                y: Infinity,
                w: 2,
                h: 2
            };
        });

        return (
            <div className={ theme["dashboard"] }>
                <ReactGridLayout layout={ layout } cols={ columnCount }>
                    { this.renderTiles() }
                </ReactGridLayout>
            </div>
        );
    }
}

export default Dashboard;