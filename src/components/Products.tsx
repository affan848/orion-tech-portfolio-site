
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Cpu, Truck } from "lucide-react";

export function Products() {
  const productCategories = [
    {
      title: "Automation Tools",
      description: "Cutting-edge automation solutions for industrial efficiency and precision",
      icon: Cpu,
      items: [
        "PLCs and related components",
        "Sensors and control systems",
        "Industrial automation software",
        "Robotics and automation equipment"
      ]
    },
    {
      title: "Mechanical Parts",
      description: "High-quality mechanical components built for durability and performance",
      icon: Wrench,
      items: [
        "Gears, shafts, and assemblies",
        "Pneumatic & hydraulic controlled valves",
        "Pneumatic pumps, acid motorized pumps",
        "Solenoid valves",
        "Mechanical gears and accessories"
      ]
    },
    {
      title: "Electrical Components",
      description: "Reliable electrical parts for every industrial application",
      icon: Cpu,
      items: [
        "Relays, contactors, and overloads",
        "E.O.C.R. measuring instruments",
        "AC/DC volt meters and energy meters",
        "Cables, switches, and panels",
        "Digital and analog equipment"
      ]
    },
    {
      title: "Industrial Gears and Accessories",
      description: "Comprehensive range of industrial gear solutions",
      icon: Wrench,
      items: [
        "Gear drives and reducers",
        "Transmission components",
        "Bearing assemblies",
        "Custom gear solutions",
        "Gear maintenance tools"
      ]
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Product Categories</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Delivering a comprehensive range of high-quality industrial components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden h-full border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <category.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
