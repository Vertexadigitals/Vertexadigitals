import { getRelatedBlogs, type BlogPost, type BlogSection } from "@/lib/blogs-content";

import { BlogHero } from "@/components/sections/blog/BlogHero";
import { ReadingProgressBar } from "@/components/sections/blog/ReadingProgressBar";
import { TableOfContents } from "@/components/sections/blog/TableOfContents";
import { BlogSectionRenderer } from "@/components/sections/blog/BlogSectionRenderer";
import { BlogMidCta } from "@/components/sections/blog/BlogMidCta";
import { BlogFAQSection } from "@/components/sections/blog/BlogFAQSection";
import { AuthorBio } from "@/components/sections/blog/AuthorBio";
import { RelatedBlogs } from "@/components/sections/blog/RelatedBlogs";
import { BlogFinalCta } from "@/components/sections/blog/BlogFinalCta";

type BlogTemplateProps = {
  blog: BlogPost;
};

const ARTICLE_ID = "blog-article-body";

export function BlogTemplate({ blog }: BlogTemplateProps) {
  const tocSection = blog.sections.find(
    (section): section is Extract<BlogSection, { type: "tableOfContents" }> =>
      section.type === "tableOfContents"
  );
  const contentSections = blog.sections.filter(
    (section) => section.type !== "tableOfContents"
  );

  const midpoint = blog.midArticleCta
    ? Math.ceil(contentSections.length / 2)
    : contentSections.length;
  const firstHalf = contentSections.slice(0, midpoint);
  const secondHalf = contentSections.slice(midpoint);

  const relatedBlogs = getRelatedBlogs(blog.slug, 3);

  return (
    <>
      <BlogHero blog={blog} />
      <ReadingProgressBar articleId={ARTICLE_ID} />

      <div id={ARTICLE_ID} className="bg-white px-6 py-12">
        <div
          className={
            tocSection
              ? "mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]"
              : "mx-auto max-w-3xl"
          }
        >
          {tocSection && <TableOfContents items={tocSection.items} />}

          <article className={tocSection ? "max-w-3xl" : undefined}>
            <BlogSectionRenderer sections={firstHalf} />

            {blog.midArticleCta && (
              <BlogMidCta
                heading={blog.midArticleCta.heading}
                subheading={blog.midArticleCta.subheading}
                buttonText={blog.midArticleCta.buttonText}
                buttonLink={blog.midArticleCta.buttonLink}
              />
            )}

            <BlogSectionRenderer sections={secondHalf} />

            <AuthorBio />
          </article>
        </div>
      </div>

      <BlogFAQSection faqs={blog.faqs} />
      <RelatedBlogs blogs={relatedBlogs} />
      <BlogFinalCta
        heading={blog.finalCta.heading}
        subheading={blog.finalCta.subheading}
        buttonText={blog.finalCta.buttonText}
        buttonLink={blog.finalCta.buttonLink}
      />
    </>
  );
}
