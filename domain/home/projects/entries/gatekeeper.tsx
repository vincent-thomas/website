import { Text, Title } from "@lib/components";

export const GatekeeperProject = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#2591B4] flex flex-col gap-2 justify-right text-right md:mb-8 relative md:right-2 md:w-max'>
      <Title size='medium' className='!text-[#00000]'>
        GateKeeper
      </Title>
      <Text color='light' className='!text-[#00000]'>
        A simple link-shortener built with remix and redis{" "}
      </Text>
    </div>
  );
};
