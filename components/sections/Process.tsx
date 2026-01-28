import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "상담 및 기획",
        description: "목표, 타겟 고객, 요구사항을 상세히 파악하여 구체적인 로드맵을 수립합니다.",
        duration: "1-2일"
    },
    {
        number: "02",
        title: "디자인",
        description: "브랜드 아이덴티티를 살린 매력적인 UI/UX 디자인과 와이어프레임을 제작합니다.",
        duration: "3-5일"
    },
    {
        number: "03",
        title: "개발",
        description: "최신 기술 스택을 활용하여 디자인을 깔끔하고 효율적인 코드로 구현합니다.",
        duration: "7-14일"
    },
    {
        number: "04",
        title: "배포 및 인수인계",
        description: "서버에 사이트를 배포하고 직접 관리하실 수 있도록 운영 가이드를 제공합니다.",
        duration: "1-2일"
    }
];

export function Process() {
    return (
        <section id="process" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 sticky top-24">
                            투명하고 체계적인 <br />
                            <span className="text-primary">제작 프로세스</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 md:sticky md:top-48">
                            명확한 커뮤니케이션과 단계별 마일스톤을 통해
                            기획부터 런칭까지 확실한 결과물을 약속드립니다.
                        </p>
                    </div>

                    <div className="md:w-2/3 space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Mobile Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border md:hidden" />

                                <Card className="relative overflow-hidden border-l-4 border-l-primary md:border-l-border hover:border-l-primary transition-colors">
                                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-muted/20 select-none z-0">
                                        {step.number}
                                    </div>
                                    <CardContent className="p-8 relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                                                {step.duration}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
