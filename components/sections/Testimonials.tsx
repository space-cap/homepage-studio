import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "김민지",
        role: "패션 브랜드 CEO",
        content: "Homepage Studio 덕분에 우리 브랜드의 온라인 이미지가 확 바뀌었습니다. 사이트 속도도 정말 빠르고, 런칭 후 매출이 40%나 올랐어요.",
        avatar: "KM"
    },
    {
        name: "이준호",
        role: "테크 스타트업 창업자",
        content: "디테일에 대한 집요함이 인상적이었습니다. 우리가 상상했던 비전을 완벽하게 구현해주었고, 기대 이상의 퀄리티를 보여주었습니다.",
        avatar: "LJ"
    },
    {
        name: "박서연",
        role: "갤러리 마케팅 이사",
        content: "기능만큼이나 디자인을 중요하게 생각하는데, 애니메이션이 정말 부드럽고 모바일 경험도 최고였습니다. 적극 추천합니다.",
        avatar: "PS"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    고객들의 <span className="text-primary">생생한 후기</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="bg-muted/20 border-border/50">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} />
                                        <AvatarFallback>{item.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">{item.role}</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic">
                                    "{item.content}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
