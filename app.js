const posts = [
  {
    slug: "small-systems-easier-to-keep-alive",
    title: "Notes on making small systems easier to keep alive",
    category: "Practice",
    date: "Jul 18",
    excerpt:
      "A short reflection on editing rituals, lightweight review loops, and keeping a publishing habit from becoming another inbox.",
    readTime: "4 min read",
    status: "Ready",
    owner: "Mara",
    updated: "Today",
    body: [
      "Small publishing systems work best when they make the next action obvious. A draft should tell you what it needs: a clearer title, a stronger ending, or a simple review before it goes live.",
      "The goal is not to build a large editorial machine. The goal is to make writing easier to return to, even after a busy week. A short queue, broad categories, and one useful summary per post are usually enough.",
      "When the admin view keeps status, ownership, and freshness visible, the blog becomes easier to maintain without adding another place to manage.",
    ],
  },
  {
    slug: "simplifying-the-draft-board",
    title: "What changed after simplifying the draft board",
    category: "Process",
    date: "Jul 10",
    excerpt:
      "The admin view now shows only the decisions that matter: status, owner, freshness, and whether a post is ready for the front page.",
    readTime: "6 min read",
    status: "Review",
    owner: "June",
    updated: "Mon",
    body: [
      "The first draft board tried to show everything. That made it look complete, but it slowed down decisions. The useful version is smaller: what is being written, who owns it, and what state it is in.",
      "A compact queue also makes review kinder. Instead of asking someone to inspect a whole workspace, it points them toward a few posts that need attention.",
      "The result is a blog that can keep moving without needing a complicated publishing ritual.",
    ],
  },
  {
    slug: "practical-archive",
    title: "A practical archive beats a perfect archive",
    category: "Library",
    date: "Jun 29",
    excerpt:
      "How tags, calm typography, and predictable structure make older posts easier to browse without extra maintenance.",
    readTime: "3 min read",
    status: "Scheduled",
    owner: "Mara",
    updated: "Fri",
    body: [
      "Archives are most useful when they are predictable. Readers need dates, titles, categories, and a path back to recent writing. They do not need a maze.",
      "Broad categories help older work age well. They make the archive feel edited without asking every post to fit a fragile taxonomy.",
      "A practical archive is a promise: the writing will remain findable after it leaves the homepage.",
    ],
  },
  {
    slug: "weekly-writing-cadence",
    title: "Designing a weekly writing cadence",
    category: "Workflow",
    date: "Jun 17",
    excerpt:
      "A small weekly rhythm for moving ideas from notes to posts without turning writing into a project management exercise.",
    readTime: "5 min read",
    status: "Draft",
    owner: "Sam",
    updated: "Yesterday",
    body: [
      "A weekly cadence gives the blog a pulse. It does not need to be strict; it only needs to make space for choosing, shaping, and publishing one useful idea at a time.",
      "The best cadence leaves room for missed weeks. It makes returning easy, which matters more than keeping a perfect streak.",
      "Treat the queue as a small bench of possibilities, not a backlog demanding obedience.",
    ],
  },
];

const styles = [
  ["sage", "Sage editorial"],
  ["ink", "Ink journal"],
  ["rose", "Rose notebook"],
  ["ocean", "Ocean desk"],
  ["mono", "Mono archive"],
  ["contrast", "High contrast"],
];

const defaults = {
  title: "Quiet Ledger",
  tagline:
    "A simple blog built for calm reading and low-friction upkeep. The public site stays spare, while the admin panel keeps drafts, review status, and publishing notes close at hand.",
  style: "sage",
  heroLayout: "split",
  postLayout: "grid",
  density: "comfortable",
};

const settingsKey = "quiet-ledger-site-settings";
const profileKey = "quiet-ledger-user-profile";
const sessionKey = "quiet-ledger-session";
const app = document.querySelector("#app");

function getSettings() {
  return { ...defaults, ...readJson(settingsKey) };
}

function getProfile() {
  return {
    displayName: "Mara Editor",
    email: "mara@example.com",
    role: "Editor",
    bio: "Keeps the publishing queue tidy and the archive easy to browse.",
    digest: true,
    reviewAlerts: true,
    ...readJson(profileKey),
  };
}

