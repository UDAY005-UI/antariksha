'use client';
import { useRef, useState, memo } from "react";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "../components/UseNavigate";

gsap.registerPlugin(ScrollTrigger);

type RowItem = {
    title: string;
    subtitle: string;
    maskTitle: string;
    maskSubtitle: string;
};

const IS_MOUSE =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const HoverRow = memo(function HoverRow({
    title,
    subtitle,
    maskTitle,
    maskSubtitle,
    align = "left",
}: RowItem & { align?: "left" | "right" }) {
    const [hovered, setHovered] = useState(false);
    const textClass = `w-full ${align === "right" ? "lg:pr-60 lg:pl-[40%] pr-6 pl-6 text-end" : "px-6 lg:px-60"}`;

    return (
        <div
            className="flex-1 flex items-center border-b border-neutral-800 relative overflow-hidden cursor-pointer"
            onMouseEnter={() => { if (IS_MOUSE) setHovered(true); }}
            onMouseLeave={() => { if (IS_MOUSE) setHovered(false); }}
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
});

const tuhinRows: RowItem[] = [
    { title: "Tuhin Adhikary", subtitle: "Founder", maskTitle: "The Eye", maskSubtitle: "Visionary behind" },
    { title: "Video Editing", subtitle: "Crafting seamless visual flow", maskTitle: "Visual Rhythm", maskSubtitle: "Balancing pacing, emotion, and impact" },
    { title: "Cinematography", subtitle: "Capturing stories through visuals", maskTitle: "Visual Direction", maskSubtitle: "Shaping mood with light and framing" },
    { title: "Visual Storytelling", subtitle: "Building narratives through imagery", maskTitle: "Narrative Design", maskSubtitle: "Turning moments into cinematic expression" },
    { title: "Content Creation", subtitle: "Designing engaging digital content", maskTitle: "Digital Storycraft", maskSubtitle: "Creating visuals meant to connect and perform" },
];

const annyeshaRows: RowItem[] = [
    { title: "Annyesha Saha", subtitle: "Founding member", maskTitle: "The Voice", maskSubtitle: "Core member" },
    { title: "Agency representative", subtitle: "Representing the agency with professionalism and clarity.", maskTitle: "Brand representation", maskSubtitle: "Reflecting the agency's identity and vision" },
    { title: "Public relations", subtitle: "Building strong public image and meaningful connections", maskTitle: "Media relations", maskSubtitle: "Building image and audience trust" },
    { title: "Communication and outreach lead", subtitle: "Leading engagement, collaborations, and audience outreach", maskTitle: "Engagement and outreach", maskSubtitle: "Creating connections and expanding reach" },
    { title: "Coordination and planning", subtitle: "Managing schedules, workflows, and seamless execution", maskTitle: "Strategic coordination", maskSubtitle: "Managing flow, timelines, and execution" },
];

const dipangshuRows: RowItem[] = [
  {
    title: "Dipangshu Dey",
    subtitle: "Founding member",
    maskTitle: "The Strategist",
    maskSubtitle: "Core member"
  },
  {
    title: "Social Media Managing",
    subtitle: "Building audience engagement",
    maskTitle: "Growth Through Strategy",
    maskSubtitle: "Shaping consistency across every platform"
  },
  {
    title: "Videography",
    subtitle: "Capturing stories through motion",
    maskTitle: "Frames with Purpose",
    maskSubtitle: "Turning visuals into lasting impressions"
  },
  {
    title: "Poster Making",
    subtitle: "Designing impactful visuals",
    maskTitle: "Design Beyond Aesthetics",
    maskSubtitle: "Creating graphics that communicate instantly"
  },
  {
    title: "Editing",
    subtitle: "Refining visual narratives",
    maskTitle: "Cuts with Precision",
    maskSubtitle: "Enhancing rhythm, clarity, and emotion"
  },
];

const udayRows: RowItem[] = [
  {
    title: "Uday Senapati",
    subtitle: "Founding member",
    maskTitle: "The Architect",
    maskSubtitle: "Core member"
  },
  {
    title: "Modern Web Experiences",
    subtitle: "Creating immersive digital interaction",
    maskTitle: "Experiences that Engage",
    maskSubtitle: "Blending motion, design, and functionality"
  },
  {
    title: "Web Development",
    subtitle: "Building scalable web systems",
    maskTitle: "Code with Purpose",
    maskSubtitle: "Engineered for performance and reliability"
  },
  {
    title: "UI/UX Design",
    subtitle: "Designing intuitive user journeys",
    maskTitle: "Design that Connects",
    maskSubtitle: "Interfaces shaped around human interaction"
  },
  {
    title: "Digital Branding",
    subtitle: "Crafting modern brand identity",
    maskTitle: "Brands with Presence",
    maskSubtitle: "Visual systems built to leave impact"
  },
];

export default function Team() {
    const maskedHero = useRef<HTMLDivElement>(null);
    const maskedContact = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const firedRef = useRef([false, false, false, false, false]);

    const tuhinRowsRef = useRef<HTMLDivElement>(null);
    const annyeshaRowsRef = useRef<HTMLDivElement>(null);
    const dipangshuRowsRef = useRef<HTMLDivElement>(null);
    const udayRowsRef = useRef<HTMLDivElement>(null);

    const tuhinImgRef = useRef<HTMLImageElement>(null);
    const annyeshaImgRef = useRef<HTMLImageElement>(null);
    const dipangshuImgRef = useRef<HTMLImageElement>(null);
    const udayImgRef = useRef<HTMLImageElement>(null);

    const contactAccent = useRef<HTMLDivElement>(null);
    const contactTag = useRef<HTMLParagraphElement>(null);
    const contactHeading = useRef<HTMLHeadingElement>(null);
    const contactLinks = useRef<HTMLDivElement>(null);

    function animatePanel(
        rowsEl: HTMLDivElement | null,
        imgEl: HTMLImageElement | null,
    ) {
        if (!rowsEl) return;
        const rows = rowsEl.querySelectorAll<HTMLElement>(".panel-row");

        if (imgEl) {
            imgEl.style.willChange = "transform, opacity";
            gsap.fromTo(imgEl,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 0.5,
                    duration: 2.2,
                    ease: "power3.out",
                    onComplete: () => { imgEl.style.willChange = "auto"; },
                }
            );
        }

        rows.forEach(r => { (r as HTMLElement).style.willChange = "transform, opacity"; });

        gsap.fromTo(rows,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.6,
                ease: "power4.out",
                stagger: { each: 0.22, from: "start" },
                onComplete: () => {
                    rows.forEach(r => { (r as HTMLElement).style.willChange = "auto"; });
                },
            }
        );
    }

    function animateContact() {
        gsap.fromTo(contactAccent.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.4, ease: "expo.out", transformOrigin: "left center" }
        );
        gsap.fromTo(contactTag.current,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.3, ease: "power3.out", delay: 0.3 }
        );
        gsap.fromTo(contactHeading.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.8, ease: "power4.out", delay: 0.55 }
        );
        const links = contactLinks.current?.querySelectorAll<HTMLElement>(".cta-link");
        if (links?.length) {
            gsap.fromTo(links,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2, delay: 1.0 }
            );
        }
    }

    function handleScrollProgress(progress: number) {
        const step = 1 / 5;
        const fired = firedRef.current;

        if (!fired[0] && progress >= step * 0.85) {
            fired[0] = true;
            animatePanel(tuhinRowsRef.current, tuhinImgRef.current);
        }
        if (!fired[1] && progress >= step * 1.85) {
            fired[1] = true;
            animatePanel(annyeshaRowsRef.current, annyeshaImgRef.current);
        }
        if (!fired[2] && progress >= step * 2.85) {
            fired[2] = true;
            animatePanel(dipangshuRowsRef.current, dipangshuImgRef.current);
        }
        if (!fired[3] && progress >= step * 3.85) {
            fired[3] = true;
            animatePanel(udayRowsRef.current, udayImgRef.current);
        }
        if (!fired[4] && progress >= step * 4.85) {
            fired[4] = true;
            animateContact();
        }
    }

    const contactInnerCls = "relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20";
    const navigate = useNavigate();
    
    return (
        <main>
            <SmoothScroll />

            <StackScroll stackRef={stackRef} onScrollProgress={handleScrollProgress}>

                <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
                    <Image
                        src="/members.png"
                        alt="members"
                        fill
                        priority
                        className="hidden md:block -z-10 object-cover object-[center_30%]"
                    />
                    <Image
                        src="/member.png"
                        alt="member"
                        fill
                        priority
                        className="block md:hidden -z-10 object-cover"
                    />

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
                    <Image
                        ref={tuhinImgRef}
                        src="/tuhin.png"
                        alt="Tuhin"
                        width={500}
                        height={500}
                        priority
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 pointer-events-none w-90 lg:w-[500px] h-auto"
                        style={{ opacity: 0 }}
                    />
                    <div ref={tuhinRowsRef} className="w-full h-full flex flex-col">
                        {tuhinRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="left" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image
                        ref={annyeshaImgRef}
                        src="/annyesha.png"
                        alt="Annyesha"
                        width={400}
                        height={400}
                        className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 pointer-events-none w-full sm:w-[55vw] lg:w-140 h-auto"
                        style={{ opacity: 0 }}
                    />
                    <div ref={annyeshaRowsRef} className="w-full h-full flex flex-col">
                        {annyeshaRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="right" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image
                        ref={dipangshuImgRef}
                        src="/dipangshu.png"
                        alt="Dipangshu"
                        width={400}
                        height={400}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 pointer-events-none w-90 lg:w-100 h-auto"
                        style={{ opacity: 0 }}
                    />
                    <div ref={dipangshuRowsRef} className="w-full h-full flex flex-col">
                        {dipangshuRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="left" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image
                        ref={udayImgRef}
                        src="/uday.png"
                        alt="Uday"
                        width={400}
                        height={400}
                        className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 pointer-events-none w-full sm:w-[55vw] lg:w-140 h-auto"
                        style={{ opacity: 0 }}
                    />
                    <div ref={udayRowsRef} className="w-full h-full flex flex-col">
                        {udayRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="right" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center overflow-hidden">
                    <div className={contactInnerCls}>
                        <div
                            ref={contactAccent}
                            className="w-10 h-[2px] bg-orange-500 mb-6"
                            style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
                        />
                        <p
                            ref={contactTag}
                            data-cursor="expand"
                            className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
                            style={{ opacity: 0, transform: "translateY(28px)" }}
                        >
                            GET STARTED
                        </p>
                        <h1
                            ref={contactHeading}
                            data-cursor="expand"
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-10 max-w-[900px]"
                            style={{ opacity: 0, transform: "translateY(60px)" }}
                        >
                            We design and build digital experiences that feel effortless,
                            intentional, and quietly powerful.
                        </h1>
                        <div
                            ref={contactLinks}
                            data-cursor="expand"
                            style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
                        >
                            <div
                                onClick={() => navigate("/work")}
                                className="cta-link cursor-pointer hover:opacity-70 transition-opacity duration-300"
                                style={{ opacity: 0, transform: "translateY(24px)" }}
                            >
                                See our work →
                            </div>
                            <div
                                onClick={() => navigate("/contact")}
                                className="cta-link cursor-pointer hover:opacity-70 transition-opacity duration-300"
                                style={{ opacity: 0, transform: "translateY(24px)" }}
                            >
                                Contact us →
                            </div>
                        </div>
                    </div>

                    <div
                        ref={maskedContact}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
                    >
                        <div className={contactInnerCls}>
                            <div className="w-10 h-[2px] bg-[#0D0C0B] mb-6" />
                            <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#0D0C0B]">
                                GET STARTED
                            </p>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-10 max-w-[900px]">
                                We craft visuals that hit and don&apos;t fade out — sharp,
                                intentional work that people remember.
                            </h1>
                            <div
                                style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
                            >
                                <div onClick={() => navigate("/work")} className="cursor-pointer hover:opacity-70 text-black">Explore work →</div>
                                <div onClick={() => navigate("/contact")} className="cursor-pointer hover:opacity-70 text-black">Get in touch →</div>
                            </div>
                        </div>
                    </div>
                </section>

            </StackScroll>
        </main>
    );
}