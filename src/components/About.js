import suju from '../assets/suju.jpg';

const values = [
    { number: '01', title: 'Teamwork', description: 'We communicate, support each other, and improve together.' },
    { number: '02', title: 'Discipline', description: 'We put in focused practice and learn from every match.' },
    { number: '03', title: 'Competition', description: 'We bring energy, respect, and a drive to get better.' },
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 bg-neutral-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
                <div className="flex items-center justify-center">
                    <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-red-500/30 bg-black shadow-[0_0_80px_rgba(239,68,68,0.12)] sm:h-72 sm:w-72 lg:h-96 lg:w-96">
                        <div aria-hidden="true" className="absolute inset-4 rounded-full border border-white/10" />
                        <img src={suju} alt="Dragon Esports team logo" className="relative h-4/5 w-4/5 object-contain" />
                    </div>
                </div>

                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">Who we are</p>
                    <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        More than a <span className="text-red-500">team.</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                        Dragon Esports is built around the belief that great results come from trust, practice, and a shared goal. We keep learning, compete with purpose, and aim to make every match count.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                        {values.map((value) => (
                            <article key={value.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-red-500/40 hover:bg-white/[0.05]">
                                <p className="text-sm font-black tracking-widest text-red-400">{value.number}</p>
                                <h3 className="mt-3 font-bold text-white">{value.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-400">{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}