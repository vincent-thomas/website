import { Text, Title } from "@lib/components";

export const IsTheWebUpProject = () => {
  return (
    <div className='border-2 border-black rounded p-10 bg-[#F8FB93] flex flex-col gap-2 justify-center md:text-center md:w-max md:left-2 relative'>
      <Title size='medium' className='!text-[#00000]'>
        IsTheWebUp
      </Title>
      <Text color='light' className='!text-[#00000]'>
        A website to check if a specific
        <br />
        website is up and functioning...
      </Text>
    </div>
  );
};
