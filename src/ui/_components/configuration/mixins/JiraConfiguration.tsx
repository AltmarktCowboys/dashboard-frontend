import * as React from "react";
import Input from "react-toolbox/lib/input";
import ConfigurationProps from "./../ConfigurationProps";

class OneClickConfiguration extends React.Component<ConfigurationProps, null> {
    public render() {
        return (
            <section>
                <Input type="text" label="URL" name="jiraUrl" value={ this.props.getValue("jiraUrl") } onChange={ this.props.onChange.bind(this, "jiraUrl") } />
                <Input type="text" label="Enter a username" name="username" value={ this.props.getValue("username") } onChange={ this.props.onChange.bind(this, "username") } />
                <Input type="password" label="and your password" name="password" value={ this.props.getValue("password") } onChange={ this.props.onChange.bind(this, "password") } />
            </section>
        );
    }
}

export default OneClickConfiguration;