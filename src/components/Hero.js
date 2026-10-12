import { Link } from 'react-scroll';
import sujata from '../assets/sujata.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="grid min-h-[calc(100dvh_-_4rem)] grid-cols-1 overflow-hidden bg-black md:min-h-[calc(100dvh_-_5rem)] md:grid-cols-2"
        >
            <div className="relative z-10 flex flex-col items-start justify-center px-6 py-16 sm:px-10 md:px-8 lg:px-14 xl:px-20">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-300 sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-red-500" /> Built to compete
                </p>
                <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    DRAGON <span className="text-red-500">ESPORTS</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                    Skill, strategy, and teamwork. We show up to compete, learn, and push each other to the next level.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        to="about"
                        smooth
                        duration={450}
                        className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                        Discover Our Team
                    </Link>
                    <Link
                        to="sponsors"
                        smooth
                        duration={450}
                        className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>

            <div className="relative min-h-[19rem] sm:min-h-[26rem] md:min-h-0">
                <img src={sujata} alt="Dragon Esports" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 md:bg-gradient-to-r md:from-black md:via-black/10 md:to-transparent" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent md:hidden" />
            </div>
        </section>
    );
}