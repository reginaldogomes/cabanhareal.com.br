import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight, X, ZoomIn } from "lucide-react";
import { Dialog } from "radix-ui";

const WHATSAPP_NUMBER = "5532999204504";

function whatsappLink(productTitle: string) {
  const msg = encodeURIComponent(`Olá! Gostaria de fazer um orçamento para: ${productTitle}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      image: "/src/assets/produtos/costela.webp",
      title: "Costela",
      description: "Um corte macio e suculento, de sabor marcante e sofisticado. Ideal para pratos refinados e ocasiões especiais, trazendo elegância e intensidade únicas aos momentos.",
      tag: "Mais Vendido"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mantas de Fibras Naturais",
      description: "Aconchego para o sofá ou cama, feitas com 100% de lã ovina e linho rústico.",
      tag: "Novo"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Poltrona Rústica Casca de Madeira",
      description: "Madeira maciça com acabamentos em algodão cru. O refúgio perfeito na sua sala.",
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
              {/* Image with zoom trigger */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <div className="relative h-64 overflow-hidden cursor-zoom-in">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {p.tag}
                    </Badge>
                  </div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-[90vw] max-h-[90vh] p-0 overflow-hidden rounded-xl shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                    <Dialog.Title className="sr-only">{p.title}</Dialog.Title>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain max-h-[90vh]"
                    />
                    <Dialog.Close className="absolute top-3 right-3 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition-colors">
                      <X className="w-5 h-5" />
                      <span className="sr-only">Fechar</span>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2 mt-2">
                  {p.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pb-6">
                <a
                  href={whatsappLink(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors bg-[#25D366] hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Faça seu Orçamento
                </a>
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
