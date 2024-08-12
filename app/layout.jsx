import { Exo, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
const exo = Exo({ subsets: ['latin'] });

export const metadata = {
	title: 'Rajan Kumar',
	description: 'Portfolio of Rajan Kumar',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={exo.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
