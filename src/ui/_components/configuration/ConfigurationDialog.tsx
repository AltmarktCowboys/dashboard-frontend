import * as React from "react";
import * as assign from "object-assign";
import Dialog from "react-toolbox/lib/dialog";
import Input from "react-toolbox/lib/input";
import Configurations from "./mixins";

interface ConfigurationDialogProps {
    tileId: string;
    templateId: string;
    onCancel: () => void;
    onSave: (data: any) => void;
}

interface ConfigurationDialogState {
    values: any;
}

class ConfigurationDialog extends React.Component<ConfigurationDialogProps, ConfigurationDialogState> {
    constructor(props: ConfigurationDialogProps) {
        super(props);

        this.getValue = this.getValue.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.state = {
            values: {}
        };
    }

    private getConfigurationActions() {
        return [
            { label: "Cancel", onClick: this.props.onCancel },
            { label: "Save", onClick: this.onSave }
        ];
    }

    private getValue(name: string) {
        if (this.state.values[name] == null) {
            return "";
        }

        return this.state.values[name];
    }

    private onSave() {
        this.props.onSave(assign({}, this.state.values, {
            templateId: this.props.templateId
        }));

        this.setState({
            values: {}
        });
    }

    private onChange(name: string, value: any) {
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }

    public render() {
        return (
            <Dialog
                type="small"
                actions={ this.getConfigurationActions() }
                active={ this.props.templateId != null }
                onOverlayClick={ this.props.onCancel }
                title='New Tile'
            >
                <section>
                    <Input type="text" label="Enter your title" value={ this.state.values["title"] } onChange={ this.onChange.bind(this, "title") } />
                </section>
                {
                    Configurations[this.props.templateId] != null && React.createElement(Configurations[this.props.templateId], {
                        onChange: this.onChange,
                        getValue: this.getValue
                    })
                }
            </Dialog>
        );
    }
}

export default ConfigurationDialog;