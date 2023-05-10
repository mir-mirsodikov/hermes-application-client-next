export function Footer() {
  return (
    <footer className='flex p-4 justify-center'>
      <p className='text-gray-500 text-sm'>
        Built by <a href='https://github.com/mir-mirsodikov' className='underline underline-offset-2 decoration-2'>mir-mirsodikov</a> &middot;{' '}
        Hosted on <a href='https://vercel.com' className='underline underline-offset-2 decoration-2'>Vercel</a> &middot;{' '}
        Graphics by <a href='https://popsy.co' className='underline underline-offset-2 decoration-2'>Popsy</a> &middot;{' '}
        Code on GitHub <a href='https://github.com/mir-mirsodikov/hermes-application-client-next' className='underline underline-offset-2 decoration-2'>GitHub</a>
       </p>
    </footer>
  );
}