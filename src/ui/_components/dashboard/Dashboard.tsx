import * as React from "react";
import * as assign from "object-assign";
import Dialog from "react-toolbox/lib/dialog";
import App from "./../../../App";
import Tile from "./../tile/Tile";
import LoadingOverlay from "./../loading_overlay/LoadingOverlay";
const WidthProvider = require("react-grid-layout").WidthProvider;
const ReactGridLayout = WidthProvider(require("react-grid-layout"));
const theme = require("./Dashboard.scss");
const columnCount = 10;

interface DashboardContainerProps {
    tiles: any[];
    fixed: boolean;
    onDeleteTile: (templateId: string, tileId: string) => void;
}

interface DashboardContainerState {
    showDeleteConfirmation: boolean;
    deleteTemplateId: string;
    deleteTileId: string;
}

class Dashboard extends React.Component<DashboardContainerProps, DashboardContainerState> {
    constructor(props: DashboardContainerProps) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            showDeleteConfirmation: false,
            deleteTemplateId: null,
            deleteTileId: null
        };
    }

    private onDeleteClick(templateId: string, tileId: string) {
        this.setState({
            showDeleteConfirmation: true,
            deleteTemplateId: templateId,
            deleteTileId: tileId
        });
    }

    private onDelete() {
        this.setState({
            showDeleteConfirmation: false
        });

        this.props.onDeleteTile(this.state.deleteTemplateId, this.state.deleteTileId);
    }

    private onCancel() {
        this.setState({
            showDeleteConfirmation: false
        });
    }

    private getDeleteDialogActions() {
        return [
            { label: "Cancel", onClick: this.onCancel },
            { label: "Delete", onClick: this.onDelete }
        ];
    }

    public renderTiles() {
        return this.props.tiles.map((tile: any) => {
            const def = assign({}, tile.definition, App.getTile(tile.definition.templateId));
            let content = (
                <Tile definition={ def } content={ tile.content } loading={ tile.loading } onDelete={ this.onDeleteClick } />
            );

            if (!this.props.fixed) {
                content = (
                    <LoadingOverlay loading={ true } icon="fa-arrows-alt">
                        <Tile definition={ def } content={ tile.content } loading={ tile.loading } onDelete={ this.onDeleteClick } />
                    </LoadingOverlay>
                );
            }

            return (
                <div key={ def.id }>
                    { content }
                </div>
            );
        });
    }

    public render() {
        let x = 0;
        const layout = this.props.tiles.map((tile) => {
            const def = App.getTile(tile.definition.templateId);

            if (x + def.width <= columnCount) {
                x += def.width;
            } else {
                x = 0;
            }

            return {
                i: tile.definition.id,
                x: x,
                y: Infinity,
                w: def.width,
                h: def.height
            };
        });

        return (
            <div className={ theme["dashboard"] }>
                <Dialog
                    type="small"
                    actions={ this.getDeleteDialogActions() }
                    active={ this.state.showDeleteConfirmation }
                    onOverlayClick={ this.onCancel }
                    title='Delete Tile'
                >
                    <p>Delete tile?</p>
                </Dialog>
                <ReactGridLayout layout={ layout } cols={ columnCount } isResizable={ false } isDraggable={ !this.props.fixed }>
                    { this.renderTiles() }
                </ReactGridLayout>
            </div>
        );
    }
}

export default Dashboard;