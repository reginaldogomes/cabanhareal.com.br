import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Mariana S.",
      role: "Cliente desde 2023",
      avatar: "https://i.pravatar.cc/150?u=mariana",
      initials: "MS",
      content: "Eu sempre busco qualidade para as reuniões em família. O cordeiro da Cabanha Real é espetacular, desmancha na boca. Sensacional o cuidado na entrega!",
    },
    {
      id: 2,
      name: "Carlos T.",
      role: "Amante de Churrasco",
      avatar: "https://i.pravatar.cc/150?u=carlos",
      initials: "CT",
      content: "Além das carnes, comprei uma manta pra minha esposa. Incrível a qualidade e a maciez. O site transmite exatamente a paz que a marca vende.",
    },
    {
      id: 3,
      name: "Fernanda L.",
      role: "Arquiteta",
      avatar: "https://i.pravatar.cc/150?u=fernanda",
      initials: "FL",
      content: "A Cadeira de Balanço virou o charme da minha sala. Perfeita! Atendimento nota 10 e tudo muito bem embalado. Recomendo muito.",
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A satisfação em levar o campo para dentro de casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-background border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-8">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 relative pb-4 leading-relaxed line-clamp-4 min-h-[100px]">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
