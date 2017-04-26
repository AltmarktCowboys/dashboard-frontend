interface ConfigurationProps {
    onChange: (name: string, value: any) => void;
    getValue(name: string): any;
}

export default ConfigurationProps;