import { Button, Link, Text, Title } from "@lib/components";

export const ProjectPureForms = () => {
  return (
    <div className='border-2 border-black rounded p-4 bg-[#212F45] w-full flex flex-col gap-2'>
      <div className='flex flex-row justify-between'>
        <Title color='dark' size='medium'>
          PureForms
        </Title>
        <img src='https://pureforms.net/favicon.png' alt='' width='50' />
      </div>
      <Text color='light'>
        PureForms is a alternative to TypeForms. It is more focused on
        developers providing sdks and api&apos;s for public use.
      </Text>
      <div className='ml-auto mt-auto  flex gap-4'>
        <Link type='not-styled' to='https://pureforms.net' external>
          <Button
            type='secondary'
            className=' text-gray-100 !outline-gray-100 !p-4'
          >
            Visit
          </Button>
        </Link>
        <Link type='not-styled' to='https://docs.pureforms.net'>
          <Button
            type='secondary'
            className=' text-gray-100 !outline-gray-100 !p-4'
          >
            Docs
          </Button>
        </Link>
      </div>
    </div>
  );
};
