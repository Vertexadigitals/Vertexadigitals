"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const subscribeFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;

export function BlogSubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeFormSchema),
  });

  function onSubmit(values: SubscribeFormValues) {
    // TODO: wire up to a real email service.
    console.log("Blog subscribe submission:", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-black/10 bg-neutral-50 p-8 text-center"
      >
        <p className="font-serif text-xl text-black">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll email you the moment the blog launches.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <Label htmlFor="subscribe-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="subscribe-email"
          type="email"
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
      >
        {isSubmitting ? "Submitting..." : "Notify Me"}
      </Button>
    </form>
  );
}
