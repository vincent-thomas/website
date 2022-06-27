import { ButtonPrimary } from "core/components";

export const LearnMoreButton = ({
  onClick,
  ...props
}: {
  onClick: () => void;
}) => {
  return (
    <ButtonPrimary onClick={onClick} {...props}>
      Learn more
    </ButtonPrimary>
  );
};
