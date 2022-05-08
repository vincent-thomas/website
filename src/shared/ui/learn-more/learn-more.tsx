import { Button } from "@v-thomas/core-ui";

export const LearnMoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      Learn more
    </Button>
  );
};
