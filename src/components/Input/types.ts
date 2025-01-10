import { ChangeEvent } from "react";

export interface InputProps {
    name: string,
    id?: string,
    type?: 'text' | 'email' | 'password' | 'tel',
    placeholder?: string,
    label?: string,
    // временно делаем пропсы value и onChange необязательными, чтобы не было ошибок в старых компонентах
    value?: string | boolean | number | null,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    error?: string;
}