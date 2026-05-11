'use client';
import { useRef, useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"

type RowItem = {
    title: string;
    subtitle: string;
    maskTitle: string;
    maskSubtitle: string;
};

const isMouse = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function HoverRow({ title, subtitle, maskTitle, maskSubtitle, align = "left" }: RowItem & { align?: "left" | "right" }) {

    const [hovered, setHovered] = useState(false);

    const textClass = `w-full ${align === "right" ? "lg:pr-60 lg:pl-[40%] pr-6 pl-6 text-end" : "px-6 lg:px-60"}`;

    return (
        <div
            className="flex-1 flex items-center border-b border-neutral-800 relative overflow-hidden cursor-pointer"
            onMouseEnter={() => { if (isMouse()) setHovered(true); }}
            onMouseLeave={() => { if (isMouse()) setHovered(false); }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#f97316",
                    transform: hovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "center",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 0,
                }}
            />
            <div className={`relative ${textClass}`}>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold opacity-0 pointer-events-none select-none">{title}</div>
                <div className="text-xs sm:text-sm opacity-0 pointer-events-none select-none">{subtitle}</div>
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    opacity: hovered ? 0 : 1,
                    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className={textClass}>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</div>
                    <div className="text-xs sm:text-sm">{subtitle}</div>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    transform: hovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "center",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className={textClass}>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black">{maskTitle}</div>
                    <div className="text-xs sm:text-sm text-black/60">{maskSubtitle}</div>
                </div>
            </div>
        </div>
    );
}

const tuhinRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Cutting Frames,", maskSubtitle: "Crafting Stories" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Eyes Behind the Lens", maskSubtitle: "Light, Shadow, Motion" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Every Frame Speaks", maskSubtitle: "Without a Word" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Scroll-Stopping Work", maskSubtitle: "Made to Be Felt" },
];

const annyeshaRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Rhythm in the Cut", maskSubtitle: "Flow Over Perfection" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Framing the Unseen", maskSubtitle: "Vision Without Limits" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Stories That Linger", maskSubtitle: "Long After the Screen" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Raw. Real. Resonant.", maskSubtitle: "Audiences Remember" },
];

const dipangshuRows: RowItem[] = [
    {
        title: "Social Media Managing",
        subtitle: "Content Strategy",
        maskTitle: "Growth Through Strategy",
        maskSubtitle: "Consistent Branding"
    },
    {
        title: "Videography",
        subtitle: "Visual Storytelling",
        maskTitle: "Frames with Purpose",
        maskSubtitle: "Capture Emotion"
    },
    {
        title: "Poster Making",
        subtitle: "Graphic Design",
        maskTitle: "Design Beyond Aesthetics",
        maskSubtitle: "Strong Visual Impact"
    },
    {
        title: "Editing",
        subtitle: "Post Production",
        maskTitle: "Cuts with Precision",
        maskSubtitle: "Enhanced Narratives"
    }
];

const dishaRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Time Well Spent", maskSubtitle: "In Every Second" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Mood Over Method", maskSubtitle: "Feel It First" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Worlds Built", maskSubtitle: "From a Single Frame" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Authentic Always", maskSubtitle: "No Filter Needed" },
];

const udayRows: RowItem[] = [
    {
        title: "Modern Web Experiences",
        subtitle: "Interactive Digital Presence",
        maskTitle: "Experiences that Engage",
        maskSubtitle: "Built for Modern Brands"
    },
    {
        title: "Web Development",
        subtitle: "Full Stack Solutions",
        maskTitle: "Code with Purpose",
        maskSubtitle: "Scalable and Reliable Systems"
    },
    {
        title: "UI/UX Design",
        subtitle: "User-Centered Interfaces",
        maskTitle: "Design that Connects",
        maskSubtitle: "Clean and Intuitive Experiences"
    },
    {
        title: "Digital Branding",
        subtitle: "Visual Identity Systems",
        maskTitle: "Brands with Presence",
        maskSubtitle: "Built to Stand Out"
    }
];

