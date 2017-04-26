import * as React from "react";
const theme = require("./Tile.scss");

interface TileProps {
    definition: any;
}

class Tile extends React.Component<TileProps, null> {
    public render() {
        return (
            <div className={ theme["tile"] }>{ this.props.definition.title }</div>
        );
    }
}

export default Tile;