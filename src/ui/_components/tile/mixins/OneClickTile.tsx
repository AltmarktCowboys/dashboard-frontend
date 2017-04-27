import * as React from "react";
import TileProps from "./../TileProps";

class OneClickTile extends React.Component<TileProps, null> {
    private openLink(url: string) {
        window.open(url, '_blank').focus();
    }

    public render() {
        return (
            <div style={ { padding: "20px" } } onClick={ this.openLink.bind(this, this.props.content.directLink) }>
                <div style={ { color: "#0081c6" } }>ADDISON</div>
                <div style={ { color: "#E6742E" } }>OneClick</div>
            </div>
        );
    }
}

export default OneClickTile;