export default function Team() {
    const maskedHero = useRef<HTMLDivElement>(null);
    const maskedContact = useRef<HTMLDivElement>(null);

    const router = useRouter()

    return (
        <main>
            <SmoothScroll />

            <StackScroll>

                <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay muted loop playsInline preload="auto"
                    >
                        <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 flex h-full items-end justify-center px-8 md:px-35 pb-20 sm:pb-16 md:pb-14">
                        <div data-cursor="expand" className="inline-flex flex-col">

                            <motion.p
                                className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold opacity-60 mb-1 sm:mb-2 text-left"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.1 }}
                            >
                                The Core Of
                            </motion.p>

                            <div className="flex">
                                {"ANTARIKSHA".split("").map((letter, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.span
                                            className="block font-black leading-none opacity-80"
                                            style={{ fontSize: "clamp(2rem, 9.5vw, 15rem)", letterSpacing: "0.05em", transformOrigin: "bottom" }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1], delay: 0 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div
                        ref={maskedHero}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-end justify-center px-8 md:px-35 pb-20 sm:pb-16 md:pb-14"
                    >
                        <div className="inline-flex flex-col">

                            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-black opacity-70 mb-1 sm:mb-2 text-left">
                                The Faces Behind
                            </p>

                            <div className="flex">
                                {"ANTARIKSHA".split("").map((letter, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <span
                                            className="block font-black leading-none text-black"
                                            style={{ fontSize: "clamp(2rem, 9.5vw, 15rem)", letterSpacing: "0.05em" }}
                                        >
                                            {letter}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <section data-cursor="none" className="bg-[#141414] stack-panel absolute inset-0 h-screen w-full flex flex-col overflow-hidden">
                    <Image src="/tuhin.png" alt="Tuhin" width={500} height={500} className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-40 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {tuhinRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image src="/annyesha.png" alt="Annyesha" width={400} height={400} className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 opacity-80 pointer-events-none w-full sm:w-[55vw] lg:w-[400px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {annyeshaRows.map((row) => (<HoverRow key={row.title} {...row} align="right" />))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image src="/dipangshu.png" alt="Dipangshu" width={400} height={400} className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-50 pointer-events-none w-full sm:w-[55vw] lg:w-[400px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {dipangshuRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image src="/disha.png" alt="Disha" width={500} height={500} className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 opacity-50 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {dishaRows.map((row) => (<HoverRow key={row.title} {...row} align="right" />))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image src="/uday.png" alt="Uday" width={500} height={500} className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-70 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {udayRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">
                    <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
                        <h1 data-cursor="expand" className="font-bold text-lg sm:text-2xl mb-4">
                            Ready to start your journey?
                        </h1>
                        <h1 data-cursor="expand" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-8 max-w-[900px]">
                            We design and build digital experiences...
                        </h1>
                        <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} data-cursor="expand" className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                            <div onClick={() => router.push("/work")} className="cursor-pointer hover:opacity-70">See our work →</div>
                            <div onClick={() => router.push("/contact")} className="cursor-pointer hover:opacity-70">Contact us →</div>
                        </div>
                    </div>
                    <div
                        ref={maskedContact}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
                    >
                        <div className="text-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
                            <div className="font-bold text-lg sm:text-2xl mb-4 text-[#0D0C0B]">
                                Want something people watch?
                            </div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-8 max-w-[900px]">
                                We craft visuals that hit and don&apos;t fade out...
                            </h1>
                            <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                                <div onClick={() => router.push("/work")} className="cursor-pointer hover:opacity-70">Explore work →</div>
                                <div onClick={() => router.push("/contact")} className="cursor-pointer hover:opacity-70">Get in touch →</div>
                            </div>
                        </div>
                    </div>
                </section>

            </StackScroll>
        </main>
    );
}