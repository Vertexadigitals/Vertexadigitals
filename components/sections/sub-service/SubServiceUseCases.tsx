import type { SubServiceUseCase } from "@/lib/sub-services-content";

type SubServiceUseCasesProps = {
  h2: string;
  cases: SubServiceUseCase[];
};

export function SubServiceUseCases({ h2, cases }: SubServiceUseCasesProps) {
  return (
    <section
      aria-labelledby="sub-service-use-cases-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="sub-service-use-cases-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {cases.map((useCase) => (
            <div key={useCase.title}>
              <h3 className="font-serif text-xl text-black">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
