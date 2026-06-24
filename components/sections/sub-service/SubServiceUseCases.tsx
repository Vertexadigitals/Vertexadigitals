import { Sparkles } from "lucide-react";

import type { SubServiceUseCase } from "@/lib/sub-services-content";

type SubServiceUseCasesProps = {
  h2: string;
  cases: SubServiceUseCase[];
};

export function SubServiceUseCases({ h2, cases }: SubServiceUseCasesProps) {
  return (
    <section
      aria-labelledby="sub-service-use-cases-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="sub-service-use-cases-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          {h2}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
            >
              <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                <Sparkles
                  className="size-5 text-neutral-700"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-serif text-lg font-medium text-black">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
