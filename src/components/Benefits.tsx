import { Truck, ShieldCheck, Leaf, Crown } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Crown className="w-10 h-10 text-primary mb-4" />,
      title: "Qualidade Premium",
      description: "Cordeiros selecionados com manejo cuidadoso e excelência do pasto à sua mesa."
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary mb-4" />,
      title: "Origem Garantida",
      description: "Cordeiros criados com bem-estar animal, práticas sustentáveis e rastreabilidade."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
      title: "Compra Segura",
      description: "Atendimento transparente, pedido seguro e suporte direto da Cabanha Real."
    },
    {
      icon: <Truck className="w-10 h-10 text-primary mb-4" />,
      title: "Entregas Rápidas",
      description: "Logística ágil para preservar frescor, qualidade e sabor até você."
    }
  ];

  return (
    <section className="w-full bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              {benefit.icon}
              <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
