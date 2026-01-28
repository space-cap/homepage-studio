import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Search, Zap, Layout, ShieldCheck, Code2 } from "lucide-react";

const features = [
    {
        icon: Smartphone,
        title: "완벽한 반응형",
        description: "데스크톱부터 태블릿, 모바일까지 모든 디바이스에서 최적화된 사용자 경험을 제공합니다."
    },
    {
        icon: Search,
        title: "SEO 최적화",
        description: "검색엔진에 내 사이트가 더 잘 노출되도록 메타태그와 구조화 데이터를 기본 적용합니다."
    },
    {
        icon: Zap,
        title: "압도적인 속도",
        description: "Next.js 기반의 최적화된 성능으로 즉각적인 로딩과 부드러운 페이지 전환을 보장합니다."
    },
    {
        icon: Layout,
        title: "CMS 연동",
        description: "Strapi, Sanity, WordPress 등 원하는 CMS를 연동하여 손쉽게 콘텐츠를 관리할 수 있습니다."
    },
    {
        icon: ShieldCheck,
        title: "보안 및 유지보수",
        description: "HTTPS 보안 연결 기본 적용과 정기적인 업데이트로 안전한 사이트를 운영합니다."
    },
    {
        icon: Code2,
        title: "커스텀 기능 개발",
        description: "비즈니스 요구사항에 딱 맞는 맞춤형 기능을 구현해 드립니다."
    }
];

export function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4" variant="secondary">Why Choose Us</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 성장을 위한 모든 것</h2>
                    <p className="text-muted-foreground text-lg">
                        단순한 웹사이트가 아닙니다. 고객 유입과 비즈니스 성장을 돕는 강력한 디지털 도구를 만듭니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
