import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      image: "/src/assets/produtos/costela.webp",
      title: "Costela",
      description: "Suculência e sabor inigualável direto da Cabanha Real, para sua família.",
      price: "Sob Consulta",
      tag: "Mais Vendido"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mantas de Fibras Naturais",
      description: "Aconchego para o sofá ou cama, feitas com 100% de lã ovina e linho rústico.",
      price: "R$ 499,00",
      tag: "Novo"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Poltrona Rústica Casca de Madeira",
      description: "Madeira maciça com acabamentos em algodão cru. O refúgio perfeito na sua sala.",
      price: "R$ 1.250,00",
      tag: "Exclusivo"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 mb-12 md:flex-row">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Cortes Nobres</h2>
            <p className="text-muted-foreground mt-2 text-lg">Transforme suas refeições em momentos inesquecíveis. Oferecemos uma seleção de cortes nobres de cordeiro, perfeitos para os mais variados preparos, do churrasco do fim de semana ao jantar especial.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            Ver Toda Coleção <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <Card key={p.id} className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" 
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {p.tag}
                </Badge>
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2 mt-2">
                  {p.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between pb-6">
                <span className="font-bold text-lg text-foreground">{p.price}</span>
                <Button variant="default">Comprar Agora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="w-full sm:w-auto">
            Ver Toda Coleção <MoveRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
