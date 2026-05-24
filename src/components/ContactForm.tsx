import * as React from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useStore } from "../store/useStore";

// Contact form Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 digits." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { formSubmitted, setFormSubmitted, setLoadingProgress } = useStore();
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate loading progress on submit
    setLoadingProgress(10);
    const result = contactSchema.safeParse(formData);

    setLoadingProgress(50);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setLoadingProgress(100);
      return;
    }

    setErrors({});
    setLoadingProgress(80);

    setTimeout(() => {
      setFormSubmitted(true);
      setLoadingProgress(100);
    }, 400);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setFormSubmitted(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {formSubmitted ? (
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center p-3 bg-electric-lime/20 border border-electric-lime rounded-full mb-4 text-brand-dark dark:text-electric-lime">
            <i className="ph ph-check-circle text-[32px]"></i>
          </div>
          <h4 className="text-foreground mb-2">Message Sent!</h4>
          <p className="text-muted-foreground body-sm mb-6">
            Thank you. We have received your message and will get back to you
            within 24 hours.
          </p>
          <div className="flex justify-center">
            {/* Success badge as per DESIGN.md */}
            <div className="inline-flex items-center gap-1.5 bg-electric-lime/20 text-brand-dark dark:text-electric-lime border border-electric-lime px-3 py-1.5 rounded-full font-sans text-sm font-medium mb-6">
              Status: Message Received
            </div>
          </div>
          <Button variant="primary" onClick={handleReset} className="w-full">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <h4 className="text-foreground mb-6 text-center border-b border-border pb-3">
            Message Form
          </h4>

          <div className="space-y-4">
            <div>
              <label className="block font-heading text-base font-semibold text-foreground mb-2">
                Full Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                variant="light"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-heading text-base font-semibold text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@roofero.com"
                variant="light"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-heading text-base font-semibold text-foreground mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="555-0199"
                variant="light"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block font-heading text-base font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={3}
                className="w-full px-4 py-3 rounded-[6px] transition-all outline-none bg-white text-deep-black dark:bg-brand-dark dark:text-white border border-border placeholder:text-muted-foreground focus:border-link-blue focus:ring-3 focus:ring-link-blue/10 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-4 flex items-center justify-center gap-2 font-semibold"
            >
              <i className="ph ph-paper-plane text-[18px]"></i> Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
