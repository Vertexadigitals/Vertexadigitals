"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Globe, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/site-config";

const EXCLUDED_PATHS = ["/contact", "/privacy", "/terms"];

const serviceOptions = [
  ...siteConfig.services.map((service) => service.name),
  "Multiple services / Not sure yet",
];

const whatYouGet = [
  "Senior-led project execution",
  "Transparent 24–48 hour response",
  "Detailed proposal with timeline & investment",
  "Clear scope, milestones, and deliverables",
  "Direct access to founders — no account managers",
];

const quoteFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  details: z
    .string()
    .min(20, "Please tell us a bit more about your project"),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const inputClassName =
  "h-auto w-full rounded-lg border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 transition-all duration-150 data-[size=default]:h-auto";

const labelClassName =
  "text-xs font-medium tracking-wider text-neutral-700 uppercase";

// Defined outside the component so the impure Date.now() call happens in an
// event-handler-only code path the React Compiler's purity check can verify
// never runs during render.
function generateReferenceNumber() {
  return `VRTX-${Date.now()}`;
}

export function QuoteCTA() {
  const pathname = usePathname();

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  if (EXCLUDED_PATHS.includes(pathname)) {
    return null;
  }

  async function onSubmit(values: QuoteFormValues) {
    setSubmitError(false);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          referenceNumber: generateReferenceNumber(),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  return (
    <section
      aria-labelledby="quote-cta-heading"
      className="bg-neutral-50/30 px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
            Get a Quote
          </p>
          <h2
            id="quote-cta-heading"
            className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-neutral-900 sm:text-5xl"
          >
            Get Your Free Quote
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
            Tell us about your project — we&apos;ll get back within 24-48
            hours with a tailored proposal, timeline, and clear next steps.
            No hidden fees, no obligations. Just a straight answer on what
            we&apos;d build and what it would take.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-neutral-100 p-3">
                <Mail className="size-6 text-neutral-900" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs tracking-wider text-neutral-500 uppercase">
                  Email Us
                </p>
                <p className="text-base font-medium text-neutral-900">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-neutral-100 p-3">
                <Globe className="size-6 text-neutral-900" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs tracking-wider text-neutral-500 uppercase">
                  Our Reach
                </p>
                <p className="text-sm font-medium text-neutral-900">
                  {siteConfig.areaServed.join(" · ")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
              What You Get
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-[18px] shrink-0 text-neutral-900"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-10">
          {submitted ? (
            <div role="status" className="py-12 text-center">
              <CheckCircle2
                className="mx-auto size-10 text-neutral-900"
                aria-hidden="true"
              />
              <p className="mt-4 font-serif text-2xl font-medium text-neutral-900">
                Got it.
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                We&apos;ll be in touch within 24-48 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-center font-serif text-2xl font-medium text-neutral-900 sm:text-3xl">
                Get Your Free Quote
              </h3>
              <p className="mt-2 mb-8 text-center text-sm text-neutral-500">
                Start your project today — no obligation
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Get a free quote"
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="qc-firstName" className={labelClassName}>
                      First Name
                    </Label>
                    <Input
                      id="qc-firstName"
                      className={`mt-2 ${inputClassName}`}
                      aria-required="true"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={
                        errors.firstName ? "qc-firstName-error" : undefined
                      }
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p
                        id="qc-firstName-error"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="qc-lastName" className={labelClassName}>
                      Last Name
                    </Label>
                    <Input
                      id="qc-lastName"
                      className={`mt-2 ${inputClassName}`}
                      aria-required="true"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "qc-lastName-error" : undefined
                      }
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p
                        id="qc-lastName-error"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="qc-email" className={labelClassName}>
                    Email
                  </Label>
                  <Input
                    id="qc-email"
                    type="email"
                    className={`mt-2 ${inputClassName}`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "qc-email-error" : undefined
                    }
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="qc-email-error"
                      role="alert"
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="qc-phone" className={labelClassName}>
                    Phone (optional)
                  </Label>
                  <Input
                    id="qc-phone"
                    type="tel"
                    className={`mt-2 ${inputClassName}`}
                    {...register("phone")}
                  />
                </div>

                <div>
                  <Label htmlFor="qc-service" className={labelClassName}>
                    Service You Need
                  </Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="qc-service"
                          aria-required="true"
                          aria-invalid={!!errors.service}
                          aria-describedby={
                            errors.service ? "qc-service-error" : undefined
                          }
                          className={`mt-2 w-full ${inputClassName}`}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p
                      id="qc-service-error"
                      role="alert"
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="qc-details" className={labelClassName}>
                    Project Details
                  </Label>
                  <Textarea
                    id="qc-details"
                    rows={5}
                    placeholder="Tell us about your project — goals, timeline, budget range, and any specific requirements"
                    className={`mt-2 ${inputClassName}`}
                    aria-required="true"
                    aria-invalid={!!errors.details}
                    aria-describedby={
                      errors.details ? "qc-details-error" : undefined
                    }
                    {...register("details")}
                  />
                  {errors.details && (
                    <p
                      id="qc-details-error"
                      role="alert"
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors.details.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p role="alert" className="text-xs text-red-600">
                    Something went wrong sending your request. Please try
                    again.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="mt-1 h-auto w-full justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        className="size-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </Button>

                <p className="mt-2 text-center text-xs text-neutral-500">
                  24-48 hour response &middot; No spam, ever &middot;
                  Senior-led delivery
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
