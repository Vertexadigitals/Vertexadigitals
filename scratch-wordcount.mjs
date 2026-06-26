import { blogPosts } from "./lib/blogs-content.ts";

function countBlog(blog) {
  const allText = [];
  allText.push(blog.hero.title, blog.hero.subtitle, blog.excerpt);
  for (const s of blog.sections) {
    if (s.type === "paragraph") allText.push(s.content);
    if (s.type === "heading") allText.push(s.text);
    if (s.type === "list") allText.push(...s.items);
    if (s.type === "quote") allText.push(s.text);
    if (s.type === "callout") allText.push(s.heading, s.content);
    if (s.type === "checklist") {
      if (s.heading) allText.push(s.heading);
      for (const i of s.items) {
        allText.push(i.text);
        if (i.description) allText.push(i.description);
      }
    }
    if (s.type === "comparison") {
      if (s.heading) allText.push(s.heading);
      for (const c of s.columns) allText.push(c.title, ...c.points);
    }
    if (s.type === "statBlock") {
      if (s.heading) allText.push(s.heading);
      for (const st of s.stats) {
        allText.push(st.label);
        if (st.description) allText.push(st.description);
      }
    }
    if (s.type === "tableOfContents") allText.push(...s.items.map((i) => i.text));
  }
  for (const f of blog.faqs) allText.push(f.question, f.answer);
  if (blog.midArticleCta)
    allText.push(blog.midArticleCta.heading, blog.midArticleCta.subheading, blog.midArticleCta.buttonText);
  allText.push(blog.finalCta.heading, blog.finalCta.subheading, blog.finalCta.buttonText);
  const fullText = allText.join(" ");
  return fullText.split(/\s+/).filter((w) => w.length > 0).length;
}

for (const blog of blogPosts) {
  console.log(blog.slug, "->", countBlog(blog), "words");
}
