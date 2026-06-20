type JsonLdData = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdData | JsonLdData[];
};

// Renders one or more JSON-LD <script> tags. `<` is escaped per Next.js's
// JSON-LD guide to prevent breaking out of the script tag via XSS.
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
