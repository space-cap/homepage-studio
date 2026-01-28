"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent blur-3xl opacity-50" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                프로젝트 수주 가능
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 dark:text-slate-50">
                                전문 개발자가 만드는 <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600">
                                    당신만의 홈페이지
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Homepage Studio는 차별화된 브랜드를 위한 프리미엄 웹 개발 서비스를 제공합니다.
                                감각적인 디자인, 압도적인 성능, 그리고 SEO 최적화까지 한 번에 경험하세요.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-primary/20 transition-all" asChild>
                                <Link href="#contact">
                                    무료 상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
                                <Link href="#portfolio">포트폴리오 보기</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Next.js 15</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>TypeScript</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>SEO 최적화</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        className="flex-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-3xl" />

                        {/* 3D Illustration Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl">
                            <Image
                                src="/images/hero-illustration.png"
                                alt="Digital Workspace Illustration"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating Elements / Decor */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-background rounded-xl p-4 shadow-xl border border-border"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">98</div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">Performance</div>
                                        <div className="font-bold text-sm">Excellent</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-xl border border-border"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">Active Clients</div>
                                        <div className="font-bold text-sm">120+ Happy</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </motion.div>
        </section>
    );
}
