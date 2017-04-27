import * as React from "react";
import { List, ListItem } from 'react-toolbox/lib/list';
import TileProps from "./../TileProps";
const theme = require("./../Tile.scss");

class NewsTile extends React.Component<TileProps, null> {
    private onItemClick(url: string) {
        window.open(url, '_blank').focus();
    }

    private renderNewsEntries() {
        return this.props.content.feeds.map((feed: any, i: number) => {
            return (
                <ListItem
                    key={ i }
                    className={ theme["list-item"] }
                    caption={ feed.title }
                    legend={ feed.category }
                    onClick={ this.onItemClick.bind(this, feed.link) }
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

export default NewsTile;