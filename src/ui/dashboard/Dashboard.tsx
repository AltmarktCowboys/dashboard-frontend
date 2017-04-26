import * as React from "react";
const WidthProvider = require("react-grid-layout").WidthProvider;
const ReactGridLayout = WidthProvider(require("react-grid-layout"));
const theme = require("./Dashboard.scss");

class Dashboard extends React.Component<null, null> {
    public render() {
        const layout = {

        };

        return (
            <div className={ theme["dashboard"] }>
                <ReactGridLayout layout={ layout } cols={ 10 }>
                </ReactGridLayout>
            </div>
        );
    }
}

export default Dashboard;