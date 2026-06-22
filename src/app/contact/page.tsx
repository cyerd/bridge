import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Looking for reliable sourcing support in East Africa? Get in touch with us.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
