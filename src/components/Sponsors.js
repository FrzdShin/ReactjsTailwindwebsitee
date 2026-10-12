import { Link } from 'react-scroll';

export default function Sponsors() {
    return (
        <section id="sponsors" className="scroll-mt-20 bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-7 text-center sm:p-12 lg:p-16">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">Our partners</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Let’s win together.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                    Interested in supporting Dragon Esports? We’re open to partnerships that share our passion for gaming, teamwork, and competition.
                </p>
                <Link
                    to="contact"
                    smooth
                    duration={450}
                    className="mt-8 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                    Discuss a Partnership
                </Link>
            </div>
        </section>
    );
}