import { Text, Title } from "@core/components";
import { MaxWidthLayout } from "@core/layouts";
import S from "./projects.module.scss";

export const ProjectsView = () => {
  return (
    <>
      <div className={S["wrapper"]}>
        <div className={`${S["row-1"]} ${S["row"]}`}>
          <div className={`${S["cell-1"]} ${S["cell"]}`}>
            <Title size='large'>Projects</Title>
            <Text size='large' restrictWidth>
              Here are my projects i’ve been working on lately. Hope you like
              them!
            </Text>
          </div>
          <div className={`${S["cell-2"]} ${S["cell"]}`}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              IsTheWebUp?
            </h1>
            <Text size='large' style={{ color: "black" }}>
              A website to check if a specific website is up and functioning...
            </Text>
          </div>
        </div>
        <div className={`${S["row-2"]} ${S["row"]}`}>
          <div className={`${S["cell-1"]} ${S["cell"]}`}>
            <h1
              className={S["pureforms-title"]}
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              PureForms
            </h1>
          </div>
          <div className={`${S["cell-2"]} ${S["cell"]}`}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              Shorter
            </h1>
            <Text size='large' style={{ color: "black" }}>
              A link shortener built with remix and redis
            </Text>
          </div>
        </div>
      </div>
      <div className={`${S["row-3"]} ${S["row"]}`}>
        <div className={`${S["cell-1"]} ${S["cell"]}`}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 300
            }}
          >
            Gatekeeper
          </h1>
          <Text size='large' style={{ color: "black" }}>
            A advanced Discord bot for authentication and user management with
            dashboards.
          </Text>
        </div>
        <div className={`${S["cell-2"]} ${S["cell"]}`}>
          <Title style={{ fontWeight: 400, marginBlock: "auto" }}>
            Do you have a fun project in mind and want to colaborate? Chat with
            me <a href='mailto:vincent.nathan.thomas@gmail.com'>here</a>.
          </Title>
        </div>
      </div>
      <MaxWidthLayout mode='dark'>
        <Title color='dark'>Coming more soon...</Title>
      </MaxWidthLayout>
    </>
  );
};
// </MaxWidthLayout>
