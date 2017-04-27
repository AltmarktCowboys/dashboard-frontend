import * as React from "react";
import Input from "react-toolbox/lib/input";
import ConfigurationProps from "./../ConfigurationProps";

class WeatherConfiguration extends React.Component<ConfigurationProps, null> {
    public render() {
        return (
            <section>
                <Input type="text" label="Enter a city" name="city" value={ this.props.getValue("city") } onChange={ this.props.onChange.bind(this, "city") } />
            </section>
        );
    }
}

export default WeatherConfiguration;