import "./styles.ts";
import {ButtonProps} from "./types";
import {MainButton} from './styles';

function Button({
                    name,
                    type = "button",
                    onClick,
                    disabled = false,
                    loading = false,
                    spinner,
                    backgroundColor
                }: ButtonProps) {
    // console.log(props.buttonName);

    return (
        <MainButton onClick={onClick} type={type} disabled={disabled} backgroundColor={backgroundColor}>
            {loading ? spinner : name}
        </MainButton>
    );
}

export default Button;