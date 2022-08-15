import { Button, Link, Text, Title } from "@lib/components";

export const GatekeeperProject = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#2591B4] flex flex-col gap-2 md:w-[80%]'>
      <Title size='medium' className='!text-[#00000]'>
        t2dpn
      </Title>
      <Text color='light' className='!text-[#00000]'>
        A Tech Stack designed to create apps as easy as possible. It supports
        you with your fullstack app journey.
      </Text>
      <div className='mt-auto ml-auto'>
        <Link
          type='not-styled'
          to='https://github.com/vincent-thomas/t2dpn'
          external
        >
          <Button className='!p-4 text-black' type='secondary'>
            Github Repo
          </Button>
        </Link>
      </div>
    </div>
  );
};