function getSession() {
  return readJson(sessionKey);
}

function readJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") || {};
  } catch {
    return {};
  }
}

function saveSettings(next) {
  localStorage.setItem(settingsKey, JSON.stringify({ ...getSettings(), ...next }));
  render();
}

function saveProfile(next) {
  localStorage.setItem(profileKey, JSON.stringify({ ...getProfile(), ...next }));
  render();
}

function signIn() {
  const profile = getProfile();
  localStorage.setItem(
    sessionKey,
    JSON.stringify({ displayName: profile.displayName, email: profile.email }),
  );
  render("#admin");
}

function signOut() {
  localStorage.removeItem(sessionKey);
  render("#home");
}

function routeTo(hash) {
  history.pushState(null, "", hash);
  render(hash);
}

function applySettings(settings) {
  document.documentElement.dataset.style = settings.style;
  document.documentElement.dataset.density = settings.density;
  document.title = settings.title;
}

function nav(settings, active = "") {
  const session = getSession();
  return `
    <nav class="topbar site-shell" aria-label="Primary navigation">
      <a class="brand" href="#home" data-route="#home">${escapeHtml(settings.title)}</a>
      <div class="nav-links">
        <a href="#posts" data-route="#posts">Posts</a>
        <a href="#archive" data-route="#archive">Archive</a>
        <a href="#admin" data-route="#admin">Admin</a>
        <a href="#profile" data-route="#profile">Profile</a>
      </div>
      <div class="account-actions">
        ${
          session.email
            ? `<a class="account-pill" href="#profile" data-route="#profile">${escapeHtml(session.displayName)}</a><button class="secondary-action" data-action="sign-out">Sign out</button>`
            : `<button class="primary-action" data-action="sign-in">Sign in</button>`
        }
      </div>
    </nav>`;
}

function renderHome(settings) {
  const featured = posts.slice(0, 3);
  return `
    <main class="blog-home hero-${settings.heroLayout} posts-${settings.postLayout}">
      <section class="site-shell hero-section" id="home">
        ${nav(settings)}
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Minimal publishing workspace</p>
            <h1>${escapeHtml(settings.title)}</h1>
            <p class="hero-intro">${escapeHtml(settings.tagline)}</p>
            <div class="hero-actions">
              <a class="primary-action" href="#admin" data-route="#admin">Open admin</a>
              <a class="secondary-action" href="#posts" data-route="#posts">Read latest</a>
            </div>
          </div>
          <aside class="editor-panel" aria-label="Editorial snapshot">
            <div><span class="panel-label">Today</span><strong>3 drafts ready</strong></div>
            <div class="panel-row"><span>Review queue</span><span>2</span></div>
            <div class="panel-row"><span>Scheduled posts</span><span>4</span></div>
            <div class="progress-track" aria-hidden="true"><span></span></div>
            <p>The admin workspace is intentionally compact, so managing the blog feels like checking a tidy desk instead of opening a control room.</p>
          </aside>
        </div>
      </section>
      <section class="content-band" id="posts">
        <div class="site-shell section-heading"><p class="eyebrow">Latest writing</p><h2>Recent Posts</h2></div>
        <div class="site-shell post-grid">
          ${featured.map(postCard).join("")}
        </div>
      </section>
      <section class="site-shell archive-section" id="archive">
        <div class="section-heading"><p class="eyebrow">Browse</p><h2>Archive</h2></div>
        <div class="archive-list">
          ${posts.map((post, index) => `<a href="#post/${post.slug}" data-route="#post/${post.slug}"><span>0${index + 1}</span>${escapeHtml(post.title)}</a>`).join("")}
        </div>
      </section>
    </main>`;
}

function postCard(post) {
  return `
    <a class="post-card" href="#post/${post.slug}" data-route="#post/${post.slug}">
      <article>
        <div class="post-meta"><span>${post.category}</span><span>${post.date}</span></div>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.excerpt)}</p>
        <span class="read-link">${post.readTime}</span>
      </article>
    </a>`;
}

