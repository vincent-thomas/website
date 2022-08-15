import { Text, Title } from "@lib/components";

export const ProjectShorter = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#F76363] w-full flex flex-col gap-2 justify-right text-right md:w-[90%] md:h-[80%] md:mt-auto md:ml-2'>
      <Title size='medium' className='!text-[#00000]'>
        Shorter
      </Title>
      <Text color='light' className='!text-[#00000]'>
        A simple link-shortener built with remix and redis{" "}
      </Text>
    </div>
  );
};
