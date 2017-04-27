import * as React from "react";
import TileProps from "./../TileProps";

class OneClickTile extends React.Component<TileProps, null> {
    private openLink(url: string) {
        window.open(url, '_blank').focus();
    }

    public render() {
        return (
            <div style={ { padding: "20px", textAlign: "center", cursor: "pointer" } } onClick={ this.openLink.bind(this, this.props.content.DirectLink) }>
                <div style={ { color: "#0081c6", fontSize: "20px" } }>ADDISON</div>
                <div style={ { color: "#E6742E", fontSize: "20px" } }>OneClick</div>
            </div>
        );
    }
}

export default OneClickTile;