function renderPost(settings, slug) {
  const post = posts.find((item) => item.slug === slug) || posts[0];
  return `
    <main class="post-page">
      ${nav(settings)}
      <article class="post-article site-shell">
        <a class="back-link" href="#posts" data-route="#posts">Back to posts</a>
        <div class="post-meta"><span>${post.category}</span><span>${post.date}</span><span>${post.readTime}</span></div>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="post-dek">${escapeHtml(post.excerpt)}</p>
        <div class="post-body">${post.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
      </article>
    </main>`;
}

function renderAdmin(settings) {
  const profile = getProfile();
  const session = getSession();
  return `
    <main class="admin-page">
      ${nav(settings)}
      <div class="admin-page-layout">
        <aside class="admin-sidebar" aria-label="Admin sections">
          <p class="eyebrow">Admin</p>
          <h1>Publishing desk</h1>
          <a class="sidebar-link active" href="#admin">Overview</a>
          <a class="sidebar-link" href="#admin-queue">Posts</a>
          <a class="sidebar-link" href="#admin-compose">New draft</a>
          <a class="sidebar-link" href="#profile" data-route="#profile">Profile</a>
          <a class="sidebar-link" href="#admin-settings">Appearance</a>
        </aside>
        <div class="admin-main">
          <section class="admin-copy">
            <p class="eyebrow">${session.email ? "Signed in" : "Guest mode"}</p>
            <h2>Manage the blog without clutter</h2>
            <p>${session.email ? `You are signed in as ${escapeHtml(session.displayName)}.` : "Sign in to personalize profile settings in this browser."}</p>
          </section>
          <section class="metric-grid">
            <div class="metric-card"><span>Drafts</span><strong>3</strong></div>
            <div class="metric-card"><span>Needs review</span><strong>2</strong></div>
            <div class="metric-card"><span>Scheduled</span><strong>4</strong></div>
          </section>
          <section class="admin-workspace" id="admin-queue">
            <div class="admin-toolbar"><div class="segmented-control">${["All", "Draft", "Review", "Ready", "Scheduled"].map((status) => `<button>${status}</button>`).join("")}</div><a class="new-post-button" href="#admin-compose">New post</a></div>
            <div class="admin-table">${postRows()}</div>
          </section>
          ${composePanel()}
          ${profilePanel(profile)}
          ${appearancePanel(settings)}
        </div>
      </div>
    </main>`;
}

function postRows() {
  return `
    <div class="table-row table-head"><span>Post</span><span>Status</span><span>Owner</span><span>Updated</span></div>
    ${posts.map((post) => `
      <div class="table-row">
        <a class="queue-post-link" href="#post/${post.slug}" data-route="#post/${post.slug}"><strong>${escapeHtml(post.title)}</strong><small>${post.category}</small></a>
        <span class="status-pill ${post.status.toLowerCase()}">${post.status}</span>
        <span>${post.owner}</span>
        <span>${post.updated}</span>
      </div>`).join("")}`;
}

function composePanel() {
  return `
    <section class="compose-panel" id="admin-compose">
      <div><p class="eyebrow">Compose</p><h2>New draft</h2></div>
      <div class="draft-form">
        <label>Title<input placeholder="Working title" data-draft-title /></label>
        <label>Category<select><option>Practice</option><option>Process</option><option>Library</option><option>Workflow</option></select></label>
        <label class="wide-field">Summary<textarea rows="4" placeholder="A short note for the post preview"></textarea></label>
      </div>
      <div class="draft-preview"><span>Draft preview</span><strong>Untitled draft</strong><p>Your post summary will appear here.</p></div>
    </section>`;
}

