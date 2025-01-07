import {ReactNode} from "react";

type ButtonType = "button" | 'submit' | "reset";

export interface ButtonProps {
    name: string;
    type?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    spinner?: ReactNode;
    backgroundColor?: string;
}