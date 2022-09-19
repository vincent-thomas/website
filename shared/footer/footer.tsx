import { Button, Link, Title } from "@lib/components";

export const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='max-w-max-w mx-auto p-8 py-12 flex md:flex-row justify-between flex-col gap-space md:text-left text-center md:align-left align-center'>
        <div>
          <Title size='large' color='dark'>
            Snacka? Gör det här då!
          </Title>
          <Link type='not-styled' to='mailto:vincent.nathan.thomas@gmail.com'>
            <Button type='primary' className='border-none'>
              Kontakta mig här!
            </Button>
          </Link>
        </div>
        <div className='flex'>
          <img
            src='/face.png'
            alt=''
            height='300'
            width='300'
            className='mx-auto rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};
