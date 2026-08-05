---
title: "AI Doesn't Have an Information Problem. We Do."
date: 2026-08-05 12:13:00 -0400
excerpt: "AI is a generational accelerator, but speed without direction, trustworthy data, and clear outcomes can move an organization rapidly toward the wrong destination."
redirect_from: /ai-doesnt-have-an-information-problem/
header:
  image: /assets/images/ai-information-problem-cars.jpg
  teaser: /assets/images/ai-information-problem-cars.jpg
tags:
  - ai
  - information-management
  - knowledge-management
  - data
  - governance
  - systems-thinking
  - leadership
---

*Acceleration helps only after we know where we are going.*

We are drowning in information, and AI is not magically pulling us out. In many organizations, it is adding another layer to the flood.

For years, we were told that data was the new oil, so we did what organizations tend to do: we collected more of it. We created more documents, dashboards, SharePoint sites, Teams channels, notes, reports, recordings, transcripts, and copies of the same presentation with slightly different dates in the filename. Every new initiative generated another repository or spreadsheet where information could live, even when no one was quite sure how it would be maintained or who would decide which version was authoritative.

Now AI has arrived, and many people expect it to make sense of everything we accumulated. That expectation is understandable, but I think it is backward. AI does not eliminate the problems we created around information. It exposes them, and in some cases it accelerates them.

Herbert Simon saw the underlying problem decades before generative AI. In 1971, he wrote that **“a wealth of information creates a poverty of attention.”** The limiting resource was never information itself. It was our ability to decide what deserved attention, what could be trusted, and what should happen next.

## The fastest car can still lose the trip

Imagine we are both leaving on the same road trip. I hop into a 1994 Ford Taurus while you climb into a brand-new Ferrari. One of us is definitely capable of driving faster.

Now imagine we are both trying to get to Miami.

I have clear directions, enough money for gas, and a reasonable plan. You point the Ferrari toward Los Angeles, put your foot down, and spend the next several hours cruising comfortably at well over 100 miles per hour.

I am still getting to Miami first.

The difference is not the car. It is that one of us knows where we are going.

<figure class="image-figure">
  <img src="{{ '/assets/images/ai-information-problem-cars.jpg' | relative_url }}" alt="Doc Hudson and Lightning McQueen racing through the desert in Pixar's Cars" loading="lazy" decoding="async">
  <figcaption>Lightning was faster. Doc was prepared, experienced, and focused on the road in front of him. Image from <em>Cars</em>, used here for commentary.</figcaption>
</figure>

Pixar's *Cars* makes a similar point in a more entertaining way. Lightning McQueen has more raw speed, but Doc Hudson understands the terrain, prepares for the turn, and knows that flooring the accelerator is not the same thing as controlling the car. Capability matters, but capability without context can become a very efficient way to leave the road.

<div class="video-wrapper">
  <iframe width="854" height="480" src="https://www.youtube.com/embed/D9pNtnqh5JI" title="Cars clip: Lightning McQueen and Doc Hudson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

That is how I increasingly think about AI. It is an incredibly powerful, generationally important tool and accelerator, but it still needs clear direction, reliable fuel, and some agreement about the destination. In organizational terms, that means good data and knowledge, well-defined use cases, explicit outcomes, appropriate governance, and grounding in sources people can trust.

Without those things, AI may still go very fast. It may just go fast in the wrong direction.

## More output is not the same as more clarity

The remarkable part of modern AI is how quickly it can summarize documents, search thousands of files, generate code, compare options, and produce a plausible answer. Those capabilities are genuinely transformative. They are also easy to mistake for progress.

An AI assistant can produce ten versions of a document in the time it once took to write one. That does not necessarily mean we needed ten versions. It can summarize a hundred pages before we finish a cup of coffee, but a fast summary of the wrong hundred pages is not especially useful. It can create another dashboard, another status report, or another set of recommendations while the underlying organization is still debating which source reflects reality.

I have seen variations of this problem repeatedly, long before AI entered the conversation. One team maintained several trackers that described essentially the same work, but each used different names, statuses, and ownership fields. Every report required someone to reconcile them manually. The reconciliation work was treated as reporting overhead, even though it was really evidence that the organization had not agreed on the shape of the work.

