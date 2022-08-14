import { Text, Title } from "lib/components";
import { MaxWidthLayout } from "lib/layouts";
import S from "./projects.module.scss";

export const ProjectsView = () => {
  return (
    <MaxWidthLayout>
      <div className='grid gap-4 grid-cols-[1fr,1fr]'>
        <div className='grid grid-rows-[auto,1fr,auto]'>
          <div style={{ maxWidth: "30ch" }}>
            <Title size='large' className='pt-16'>
              Projects
            </Title>
            <Text>
              Here are my projects i’ve been working on lately. Hope you like
              them!
            </Text>
          </div>
          <Title size='large' className='pt-16'>
            Projects
          </Title>
        </div>
        <div>
          {" "}
          <Title size='large' className='pt-16'>
            Placeholder
          </Title>{" "}
          <Title size='large' className='pt-16'>
            PlaceHolder
          </Title>{" "}
          <Title size='large' className='pt-16'>
            placeholder
          </Title>
        </div>
      </div>
      {/* <div className='grid'>
        <div className=''>
          <div className=''>
            <Title size='large'>Projects</Title>
            <Text restrictWidth>
              Here are my projects i’ve been working on lately. Hope you like
              them!
            </Text>
          </div>
          <div className=''>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              IsTheWebUp?
            </h1>
            <Text style={{ color: "black" }}>
              A website to check if a specific website is up and functioning...
            </Text>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <h1
              className=''
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              PureForms
            </h1>
          </div>
          <div className=''>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 300
              }}
            >
              Shorter
            </h1>
            <Text style={{ color: "black" }}>
              A link shortener built with remix and redis
            </Text>
          </div>
        </div>
      </div>
      <div className=''>
        <div className=''>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 300
            }}
          >
            Gatekeeper
          </h1>
          <Text style={{ color: "black" }}>
            A advanced Discord bot for authentication and user management with
            dashboards.
          </Text>
        </div>
        <div className=''>
          <Title style={{ fontWeight: 400, marginBlock: "auto" }}>
            Do you have a fun project in mind and want to colaborate? Chat with
            me <a href='mailto:vincent.nathan.thomas@gmail.com'>here</a>.
          </Title>
        </div>
      </div> */}
      {/* <MaxWidthLayout>
        <Title color='dark'>Coming more soon...</Title>
      </MaxWidthLayout> */}
    </MaxWidthLayout>
  );
};
// </MaxWidthLayout>
