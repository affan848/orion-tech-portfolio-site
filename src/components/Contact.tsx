
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
              <p className="text-gray-500 md:text-lg mt-2">
                Get in touch with our team for inquiries, quotes, or product information.
              </p>
            </div>
            
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-500">+92 307 7770028</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">orienologies@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-gray-500">
                      Office # 16, 1st Floor, Sharif Plaza, Commercial Avenue, 
                      Wah Model Town, Phase-III, Hassan Abdal, District. Attock
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Send us a message</h3>
                  <p className="text-sm text-gray-500">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input id="first-name" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Input id="last-name" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Email" />
                  </div>
                  <div className="space-y-2">
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
