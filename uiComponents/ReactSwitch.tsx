import Switch from "react-switch";

interface IReactSwitch {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const ReactSwitch: React.FC<IReactSwitch> = ({ checked, onChange, disabled = false }) => {

    return (
        <Switch
            disabled={disabled}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={22}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            // id="material-switch"
            checked={checked}
            onChange={checked => onChange(checked)
            }
        />
    );
};