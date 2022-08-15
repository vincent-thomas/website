import { Text, Title } from "@lib/components";

export const ProjectPureForms = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#212F45] w-full flex flex-col gap-2'>
      <div className='flex flex-row justify-between'>
        <Title color='dark' size='medium'>
          PureForms
        </Title>
        <img src='https://pureforms.net/favicon.png' alt='' width='50' />
      </div>
      <Text color='light'>PureForms is a alternative to TypeForms</Text>
    </div>
  );
};
