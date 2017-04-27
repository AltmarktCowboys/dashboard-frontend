import * as React from "react";
import { List, ListItem } from 'react-toolbox/lib/list';
import TileProps from "./../TileProps";
const theme = require("./../Tile.scss");

class TwitterTile extends React.Component<TileProps, null> {
    private openLink(url: string) {
        window.open(url, '_blank').focus();
    }

    private renderTweets() {
        return this.props.content.tweets.map((tweet: any, i: number) => {
            return (
                <ListItem
                    key={ i }
                    avatar={ tweet.user.profileImageUrl }
                    className={ theme["list-item"] }
                    caption={ tweet.text }
                    legend={ tweet.user.name }
                />
            );
        });
    }

    public render() {
        return (
            <div style={ { width: "100%", "overflowY": "auto", "overflowX": "hidden" } }>
                <List selectable ripple>
                    { this.renderTweets() }
                </List>
            </div>
        );
    }
}

export default TwitterTile;