function profilePanel(profile) {
  const initials = profile.displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  return `
    <section class="profile-panel" id="profile-panel">
      <div><p class="eyebrow">Profile</p><h2>User settings</h2></div>
      <div class="profile-card"><div class="avatar">${escapeHtml(initials || "QL")}</div><div><strong>${escapeHtml(profile.displayName)}</strong><span>${escapeHtml(profile.email)}</span><p>${escapeHtml(profile.bio)}</p></div></div>
      <div class="profile-form">
        <label>Display name<input data-profile="displayName" value="${escapeAttr(profile.displayName)}" /></label>
        <label>Email<input data-profile="email" type="email" value="${escapeAttr(profile.email)}" /></label>
        <label>Role<select data-profile="role">${["Owner", "Editor", "Contributor", "Reviewer"].map((role) => `<option ${role === profile.role ? "selected" : ""}>${role}</option>`).join("")}</select></label>
        <label class="wide-field">Bio<textarea data-profile="bio" rows="3">${escapeHtml(profile.bio)}</textarea></label>
      </div>
      <div class="preference-list">
        <label><input data-profile-check="digest" type="checkbox" ${profile.digest ? "checked" : ""}/> Send weekly publishing digest</label>
        <label><input data-profile-check="reviewAlerts" type="checkbox" ${profile.reviewAlerts ? "checked" : ""}/> Notify me when a post needs review</label>
      </div>
    </section>`;
}

function appearancePanel(settings) {
  return `
    <section class="settings-panel" id="admin-settings">
      <div><p class="eyebrow">Settings</p><h2>Site appearance</h2></div>
      <div class="settings-form">
        <label>Site title<input data-setting="title" value="${escapeAttr(settings.title)}" /></label>
        <label>Tagline<textarea data-setting="tagline" rows="3">${escapeHtml(settings.tagline)}</textarea></label>
        ${selectSetting("style", "Style", styles, settings.style)}
        ${selectSetting("heroLayout", "Hero layout", [["split", "Split hero"], ["centered", "Centered title"], ["masthead", "Editorial masthead"]], settings.heroLayout)}
        ${selectSetting("postLayout", "Post layout", [["grid", "Card grid"], ["list", "Reading list"], ["feature", "Featured lead"]], settings.postLayout)}
        ${selectSetting("density", "Spacing", [["comfortable", "Comfortable"], ["compact", "Compact"], ["spacious", "Spacious"]], settings.density)}
      </div>
      <div class="style-options">${styles.map(([value, label]) => `<button class="${settings.style === value ? "active" : ""}" data-style="${value}"><span class="swatch swatch-${value}"></span>${label}</button>`).join("")}</div>
      <div class="settings-strip"><strong>Publishing settings</strong><span>Default status: Draft</span><span>Archive sorting: Newest first</span></div>
    </section>`;
}

function selectSetting(key, label, options, current) {
  return `<label>${label}<select data-setting="${key}">${options.map(([value, text]) => `<option value="${value}" ${value === current ? "selected" : ""}>${text}</option>`).join("")}</select></label>`;
}

function renderProfile(settings) {
  return `<main class="profile-page">${nav(settings)}<div class="site-shell">${profilePanel(getProfile())}</div></main>`;
}

function render(forcedHash) {
  const settings = getSettings();
  applySettings(settings);
  const hash = forcedHash || location.hash || "#home";
  const postMatch = hash.match(/^#post\/(.+)$/);
  if (postMatch) {
    app.innerHTML = renderPost(settings, postMatch[1]);
  } else if (hash.startsWith("#admin")) {
    app.innerHTML = renderAdmin(settings);
  } else if (hash.startsWith("#profile")) {
    app.innerHTML = renderProfile(settings);
  } else {
    app.innerHTML = renderHome(settings);
    if (hash === "#posts" || hash === "#archive") setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
  }
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      routeTo(link.getAttribute("href"));
    });
  });
  document.querySelectorAll("[data-setting]").forEach((field) => {
    field.addEventListener("input", () => saveSettings({ [field.dataset.setting]: field.value }));
  });
  document.querySelectorAll("[data-style]").forEach((button) => {
    button.addEventListener("click", () => saveSettings({ style: button.dataset.style }));
  });
  document.querySelectorAll("[data-profile]").forEach((field) => {
    field.addEventListener("input", () => saveProfile({ [field.dataset.profile]: field.value }));
  });
  document.querySelectorAll("[data-profile-check]").forEach((field) => {
    field.addEventListener("change", () => saveProfile({ [field.dataset.profileCheck]: field.checked }));
  });
  document.querySelectorAll("[data-action='sign-in']").forEach((button) => button.addEventListener("click", signIn));
  document.querySelectorAll("[data-action='sign-out']").forEach((button) => button.addEventListener("click", signOut));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

window.addEventListener("popstate", () => render());
render();
