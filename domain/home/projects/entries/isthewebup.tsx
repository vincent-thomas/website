import { Text, Title } from "@lib/components";

export const IsTheWebUpProject = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#F8FB93] w-full flex flex-col gap-2 justify-right md:text-center md:w-min md:ml-auto md:px-12 relative md:right-12'>
      <Title size='medium' className='!text-[#00000]'>
        IsTheWebUp
      </Title>
      <Text color='light' className='!text-[#00000]'>
        A website to check if a specific website is up and functioning...{" "}
      </Text>
    </div>
  );
};
