---
title: "New-ish Blog?"
date: 2023-01-05 00:00:00 +0000
excerpt: "After WordPress, Ghost, and Medium, the blog is becoming a collection of plain files built by Jekyll and published through GitHub Pages."
redirect_from: /personal/newish-blog/
categories:
  - Personal
tags:
  - reflection
  - blog
  - social
image: /assets/images/dr-jekyll-mr-hyde-1920-barrymore.jpg
header:
  image: /assets/images/dr-jekyll-mr-hyde-1920-barrymore.jpg
  teaser: /assets/images/dr-jekyll-mr-hyde-1920-barrymore.jpg
source_url: https://vampireworkday.com/2023/01/05/newish-blog.html
archive_url: https://web.archive.org/web/20240724185220/https://vampireworkday.com/2023/01/05/newish-blog.html
recovered: true
---

aka "Dr Jekyll and Mr Blog"

This blog has moved around enough that “new” probably needs an asterisk.

Some of these posts began life in <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a>. Later ones passed through <a href="https://github.com/TryGhost/Ghost" target="_blank" rel="noopener noreferrer">Ghost</a>, and still others arrived wearing <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium’s</a> particular flavor of formatting. Each platform made publishing easy in its own way: open an editor, move some blocks around, click a button, and trust the machinery behind the curtain.

Now I’m trying something different: <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer">GitHub Pages</a> and the open-source <a href="https://github.com/jekyll/jekyll" target="_blank" rel="noopener noreferrer">Jekyll project</a>.

## The repository is the CMS

The publishing process looks less like operating a traditional blog and more like maintaining a very small software project:

1. Write a post in <a href="https://daringfireball.net/projects/markdown/syntax" target="_blank" rel="noopener noreferrer">Markdown</a>.
2. Add a little <a href="https://jekyllrb.com/docs/front-matter/" target="_blank" rel="noopener noreferrer">YAML front matter</a> for the title, date, tags, and layout.
3. Commit it to <a href="https://github.com/mike11stevens/vampireworkday" target="_blank" rel="noopener noreferrer">a GitHub repository</a>.
4. Let GitHub Pages <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll" target="_blank" rel="noopener noreferrer">run Jekyll and generate the static site</a>.

There is no production database full of posts and no server-side publishing application waiting for someone to remember its password. The content, templates, configuration, images, and revision history all live together in the repository.

Calling this a *headless CMS* is probably stretching the term. There is no content API or separate editorial service here. It is closer to a **headless-ish, Git-backed publishing system**: Markdown is the content store, Git is the history, Jekyll is the renderer, and GitHub Pages is the host.

The repository has effectively become the CMS.

## Migration as digital archaeology

Converting the old posts has been the interesting part.

<figure class="image-figure">
  <img src="{{ '/assets/images/dr-jekyll-mr-hyde-transformation-poster.jpg' | relative_url }}" alt="The Transformation, an 1880s theatrical poster for Dr. Jekyll and Mr. Hyde" loading="lazy" decoding="async">
  <figcaption>“The Transformation,” an 1880s theatrical poster for <cite>Dr. Jekyll and Mr. Hyde</cite>. <a href="https://www.loc.gov/item/2014635954/" target="_blank" rel="noopener noreferrer">Library of Congress</a>; no known restrictions on publication.</figcaption>
</figure>

<a href="https://wordpress.com/support/export/" target="_blank" rel="noopener noreferrer">WordPress exports</a>, <a href="https://ghost.org/help/exports/" target="_blank" rel="noopener noreferrer">Ghost exports</a>, and <a href="https://help.medium.com/hc/en-us/articles/115004745787-Export-your-account-data" target="_blank" rel="noopener noreferrer">Medium-flavored HTML</a> may all describe roughly the same things—titles, dates, paragraphs, links, images—but they do not describe them in quite the same way. The basic conversion is only the beginning. Then comes the archaeology:

