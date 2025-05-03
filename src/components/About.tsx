
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                About ORION Technologies
              </h2>
              <p className="text-gray-500 md:text-xl">
                ORION Technologies is a trusted general order supplier based in Pakistan, 
                specializing in delivering high-quality industrial parts and components. 
                With a focus on reliability and performance, we provide a comprehensive range 
                of products to meet the evolving needs of industries across the country.
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                <Card className="p-2 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Markets Served</h3>
                    <p className="text-gray-500">
                      We proudly serve businesses and industrial clients across Pakistan, 
                      offering tailored solutions and prompt delivery to meet operational demands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Choose ORION Technologies?</h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">Wide range of industrial products</h4>
                  <p className="text-sm text-gray-500">
                    From automation tools to electrical components, we have everything your industry needs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">Commitment to quality and durability</h4>
                  <p className="text-sm text-gray-500">
                    All our products undergo rigorous quality control to ensure reliability
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">Professional sales and support team</h4>
                  <p className="text-sm text-gray-500">
                    Our experienced team is ready to help you find the right solutions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">Fast and reliable supply chain</h4>
                  <p className="text-sm text-gray-500">
                    We understand the importance of timely deliveries in industrial operations
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
