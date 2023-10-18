import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
	return (
		<div className='w-full h-screen'>
			<header>
				<Navbar />
			</header>
		</div>
	)
}
