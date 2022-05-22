import { TextNormal } from "core/components/text/normal";
import { TitleNormal } from "core/components/title/normal";
import { Card } from "core/ui/card";
import { Variants } from "framer-motion";
export const LibsCard = () => {
  return (
    <>
      <Card>
        <TitleNormal>Libraries</TitleNormal>
        <TextNormal>
          I have contributed to the npm ecosystem with multiple packages that
          makes general tasks with js/ts much easier and less complicated
        </TextNormal>
      </Card>
    </>
  );
};
