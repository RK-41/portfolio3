import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
	return (
		<Link href='/' className='text-xl md:text-5xl text-white font-semibold'>
			<Image
				src='/images/logo.svg'
				width={54}
				height={54}
				priority
				alt='logo'
				className='rounded-[4px]'
			/>
		</Link>
	);
};

export default Logo;
