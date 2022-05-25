import { StyledToggleableButton } from './styled';

interface ToggleButtonProps {
    toggled?: boolean;
    disabled?: boolean;
    children?: string;
    onClick?(): void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ children, disabled, toggled, onClick }) => {
    return (
        <StyledToggleableButton
            variant={toggled ? 'primary' : 'secondary'}
            disabled={!toggled && disabled}
            onClick={onClick}
        >
            {children}
        </StyledToggleableButton>);
};