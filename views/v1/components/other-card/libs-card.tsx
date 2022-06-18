import { LinkNormal } from "@/core/components";
import { TextNormal } from "core/components/text/normal";
import { TitleNormal } from "core/components/title/normal";
import { Card } from "core/ui/card";

export const OtherCard = () => {
  return (
    <>
      <Card type='dark'>
        <TitleNormal>Other tools</TitleNormal>
        <TextNormal>
          Other projects that I have made/contributed to. I also seek new
          projects I can contribute to. If you&apos;ve seen one email me{" "}
          <LinkNormal
            href='mailto:vincent.nathan.thomas@gmail.com'
            target='_blank'
          >
            here
          </LinkNormal>
        </TextNormal>
      </Card>
    </>
  );
};