- preserving original publication dates;
- rebuilding front matter;
- repairing image paths;
- translating embeds and shortcodes;
- keeping old URLs working where possible;
- removing bits of platform-specific markup; and
- deciding whether an ancient broken link is history or just clutter.

Markdown gives all of that material a reasonably neutral home. It is plain text, readable without the original platform, and portable if I decide to move everything again. Given the history of this blog, that last part feels less hypothetical than it probably should.

## Why trade the GUI for Git?

I have spent plenty of time tinkering with GUI-driven blogging platforms. There is something pleasant about logging in and seeing a polished editor waiting for you. There is also something strange about having years of writing locked inside an application, database, export format, or business model that may change underneath it.

This setup makes a different trade:

- I get version history, diffs, and backups through <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control.html" target="_blank" rel="noopener noreferrer">Git</a>.
- I can edit with whatever text editor I want.
- The published site is made of simple static files.
- There is less server and plugin maintenance.
- The content is not inseparable from the publishing platform.

In exchange, publishing now assumes some comfort with Markdown, Git, configuration files, and the occasional Ruby-shaped rabbit hole. That is not necessarily simpler for everyone. For me, at least right now, it is a more interesting kind of complexity.

## Full circle, with better plumbing

Moving away from a graphical CMS feels a little like going backward: files in folders, text in an editor, and a build step between writing and publishing.

But it also feels like coming full circle with better plumbing.

The old workflow was “write in a website that manages the website.” The new workflow is “write a file, preserve it in version control, and generate the website from it.” The public result is still just a blog. Behind it, though, the content is becoming a collection of durable files instead of cargo packed for whichever platform happens to be carrying it this year.

We will see whether this makes me write more often.

At minimum, it has already given me something new-ish to tinker with.

## Down the rabbit hole

A few useful accounts from people who took similar routes:

- <a href="https://tobiasahlin.com/blog/moving-from-wordpress-to-jekyll/" target="_blank" rel="noopener noreferrer">Moving from WordPress to Jekyll</a> — Tobias Ahlin, 2013. Includes thoughts on preserving old URLs when moving more than 100 posts.
- <a href="https://vext.info/2018/07/29/migrating-from-ghost-to-jekyll-and-github-pages.html" target="_blank" rel="noopener noreferrer">Migrating from Ghost to Jekyll and GitHub Pages</a> — a migration motivated partly by reducing infrastructure and maintenance.
- <a href="https://www.wiserfirst.com/blog/migrating-blog-to-jekyll/" target="_blank" rel="noopener noreferrer">Migrating Blog to Jekyll</a> — a useful example of gathering content from multiple earlier platforms, including Medium.
- <a href="https://www.roberthorvick.com/blog/migrating-from-wordpress-to-jekyll-github-pages" target="_blank" rel="noopener noreferrer">Migrating From WordPress to Jekyll on GitHub Pages</a> — a March 2022 walkthrough covering export problems, URLs, images, and GitHub Pages.
- <a href="https://www.storyblok.com/tp/headless-cms-jekyll" target="_blank" rel="noopener noreferrer">Add a Headless CMS to Jekyll</a> — an example of the more literal headless-CMS model, where Jekyll consumes content from an external API.

Follow <a href="https://x.com/mike11stevens" target="_blank" rel="noopener noreferrer">@mike11stevens</a>

<div class="link-card-group">
  <a class="link-card" href="https://x.com/mike11stevens" target="_blank" rel="noopener noreferrer">
    <span class="link-card__body">
      <strong class="link-card__title">@mike11stevens</strong>
      <span class="link-card__excerpt">Fresh-ish thoughts, half-baked observations, and the occasional proof of life.</span>
      <span class="link-card__domain">x.com</span>
    </span>
    <span class="link-card__thumb link-card__thumb--source">
      <img src="{{ '/assets/images/mike11stevens-x-avatar.jpg' | relative_url }}" alt="@mike11stevens on X">
    </span>
  </a>
</div>
