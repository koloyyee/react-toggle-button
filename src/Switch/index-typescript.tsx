import React from "react";
import "./index.css";

// If you wanna implement by TypeScript (Advanced Requirement 1), then rename this file to index.tsx and remove index.jsx
// Otherwise, remove this file

interface Props {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default class Switch extends React.PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    private onClick = () => {
        this.props.onChange(!this.props.checked);
    }

    public render() {
        return <div>
            <div className={`comp-switch ${this.props.checked ? " active" : ""} ${this.props.disabled ? " disabled" : ""}`}  onClick={this.onClick}>
                <div className={`knob ${this.props.checked ? " active" : ""}`}/>
            </div>
        </div>;
    }
}
