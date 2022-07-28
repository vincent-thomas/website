import { Button } from "@shared/components";

export const LearnMoreButton = ({
  onClick,
  ...props
}: {
  onClick: () => void;
}) => {
  return (
    <Button onClick={onClick} {...props} type='primary'>
      Learn more
    </Button>
  );
};
