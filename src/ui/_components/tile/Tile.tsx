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
    onDelete: (templateId: string, tileId: string) => void;
}

class Tile extends React.Component<TileContainerProps, null> {
    private isTileReady() {
        return Tiles[this.props.definition.templateId] != null && this.props.content != null;
    }

    public render() {
        return (
            <LoadingOverlay loading={ this.props.loading }>
                <Card className={ theme["tile"] }>
                    <div className={ classNames(theme["tile-header"], "tile-handle") }>
                        <i className={ classNames("fa fa-lg", this.props.definition.icon) } />&nbsp;{ this.props.definition.title }
                        <span className={ theme["actions"] }>
                            <span onClick={ () => console.log("test") }>
                                <i className="fa fa-lg fa-cog" />
                            </span>
                            <span onClick={ this.props.onDelete.bind(this, this.props.definition.templateId, this.props.definition.id) }>
                                <i className="fa fa-lg fa-close" />
                            </span>
                        </span>
                    </div>
                    {
                        this.isTileReady() && React.createElement(Tiles[this.props.definition.templateId], {
                            definition: this.props.definition,
                            content: this.props.content
                        })
                    }
                </Card>
            </LoadingOverlay>
        );
    }
}

export default Tile;