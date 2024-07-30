import { IconButton } from "./Button.styled";

function Button({ className = "", icon, label, ...rest }) {
  return (
    <IconButton className={className} {...rest}>
      <img draggable={false} src={`icons/${icon}.svg`} alt={label} />
    </IconButton>
  );
}

export default Button;
