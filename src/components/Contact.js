import { useState } from 'react';
import { Link } from 'react-scroll';
import shrestha from '../assets/shrestha.jpg';

const inputClasses =
    'min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

export default function Contact() {
    const [notice, setNotice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setNotice('This form is currently a front-end demo and is not connected to an email service yet. Connect a backend or form service to receive messages.');
    };

    return (
        <section id="contact" className="scroll-mt-20 grid w-full grid-cols-1 bg-neutral-950 text-white md:grid-cols-2">
            <div className="relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-[38rem]">
                <img src={shrestha} alt="Dragon Esports" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-950/70" />
            </div>

            <div className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-10 md:py-16 lg:px-16">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">Get in touch</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Contact <span className="text-red-500">Dragon</span></h2>
                <p className="mt-4 max-w-lg leading-7 text-gray-300">For team enquiries, registration, or partnership ideas, send us a message.</p>

                <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg space-y-4">
                    <div>
                        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">Name</label>
                        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required className={inputClasses} />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">Email address</label>
                        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={inputClasses} />
                    </div>
                    <div>
                        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="contact-message" name="message" placeholder="How can we help?" rows={5} required className={`${inputClasses} resize-y`} />
                    </div>
                    <button type="submit" className="min-h-12 rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                        Send message
                    </button>
                    {notice && <p role="status" className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-sm leading-6 text-amber-100">{notice}</p>}
                </form>
                <Link to="home" smooth duration={450} className="mt-6 w-fit cursor-pointer text-sm text-gray-400 underline-offset-4 hover:text-white hover:underline">Back to top ↑</Link>
            </div>
        </section>
    );
}