import { Link } from 'react-scroll';

const footerLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Sponsors', to: 'sponsors' },
    { label: 'Contact', to: 'contact' },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black px-5 py-8 text-white sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
                <div>
                    <a href="#home" className="text-lg font-black tracking-wide">DRAGON <span className="text-red-500">ESPORTS</span></a>
                    <p className="mt-1 text-sm text-gray-500">Built on teamwork. Driven by competition.</p>
                </div>
                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
                        {footerLinks.map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} smooth duration={450} className="cursor-pointer transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className="text-xs text-gray-600">© {new Date().getFullYear()} Dragon Esports</p>
            </div>
        </footer>
    );
}