In another case, a discussion about creating a single knowledge repository revealed that we were trying to combine three different things: authoritative operating guidance, fast-moving working knowledge, and reusable tools or code. Putting everything in one place sounded simpler, but it would have made each category harder to use. Authoritative guidance needs clear ownership and deliberate change control. Working knowledge needs low-friction contribution. Executable assets need versioning, testing, and technical stewardship. The information was related, but it did not all need the same shape.

AI does not make those distinctions disappear. It makes them more important because the system needs signals about which material is current, authoritative, relevant, and safe to use.

## Grounding is not a technical footnote

The word *grounding* can sound like another piece of AI vocabulary, but the idea is straightforward: connect the model's answer to relevant, trusted information rather than asking it to rely only on patterns learned during training.

Microsoft's guidance on [retrieval-augmented generation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/retrieval-augmented-generation) describes this as combining model reasoning with trusted, organization-specific knowledge so responses can be more accurate, contextual, and grounded. The technology matters, but the phrase **trusted knowledge** carries much of the burden.

A retrieval system can find a document. It cannot independently decide that the document should still exist, that its owner left two years ago, that a newer policy quietly superseded it, or that two teams use the same term to mean different things. Those are organizational decisions expressed through information architecture, ownership, metadata, governance, and maintenance.

This is why “garbage in, garbage out” remains relevant, even though modern AI is far more sophisticated than the systems for which the phrase was coined. A powerful model can sometimes compensate for weak inputs, but it cannot reliably transform unresolved organizational ambiguity into durable truth. At its worst, it synthesizes the ambiguity into a smooth answer that sounds more certain than the source material deserves.

That confidence is one reason the [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) emphasizes governing, mapping, measuring, and managing AI systems across their lifecycle. Trustworthy AI is not achieved by choosing a capable model and declaring victory. It requires understanding the context in which the system operates, the people affected, the quality and limitations of the inputs, and the outcomes the organization is actually trying to produce.

## Give the information a shape

I have started thinking less about how much information an organization has and more about the shape that information takes.

Well-shaped knowledge has a purpose, an owner, and enough context for someone else to use it. People can tell whether it is authoritative guidance, an emerging idea, a historical record, or one person's working notes. They know when it was last reviewed, what decision it supports, and where to go when two sources disagree.

That does not mean every document needs a committee or every idea needs a governance process. Over-structuring information can make contribution so difficult that people return to private notes and side channels. The goal is not to impose the same controls everywhere. The goal is to match the structure to the purpose.

A practical starting point is to distinguish among three broad layers:

1. **Authoritative knowledge** explains how the organization intends to operate: policies, standards, decision rights, roles, and established practices.
2. **Working knowledge** captures what people are learning: notes, examples, experiments, discussions, emerging guidance, and unresolved questions.
3. **Executable knowledge** turns understanding into repeatable action: queries, code, prompts, workflows, agents, templates, and automation.

The boundaries will never be perfect, and they should not be. The value comes from making the differences visible enough that both people and AI can navigate them without treating every artifact as equally trustworthy.

## Decide where Miami is

The organizations that benefit most from AI probably will not be the ones that generate the most content, deploy the most copilots, or attach an agent to every process. They will be the ones that can answer a few less glamorous questions.

What outcome are we trying to improve? Which information should the system trust? Who owns that information? How will we know whether the answer was useful? What happens when sources conflict? Where should a human remain responsible for judgment? Which outputs should disappear after the task, and which ones should become part of the organization's durable knowledge?

Those questions can feel slow when everyone is eager to accelerate, but they are the equivalent of checking the map, filling the tank, and agreeing on the destination. They do not reduce the value of the Ferrari. They make its speed useful.

AI is not the cure for information overload. Used carelessly, it can become another source of documents, summaries, recommendations, and synthetic certainty added to the pile. Used deliberately, with good information, clear use cases, measurable outcomes, and trustworthy grounding, it can help us navigate the pile and perhaps reduce it.

The Ferrari is still the faster car. It is just worth making sure it is pointed toward Miami before pressing the accelerator.

---

### A few related rabbit holes

- Herbert A. Simon, [“Designing Organizations for an Information-Rich World”](https://faculty.washington.edu/ajko/books/foundations-of-information/managing), and the idea that information abundance creates attention scarcity.
- Microsoft Learn, [Retrieval-Augmented Generation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/retrieval-augmented-generation), on grounding AI responses in trusted organizational knowledge.
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), for a practical model organized around govern, map, measure, and manage.
- Donella Meadows, *Thinking in Systems*, for a deeper look at why improving one component rarely fixes a system whose incentives and information flows remain unchanged.
