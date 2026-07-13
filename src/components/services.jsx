import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Lead Generation",
        description: "We help you reach your ideal customers and generate qualified leads with conversion rates of up to 60%.",
        tag: "Lead Gen",
        size: "col-span-1 md:col-span-2",
        delay: 0.1,
    },
    {
        title: "Web Development",
        description: "We design and develop modern, high converting websites, delivered within 5 working days.",
        tag: "Web Development",
        size: "col-span-1 border-white/5 group-hover:border-[#D4AF37]/30",
        delay: 0.2,
    },
    {
        title: "Content Production & Strategy",
        description: "We create premium content and growth strategies designed to deliver organic results within 60 days.",
        tag: "Content Production & Strategy",
        size: "col-span-1 border-white/5",
        delay: 0.3,
    },
    {
        title: "Business Launch & Growth",
        description: "From business registration to branding, marketing, and sales, we help you launch and scale your business from the ground up.",
        tag: "Business Launch & Growth",
        size: "col-span-1 md:col-span-2",
        delay: 0.4,
    },
];

function ServiceCard({ service }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className={`group relative rounded-2xl border border-white/5 bg-black/50 backdrop-blur-md overflow-hidden ${service.size}`}
            whileHover={{ y: -5 }}
        >
            {/* Tech Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            {/* Spotlight Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-[#D4AF37]/[0.08] to-transparent -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-[50%] transition-all duration-[1.5s] ease-in-out pointer-events-none z-0" />

            <div className="relative z-20 p-8 md:p-10 flex flex-col justify-between h-full bg-gradient-to-br from-white/[0.03] to-transparent">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
                        </span>
                        <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-bold uppercase font-mono">
                            // {service.tag}
                        </span>
                    </div>
                    <h3 className="mt-2 text-3xl md:text-4xl font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                        {service.title}
                    </h3>
                    <p className="mt-5 text-gray-400 leading-relaxed max-w-[280px] font-light text-sm md:text-base">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function ServiceSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax values for the background elements
    const yGrid = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section id="services" ref={containerRef} className="bg-[#030303] py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Futuristic Grid Background with Parallax */}
            <motion.div
                style={{ y: yGrid }}
                className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
            </motion.div>

            {/* Floating Orbs with Scroll Parallax */}
            <motion.div
                style={{ y: yOrb1 }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none z-0"
            />
            <motion.div
                style={{ y: yOrb2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-900/10 blur-[150px] rounded-full pointer-events-none z-0"
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-24 relative pl-4 md:pl-0 border-l border-white/5 md:border-none">
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "120px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-8 absolute -left-4 md:-left-12 top-2 hidden md:block"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3cb69] to-[#ffffff] italic">Services.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 text-gray-400 max-w-xl text-lg font-light leading-relaxed md:border-l md:border-white/10 md:pl-6"
                    >
                        By intertwining modern design aesthetics with cutting-edge technology, we build robust digital ecosystems designed for massive scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}