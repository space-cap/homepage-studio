import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "베이직",
        price: "₩500,000",
        description: "개인 포트폴리오나 소규모 랜딩 페이지에 적합합니다.",
        features: [
            "최대 5페이지",
            "반응형 디자인",
            "기본 SEO 설정",
            "문의 폼",
            "1개월 유지보수"
        ],
        popular: false
    },
    {
        name: "프로페셔널",
        price: "₩1,500,000",
        description: "성장하는 비즈니스를 위한 강력한 온라인 입지 구축.",
        features: [
            "최대 10페이지",
            "커스텀 디자인 시스템",
            "CMS 연동",
            "고급 SEO 최적화",
            "구글 애널리틱스 연동",
            "3개월 유지보수"
        ],
        popular: true
    },
    {
        name: "엔터프라이즈",
        price: "협의",
        description: "대규모 애플리케이션을 위한 맞춤형 솔루션.",
        features: [
            "페이지 수 무제한",
            "커스텀 기능 개발",
            "API 연동",
            "데이터베이스 설계",
            "결제 시스템 연동",
            "6개월 유지보수"
        ],
        popular: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">합리적인 요금제</h2>
                    <p className="text-muted-foreground text-lg">
                        투명한 가격 정책. 숨겨진 비용 없이 필요한 플랜을 선택하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col relative ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    인기 플랜
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "협의" && <span className="text-muted-foreground">/건</span>}
                                </div>
                                <CardDescription className="mt-2">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                    시작하기
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
