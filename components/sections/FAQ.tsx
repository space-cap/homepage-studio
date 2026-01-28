import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "웹사이트 제작 기간은 얼마나 걸리나요?",
        answer: "프로젝트 복잡도에 따라 다르지만, 기본 랜딩 페이지는 1-2주, 복잡한 기능이 포함된 사이트는 4-8주 정도 소요됩니다. 초기 상담 시 상세한 일정을 안내해 드립니다."
    },
    {
        question: "호스팅과 도메인도 제공하나요?",
        answer: "Vercel, AWS 등의 호스팅 설정과 도메인 등록을 도와드립니다. 모든 계정은 고객님 명의로 생성하여 소유권을 확실히 보장해 드립니다."
    },
    {
        question: "결제 방식은 어떻게 되나요?",
        answer: "일반적으로 프로젝트 시작 시 50%의 착수금을 받고, 완료 후 최종 승인 시 나머지 50%를 결제합니다."
    },
    {
        question: "직접 콘텐츠를 수정할 수 있나요?",
        answer: "네, 가능합니다! Strapi나 Sanity 같은 CMS(콘텐츠 관리 시스템)를 연동하여 코드 지식 없이도 텍스트와 이미지를 쉽게 수정할 수 있도록 해드립니다."
    },
    {
        question: "유지보수 서비스도 제공하나요?",
        answer: "네, 사이트의 보안, 업데이트, 성능 최적화를 위한 지속적인 유지보수 패키지를 제공하고 있습니다."
    },
    {
        question: "모바일에서도 잘 보이나요?",
        answer: "물론입니다. 모바일 우선(Mobile-First) 방식으로 설계하여 스마트폰부터 태블릿, 데스크톱까지 모든 기기에서 완벽하게 작동합니다."
    }
];

export function FAQ() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
                    <p className="text-muted-foreground">
                        궁금한 점이 있으신가요? 자주 묻는 질문들을 모았습니다. <br />
                        찾으시는 답변이 없다면 언제든 문의해주세요.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
