import { Button } from "core/components";

export const LearnMoreButton = ({
  onClick,
  ...props
}: {
  onClick: () => void;
}) => {
  return (
    <Button onClick={onClick} {...props} version='primary'>
      Learn more
    </Button>
  );
};
