import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = ({ children }) => {
    return (
        //md: é quando a tela atinge o tamanho médio (sai do mobile)
        <header className="flex justify-center md: justify-between py-2 md:py-4 items-center">
            <Image src="/img/logo.svg" alt="Logo" width={150} height={33}/>
        
            {/* quando a tela for pequena é hidden, quando atingir tamanho médio é display block ao invés de none */}
            <nav className="hidden md:block space-x-8">
                <Link href="/nextjs">
                    <a className="tracking-wide hover:text-gray-300 transition">
                        Next.js
                    </a>
                </Link>
                <Link href="/tailwind">
                    <a className="tracking-wide hover:text-gray-300 transition">
                        Tailwind
                    </a>
                </Link>
                <Link href="/framermotion">
                    <a className="tracking-wide hover:text-gray-300 transition">
                        Framer Motion
                    </a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;