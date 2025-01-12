import "./styles.ts"
import type { ButtonProps } from "./types"
import { Icon, MainButton } from "./styles"

function Button({
  name,
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  spinner,
  backgroundColor,
  icon,
}: Readonly<ButtonProps>) {
  // console.log(props.buttonName);

  return (
    <MainButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {loading ? spinner : icon ? <Icon src={icon} alt={name} /> : name}
    </MainButton>
  )
}

export default Button
