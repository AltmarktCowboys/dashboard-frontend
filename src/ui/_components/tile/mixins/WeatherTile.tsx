import * as React from "react";
import TileProps from "./../TileProps";

class WeatherTile extends React.Component<TileProps, null> {
    public render() {
        const cityStyle = {
            fontSize: "20px",
            color: "#888"
        };
        const dateStyle = {
            fontSize: "14px",
            color: "#888"
        };
        const thermometerStyle = {
            color: "#e2dd14"
        };

        return (
            <div style={ { padding: "20px" } }>
                <div style={ cityStyle }>{ this.props.definition.city }</div>
                <div style={ dateStyle }>{ this.props.content.currentCondition.date }</div>
                <div style={ dateStyle }>{ this.props.content.currentCondition.text }</div>
                <div style={ { marginTop: "40px", padding: "20px" } }>
                    <span style={ { marginRight: "30px" } }>
                        <i style={ thermometerStyle } className="fa fa-4x fa-sun-o" />
                    </span>
                    <span style={ { fontSize: "30px", marginRight: "10px" } }>{ this.props.content.currentCondition.temp }</span>
                    <span style={ { fontSize: "16px" } }>°F</span>
                </div>
            </div>
        );
    }
}

export default WeatherTile;