import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <div className='grid justify-center'>
      <img
        src='https://placehold.co/250x250'
        className='rounded-full m-6'
        alt='Profile'
      />
      <h2>Owais Qureshi</h2>
      <h3>I am a FullStack Developer</h3>
      <Link
        to='https://www.fiverr.com/users/techlovers694/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit my Fiverr profile
      </Link>
    </div>
  );
};

export default Aboutme;
