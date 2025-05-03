
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-secondary"
    >
      {/* Abstract network lines in background - resembles logo design */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,50 L200,150 L350,50 L500,200 L650,100" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M50,150 L200,250 L350,150 L500,300 L650,200" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M50,250 L200,350 L350,250 L500,400 L650,300" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="5" fill="white"/>
          <circle cx="200" cy="150" r="5" fill="white"/>
          <circle cx="350" cy="50" r="5" fill="white"/>
          <circle cx="500" cy="200" r="5" fill="white"/>
          <circle cx="650" cy="100" r="5" fill="white"/>
        </svg>
      </div>
      
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-3 fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
              ORION Technologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Empowering Industry with Quality Solutions
            </p>
          </div>
          
          <p className="max-w-[700px] text-gray-300 md:text-lg fade-in delay-200">
            A trusted general order supplier based in Pakistan, specializing in delivering 
            high-quality industrial parts and components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 fade-in delay-400">
            <Button size="lg" className="rounded-full">
              Our Products
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
