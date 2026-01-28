import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "네온 E-커머스",
        description: "몰입감 넘치는 3D 상품 미리보기를 제공하는 미래지향적 쇼핑 플랫폼입니다.",
        tags: ["Next.js", "Three.js", "Stripe"],
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "테크 에이전시 허브",
        description: "깔끔하고 미니멀한 인터페이스로 디지털 트랜스포메이션을 선도합니다.",
        tags: ["React", "Tailwind", "Framer Motion"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "SaaS 대시보드",
        description: "데이터 시각화와 다크 모드를 지원하는 실시간 분석 대시보드입니다.",
        tags: ["Next.js", "Recharts", "Supabase"],
        color: "from-emerald-500 to-green-500"
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4">Our Work</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 프로젝트</h2>
                        <p className="text-muted-foreground text-lg">
                            최근 진행한 프로젝트를 확인해보세요.
                            우리는 높은 퀄리티와 퍼포먼스를 자랑하는 웹 애플리케이션을 만듭니다.
                        </p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex">
                        전체 프로젝트 보기 <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group border-border/50 hover:border-primary/50 transition-colors">
                            {/* Placeholder Image Area */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Case Study
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline">
                        View All Projects <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
