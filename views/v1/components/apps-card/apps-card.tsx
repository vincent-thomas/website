import { TextNormal } from "core/components/text/normal";
import { TitleNormal } from "core/components/title/normal";
import { Card } from "core/ui/card";
import { useState } from "react";
import { AppsModal } from "./apps-modal";

export const AppsCard = () => {
  return (
    <>
      <Card type='dark'>
        <TitleNormal>Apps</TitleNormal>
        <TextNormal>
          I have made web-applications with different variations of use cases,
          including movies. I have more to do here.
        </TextNormal>
      </Card>
    </>
  );
};
