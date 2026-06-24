"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";

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
import { budgetRanges } from "@/lib/contact-content";

const serviceOptions = [
  ...siteConfig.services.map((service) => service.name),
  "Multiple services / Not sure yet",
];

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  details: z
    .string()
    .min(20, "Please tell us a bit more about your project"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const inputClassName =
  "h-auto w-full rounded-lg border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 transition-all duration-150 data-[size=default]:h-auto aria-invalid:border-red-500";

const labelClassName =
  "text-xs font-medium tracking-wider text-neutral-700 uppercase";

// Defined outside the component so the impure Date.now() call happens in an
// event-handler-only code path the React Compiler's purity check can verify
// never runs during render.
function generateReferenceNumber() {
  return `VRTX-${Date.now()}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(false);
    try {
      // TODO: wire up to a real backend/email service.
      console.log("Contact form submission:", values);
      setReferenceNumber(generateReferenceNumber());
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="py-12 text-center">
        <CheckCircle
          className="mx-auto size-10 text-neutral-900"
          aria-hidden="true"
        />
        <p className="mt-4 font-serif text-2xl font-medium text-neutral-900">
          Got it.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll be in touch within 24-48 hours.
        </p>
        <p className="mt-4 text-xs text-neutral-400">
          Reference number: {referenceNumber}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contact-firstName" className={labelClassName}>
            First Name
          </Label>
          <Input
            id="contact-firstName"
            className={`mt-2 ${inputClassName}`}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={
              errors.firstName ? "contact-firstName-error" : undefined
            }
            {...register("firstName")}
          />
          {errors.firstName && (
            <p
              id="contact-firstName-error"
              role="alert"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-lastName" className={labelClassName}>
            Last Name
          </Label>
          <Input
            id="contact-lastName"
            className={`mt-2 ${inputClassName}`}
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={
              errors.lastName ? "contact-lastName-error" : undefined
            }
            {...register("lastName")}
          />
          {errors.lastName && (
            <p
              id="contact-lastName-error"
              role="alert"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="contact-email" className={labelClassName}>
          Email
        </Label>
        <Input
          id="contact-email"
          type="email"
          className={`mt-2 ${inputClassName}`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p
            id="contact-email-error"
            role="alert"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-company" className={labelClassName}>
          Company / Business Name (optional)
        </Label>
        <Input
          id="contact-company"
          className={`mt-2 ${inputClassName}`}
          {...register("company")}
        />
      </div>

      <div>
        <Label htmlFor="contact-phone" className={labelClassName}>
          Phone (optional)
        </Label>
        <Input
          id="contact-phone"
          type="tel"
          className={`mt-2 ${inputClassName}`}
          {...register("phone")}
        />
      </div>

      <div>
        <Label htmlFor="contact-service" className={labelClassName}>
          Service of Interest
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
                id="contact-service"
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={
                  errors.service ? "contact-service-error" : undefined
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
            id="contact-service-error"
            role="alert"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-budget" className={labelClassName}>
          Budget Range (optional)
        </Label>
        <Controller
          name="budget"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger
                id="contact-budget"
                className={`mt-2 w-full ${inputClassName}`}
              >
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
                <SelectItem value="Prefer to discuss">
                  Prefer to discuss
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label htmlFor="contact-details" className={labelClassName}>
          Project Details
        </Label>
        <Textarea
          id="contact-details"
          rows={5}
          placeholder="Tell us about your goals, timeline, and any specific requirements..."
          className={`mt-2 ${inputClassName}`}
          aria-required="true"
          aria-invalid={!!errors.details}
          aria-describedby={
            errors.details ? "contact-details-error" : undefined
          }
          {...register("details")}
        />
        {errors.details && (
          <p
            id="contact-details-error"
            role="alert"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.details.message}
          </p>
        )}
      </div>

      {submitError && (
        <p role="alert" className="text-xs text-red-600">
          Something went wrong sending your message. Please try again.
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
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="mt-2 text-center text-xs text-neutral-500">
        Your information is private. We never share or sell data.
      </p>
    </form>
  );
}
