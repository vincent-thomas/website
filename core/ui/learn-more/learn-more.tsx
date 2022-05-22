import { ButtonPrimary } from "core/components";

export const LearnMoreButton = ({ onClick }: { onClick: () => void }) => {
  return <ButtonPrimary onClick={onClick}>Learn more</ButtonPrimary>;
};
