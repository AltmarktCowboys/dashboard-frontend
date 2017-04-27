import * as React from "react";
import { List, ListItem } from 'react-toolbox/lib/list';
import TileProps from "./../TileProps";
const theme = require("./../Tile.scss");

class JiraTile extends React.Component<TileProps, null> {
    private onItemClick(url: string) {
        window.open(url, '_blank').focus();
    }

    private renderNewsEntries() {
        return this.props.content.issues.map((issue: any, i: number) => {
            return (
                <ListItem
                    key={ i }
                    className={ theme["list-item"] }
                    caption={ `${issue.summary} - ${issue.key}` }
                    legend={ issue.state }
                    onClick={ this.onItemClick.bind(this, issue.url) }
                />
            );
        });
    }

    public render() {
        return (
            <div style={ { width: "100%", "overflowY": "auto", "overflowX": "hidden" } }>
                <List selectable ripple>
                    { this.renderNewsEntries() }
                </List>
            </div>
        );
    }
}

export default JiraTile;