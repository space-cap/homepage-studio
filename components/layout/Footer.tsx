import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Wand2 className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-bold text-lg">
                                Homepage<span className="text-primary">Studio</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            비즈니스와 크리에이터를 위한 전문 웹 개발 서비스.
                            최신 기술로 제작된 빠르고 SEO 친화적인 웹사이트를 경험하세요.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                                <Link href="#" aria-label="GitHub">
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                                <Link href="#" aria-label="Twitter">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                                <Link href="#" aria-label="LinkedIn">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">서비스</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">웹 개발</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">UI/UX 디자인</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">SEO 최적화</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">유지보수</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">회사</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">소개</Link></li>
                            <li><Link href="#portfolio" className="hover:text-primary transition-colors">포트폴리오</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">채용</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">문의하기</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">문의</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>hello@homepagestudio.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                {/* Placeholder for phone or other contact info */}
                                <span>Seoul, South Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Homepage Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
