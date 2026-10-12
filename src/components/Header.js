import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import suju from '../assets/suju.jpg';

const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Sponsors', to: 'sponsors' },
    { label: 'Contact', to: 'contact' },
];

const linkClasses =
    'cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        const closeOnOutsideClick = (event) => {
            if (
                !menuRef.current?.contains(event.target) &&
                !menuButtonRef.current?.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };
        const desktopQuery = window.matchMedia('(min-width: 768px)');
        const closeOnDesktop = (event) => {
            if (event.matches) setMenuOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        document.addEventListener('pointerdown', closeOnOutsideClick);
        desktopQuery.addEventListener('change', closeOnDesktop);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', closeOnEscape);
            document.removeEventListener('pointerdown', closeOnOutsideClick);
            desktopQuery.removeEventListener('change', closeOnDesktop);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/10 bg-black/95 px-4 backdrop-blur-xl sm:h-20 sm:px-6 lg:px-10">
                <a href="#home" aria-label="Dragon Esports home" className="flex h-12 w-20 shrink-0 items-center sm:h-14 sm:w-24">
                    <img src={suju} alt="Dragon Esports logo" className="h-full w-full object-contain" />
                </a>

                <nav aria-label="Main navigation" className="hidden md:block">
                    <ul className="flex items-center gap-1 lg:gap-3">
                        {navItems.map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} smooth duration={450} className={linkClasses}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        to="contact"
                        smooth
                        duration={450}
                        className="hidden cursor-pointer rounded-lg bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:inline-flex"
                    >
                        Register
                    </Link>
                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:hidden"
                    >
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                    </button>
                </div>
            </header>

            {menuOpen && (
                <nav
                    ref={menuRef}
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="fixed inset-x-0 top-0 z-50 flex max-h-[100dvh] min-h-[55dvh] flex-col justify-between overflow-y-auto rounded-b-3xl border-b border-white/10 bg-slate-950/95 px-5 pb-8 pt-5 text-white shadow-2xl backdrop-blur-2xl md:hidden"
                >
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeMenu}
                            aria-label="Close navigation menu"
                            className="flex h-11 w-11 items-center justify-center rounded-full text-3xl text-white/80 transition hover:bg-white/10 hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                        >
                            &times;
                        </button>
                    </div>

                    <ul className="flex flex-col items-center gap-3 py-6 text-xl font-semibold">
                        {navItems.map(({ label, to }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    smooth
                                    duration={450}
                                    onClick={closeMenu}
                                    className="block cursor-pointer rounded-xl px-8 py-3 transition hover:bg-white/10 hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="contact"
                        smooth
                        duration={450}
                        onClick={closeMenu}
                        className="mx-auto w-full max-w-xs cursor-pointer rounded-xl bg-red-500 px-6 py-3 text-center font-bold text-white transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                        Register
                    </Link>
                </nav>
            )}
        </>
    );
}