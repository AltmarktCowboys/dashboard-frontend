import * as React from "react";
import Input from "react-toolbox/lib/input";
import ConfigurationProps from "./../ConfigurationProps";

class OneClickConfiguration extends React.Component<ConfigurationProps, null> {
    public render() {
        return (
            <section>
                <Input type="text" label="Enter a host" name="uri" value={ this.props.values["uri"] } onChange={ this.props.onChange.bind(this, "uri") } />
                <Input type="text" label="Enter a username" name="username" value={ this.props.values["username"] } onChange={ this.props.onChange.bind(this, "username") } />
                <Input type="password" label="and your password" name="password" value={ this.props.values["password"] } onChange={ this.props.onChange.bind(this, "password") } />
            </section>
        );
    }
}

export default OneClickConfiguration;