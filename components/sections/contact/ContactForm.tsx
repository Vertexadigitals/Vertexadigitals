"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { budgetRanges, timelineOptions } from "@/lib/contact-content";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  details: z
    .string()
    .min(20, "Please tell us a bit more about your project"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    // TODO: wire up to a real backend/email service.
    console.log("Contact form submission:", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-black/10 bg-neutral-50 p-10 text-center"
      >
        <p className="font-serif text-2xl text-black">
          Thanks! We&apos;ll respond within 24 hours.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Keep an eye on your inbox — that&apos;s where we&apos;ll reach out
          first.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="mt-2"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="mt-2"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" className="mt-2" {...register("company")} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <Label htmlFor="service">Service Interested</Label>
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger id="service" className="mt-2 w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.services.map((service) => (
                    <SelectItem key={service.href} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger id="budget" className="mt-2 w-full">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget && (
            <p className="mt-1 text-sm text-red-600">
              {errors.budget.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="timeline">Timeline</Label>
          <Controller
            name="timeline"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger id="timeline" className="mt-2 w-full">
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600">
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="details">Project Details</Label>
        <Textarea
          id="details"
          rows={5}
          className="mt-2"
          aria-invalid={!!errors.details}
          {...register("details")}
        />
        {errors.details && (
          <p className="mt-1 text-sm text-red-600">
            {errors.details.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-black px-8 py-4 text-base text-white hover:bg-neutral-800"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
