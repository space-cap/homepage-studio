import { Badge } from "@/components/ui/badge";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Supabase", "Vercel",
    "Framer Motion", "Stripe", "Sanity CMS", "Three.js"
];

export function TechStack() {
    return (
        <section className="py-16 bg-background border-y border-border">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                    최신 기술 스택 기반
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
                    {technologies.map((tech) => (
                        <span key={tech} className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600 select-none">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
