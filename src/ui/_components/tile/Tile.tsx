import * as React from "react";
import * as classNames from "classnames";
import { Card } from "react-toolbox/lib/card";
import LoadingOverlay from "./../loading_overlay/LoadingOverlay";
import Tiles from "./mixins";
const theme = require("./Tile.scss");

interface TileContainerProps {
    definition: any;
    loading: boolean;
    content: any
}

class Tile extends React.Component<TileContainerProps, null> {
    public render() {
        return (
            <Card className={ theme["tile"] }>
                <LoadingOverlay loading={ this.props.loading }>
                    <div className={ classNames(theme["tile-header"], "tile-handle") }>
                        <i className={ classNames("fa fa-lg", this.props.definition.icon) } />&nbsp;{ this.props.definition.title }
                        <span className={ theme["actions"] }>
                        <i className="fa fa-lg fa-cog" />
                        <i className="fa fa-lg fa-close" />
                    </span>
                    </div>
                    {
                        Tiles[this.props.definition.templateId] != null && React.createElement(Tiles[this.props.definition.templateId], {
                            definition: this.props.definition,
                            content: this.props.content
                        })
                    }
                </LoadingOverlay>
            </Card>
        );
    }
}

export default Tile;