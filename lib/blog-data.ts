export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // display, e.g. "Jun 2026"
  dateISO: string; // for <time> and sorting
  read: string; // e.g. "6 min read"
  cover: string;
  content: Block[];
};

/* Branded cover generated per post, matching the site palette. */
const cover = (slug: string) => `/blog/${slug}.webp`;

export const POSTS: BlogPost[] = [
  {
    slug: "deploy-ai-built-website-app",
    title: "Built your website or app with ChatGPT or Claude? How to plan and deploy it properly",
    excerpt:
      "AI tools can write working code, but getting it live is a different job. Here is what to check, how to choose hosting, and the mistakes that break AI-built projects in production.",
    category: "Development",
    date: "Oct 2026",
    dateISO: "2026-10-27",
    read: "7 min read",
    cover: cover("deploy-ai-built-website-app"),
    content: [
      {
        type: "p",
        text: "More people than ever are building their own websites and small apps with AI tools like ChatGPT and Claude. That is genuinely useful: you can get a working prototype in an afternoon. The catch is that \"it works on my laptop\" and \"it is live, secure and reliable for customers\" are two different finish lines. To get from one to the other you need to review the code for production problems, choose hosting that matches how the project is built, set up the database and environment settings properly, connect your domain with SSL, and test everything before you send real visitors to it. This guide walks through those steps.",
      },
      { type: "h2", text: "1. Work out what you actually built" },
      {
        type: "p",
        text: "Before choosing hosting, you need to know what kind of project you have, because each type is deployed differently. AI tools will happily mix approaches, so it is worth checking.",
      },
      {
        type: "ul",
        items: [
          "A static site — just HTML, CSS and JavaScript files with no server code. The simplest to host.",
          "A front-end framework app — React, Vue or Next.js. May be fully static or may need a server for some pages.",
          "A back-end app — Node/Express, PHP/Laravel, Python. Needs a server that keeps running and usually a database.",
          "A WordPress site or theme the AI helped you customise — needs PHP hosting with MySQL.",
        ],
      },
      {
        type: "p",
        text: "If you are not sure, look for files like package.json (JavaScript), composer.json (PHP/Laravel) or requirements.txt (Python), and check whether there is any code that talks to a database. That tells you most of what you need.",
      },
      { type: "h2", text: "2. Review the code for things that break in production" },
      {
        type: "p",
        text: "AI-written code is often fine for a demo and fragile in production. These are the problems I find most often when someone sends me a project they built with AI.",
      },
      {
        type: "ul",
        items: [
          "Secrets in the code: API keys, database passwords or payment keys pasted straight into files. These must move into environment variables, and any key that was ever pushed to a public repository should be replaced.",
          "Hard-coded local addresses like localhost or 127.0.0.1 that will not exist on a real server.",
          "No input validation on forms, which leaves the door open to spam and abuse.",
          "Missing error handling, so one failed request crashes the whole app.",
          "Files saved to the local disk on platforms where the disk is wiped on every deploy.",
          "Dependencies pinned to versions that do not exist, or never installed at all.",
        ],
      },
      { type: "h2", text: "3. Choose hosting that fits the project" },
      {
        type: "p",
        text: "The right hosting depends on what you built, not on what is cheapest or most popular. Picking the wrong type is the most common reason a deploy fails.",
      },
      {
        type: "ul",
        items: [
          "Static sites and most Next.js or React apps: platforms like Vercel or Netlify, which build and serve them automatically from a Git repository.",
          "PHP, Laravel and WordPress: shared or managed PHP hosting such as Hostinger or a cPanel host, or a small VPS for more control.",
          "Node, Python or anything that runs continuously: a platform that supports long-running servers, or a VPS you manage.",
          "Anything with a database: a managed database service or the database included with your hosting, with automatic backups switched on.",
        ],
      },
      { type: "h2", text: "4. Set up the database and environment settings" },
      {
        type: "p",
        text: "Most AI-built apps that \"worked locally\" break on the server because something the laptop provided is missing. Create the production database, run the project's migrations or import the schema, and set every environment variable the code expects — database connection, API keys, the site URL, mail settings. Keep a private list of these settings somewhere safe; you will need them again if you ever move hosts.",
      },
      { type: "h2", text: "5. Connect your domain, SSL and email" },
      {
        type: "p",
        text: "Point your domain to the new hosting by updating its DNS records — usually an A record for the main domain and a CNAME for www, or the nameservers your host gives you. Make sure SSL is active so the site loads on https with a padlock; most modern hosts issue a free certificate automatically. If you use the domain for email, be careful not to break the existing mail records when you change DNS, and set up proper sending for contact forms so their emails do not land in spam.",
      },
      {
        type: "quote",
        text: "The deploy is not done when the homepage loads. It is done when the forms send, the payments go through, and it still works on a phone.",
      },
      { type: "h2", text: "6. Test before you tell anyone" },
      {
        type: "ul",
        items: [
          "Click through every page on desktop and on a real phone.",
          "Submit every form and confirm the emails or database entries arrive.",
          "Test sign-up, login and password reset if the app has accounts.",
          "Run a test payment in the provider's test mode before switching to live keys.",
          "Check speed with Google PageSpeed Insights and fix anything badly slow.",
          "Make sure error pages show something friendly, not raw code or stack traces.",
        ],
      },
      { type: "h2", text: "7. Plan for what happens after launch" },
      {
        type: "p",
        text: "A live project needs a few habits to stay healthy: automatic backups of files and database, a simple way to deploy updates (ideally from Git, so you can roll back), uptime monitoring so you know if it goes down, and a note of where everything is hosted and how to log in. AI tools are great for adding features later, but always test changes on a copy before they touch the live site.",
      },
      { type: "h2", text: "When to get help" },
      {
        type: "p",
        text: "This is now one of the most common requests I get: someone has built a site or app with ChatGPT or Claude, it works, and they want it planned and deployed properly. I review the code, fix what will not survive production, choose the right hosting, deploy it, and connect your domain with SSL — and I explain what I did so you can keep building on it. If that sounds like your project, send me a message with what you built and where the code is, and I will come back with a plan and a fixed quote.",
      },
    ],
  },
  {
    slug: "website-down-domain-hosting-expired",
    title: "Domain or hosting expired and your website is gone? How to get it back",
    excerpt:
      "When a domain or hosting plan lapses, a website can disappear overnight. Here is what actually happened, how long you usually have, and the steps to restore the site from backup and get it live again.",
    category: "Business",
    date: "Oct 2026",
    dateISO: "2026-10-26",
    read: "7 min read",
    cover: cover("website-down-domain-hosting-expired"),
    content: [
      {
        type: "p",
        text: "If your website has suddenly disappeared and you realise the domain or hosting renewal was missed, do not panic — in many cases it can be brought back. The first step is to work out which one expired, because a lapsed domain and a lapsed hosting plan fail differently and are fixed differently. Then you renew what can still be renewed, find the most recent backup, restore it to working hosting, reconnect the domain, and set up automatic renewals and backups so it does not happen again. This guide explains each step.",
      },
      { type: "h2", text: "1. Figure out what expired: the domain or the hosting" },
      {
        type: "p",
        text: "Your domain is your address (yourbusiness.com). Your hosting is the server that stores the website's files and database. They are often bought separately, sometimes from different companies, and they expire independently.",
      },
      {
        type: "ul",
        items: [
          "If the domain expired, visitors usually see a parking page from the registrar, an error that the site cannot be reached, or nothing at all. Your email on that domain often stops too.",
          "If the hosting expired, the domain still points somewhere, but you see a suspended-account page, a default host page, or an error.",
          "Look up the domain with a WHOIS tool to see its expiry date and registrar, and check your hosting account for an overdue invoice or suspension notice.",
        ],
      },
      { type: "h2", text: "2. Act fast on an expired domain" },
      {
        type: "p",
        text: "Most registrars do not delete a domain the moment it expires. There is usually a grace period in which the original owner can renew at the normal price, followed by a redemption period in which it can still be recovered for an extra fee. The exact lengths depend on the registrar and the domain extension, so check your registrar's terms straight away. After those periods, the domain can be released and registered by anyone — including people who buy expired domains to resell them. If your domain is still in grace or redemption, renew it immediately and switch on auto-renew.",
      },
      { type: "h2", text: "3. Check whether your hosting files still exist" },
      {
        type: "p",
        text: "Hosting providers usually suspend an unpaid account before they delete it, and the files and database may remain for a while. If you can pay the invoice and reactivate the account, the site may come back exactly as it was. If the account has already been closed, ask the host's support team directly whether a backup is still available — some keep them for a limited time even after closure. Do this quickly; the longer you wait, the less likely the data is still there.",
      },
      { type: "h2", text: "4. Gather every backup you can find" },
      {
        type: "p",
        text: "If the hosting is gone, the site comes back from a backup. Backups are often in more places than people expect, so check them all before assuming the site is lost.",
      },
      {
        type: "ul",
        items: [
          "Your hosting control panel's backup tool, if the account can still be accessed.",
          "WordPress backup plugins such as UpdraftPlus, which may have saved copies to Google Drive, Dropbox or email.",
          "Your own computer or the previous developer's — the original theme and site files are often still around.",
          "A database export (a .sql file) from any earlier migration.",
          "As a last resort, archived copies of pages in public web archives, which can help rebuild content but are not a full restore.",
        ],
      },
      { type: "h2", text: "5. Restore the site to working hosting" },
      {
        type: "p",
        text: "With a backup in hand, the restore follows the same pattern for most sites. Set up hosting (the old account if it can be reactivated, or a new plan such as Hostinger or another provider), upload the site files, create a new database and import the database backup, then update the configuration file — for WordPress that is wp-config.php — with the new database details. If the site address has changed, the URLs stored in the database need updating too. Test the restored site on a temporary address before pointing the domain at it.",
      },
      {
        type: "quote",
        text: "A backup you have never tested is a hope, not a backup. Restoring a copy once a year is the only way to know it works.",
      },
      { type: "h2", text: "6. Reconnect the domain, SSL and email" },
      {
        type: "p",
        text: "Once the site works on the new hosting, point the domain to it by updating the DNS records or nameservers at your registrar. DNS changes can take a few hours to spread. Then make sure an SSL certificate is issued so the site loads securely on https, and recreate any email accounts or mail records that were tied to the old hosting so your business email starts working again.",
      },
      { type: "h2", text: "7. Make sure it never happens again" },
      {
        type: "ul",
        items: [
          "Turn on auto-renew for both the domain and the hosting, with a card that will not expire soon.",
          "Use a business email address you check regularly for renewal notices — not an old personal address.",
          "Keep the domain registered in your own name and account, not the developer's.",
          "Set up automatic backups stored off the server, such as in cloud storage.",
          "Write down where your domain, hosting and email are, with the login details kept somewhere safe.",
        ],
      },
      { type: "h2", text: "Need it done for you?" },
      {
        type: "p",
        text: "I regularly help clients whose websites went offline after a domain or hosting plan expired. I check what can still be recovered, renew and reconnect the domain, restore the most recent backup to reliable hosting, and get SSL and email working again — then set up backups and renewals so it does not repeat. If your site has disappeared, send me the domain and what you know about where it was hosted, and I will tell you honestly what can be saved and what it will cost.",
      },
    ],
  },
  {
    slug: "wordpress-503-error-plugin-fix",
    title: "WordPress 503 error after a plugin update: how to fix it",
    excerpt:
      "A 503 Service Unavailable error can take a WordPress site down in seconds. Here is what usually causes it, how to find the plugin or setting responsible, and how to stop it happening again.",
    category: "Performance",
    date: "Oct 2026",
    dateISO: "2026-10-24",
    read: "6 min read",
    cover: cover("wordpress-503-error-plugin-fix"),
    content: [
      {
        type: "p",
        text: "A 503 Service Unavailable error means the server is reachable but cannot handle the request right now. On WordPress sites, the most common cause by far is a plugin or theme — often right after an update — that crashes PHP or uses up the server's resources. The fix is to confirm it is not just temporary maintenance, turn off plugins without needing the dashboard, find the one responsible, and then fix or replace it. This guide shows how, step by step, and how to make it less likely to happen again.",
      },
      { type: "h2", text: "1. Rule out the quick, harmless causes" },
      {
        type: "p",
        text: "Before changing anything, check whether the 503 is temporary. Wait a couple of minutes and reload. Look at your host's status page or account dashboard for maintenance or server issues. If WordPress was in the middle of updating, a leftover .maintenance file in the site's root folder can keep it in maintenance mode — deleting that file often brings the site straight back. If the error clears on its own and does not return, it was probably a brief spike in traffic or server load.",
      },
      { type: "h2", text: "2. Take a backup before you start" },
      {
        type: "p",
        text: "Even when the site is down, take a backup of the files and database from your hosting panel before you change anything. If a fix goes wrong, you can always return to this point. It takes a few minutes and has saved many sites from a bad situation getting worse.",
      },
      { type: "h2", text: "3. Disable all plugins without the dashboard" },
      {
        type: "p",
        text: "When the site shows a 503 you usually cannot log in to wp-admin, so you disable plugins at the file level instead. Connect with your host's File Manager or an FTP client, open the wp-content folder, and rename the plugins folder to something like plugins-off. WordPress cannot find the plugins, so it deactivates them. Reload the site.",
      },
      {
        type: "ul",
        items: [
          "If the site comes back, a plugin is the cause. Rename the folder back to plugins.",
          "Then rename each individual plugin folder one at a time, reloading the site each time, until the 503 returns — the last one you re-enabled is the culprit.",
          "If the site is still down with all plugins off, the problem is likely the theme, the PHP version or the server's resources.",
        ],
      },
      { type: "h2", text: "4. Check the theme" },
      {
        type: "p",
        text: "To test the theme, rename your active theme's folder inside wp-content/themes. WordPress will fall back to a default theme such as Twenty Twenty-Four if one is installed. If that brings the site back, the theme — or a recent change to it — is the problem. Custom theme edits, especially code added to functions.php, are a common cause.",
      },
      { type: "h2", text: "5. Read the error logs" },
      {
        type: "p",
        text: "Guessing works, but logs are faster. Your hosting panel usually has an error log, and WordPress can write its own if you enable debug logging in wp-config.php by setting WP_DEBUG and WP_DEBUG_LOG to true (and WP_DEBUG_DISPLAY to false, so errors are not shown to visitors). The log will often name the exact plugin file and line that crashed, or point to memory limits and timeouts. Remember to switch debugging off once you have finished.",
      },
      { type: "h2", text: "6. Check PHP version and server resources" },
      {
        type: "p",
        text: "If no plugin or theme is to blame, look at the server. A recent PHP version change can break older plugins and themes, so check which PHP version is active in your hosting panel and whether your plugins support it. A 503 can also mean the site is running out of memory or hitting process limits — common on cheaper shared hosting when traffic spikes or a heavy plugin runs. Raising the PHP memory limit, enabling caching, or moving to a better hosting plan can solve this.",
      },
      {
        type: "quote",
        text: "Most 503 errors are not mysterious. They are one plugin, one theme change or one server limit — the job is finding which.",
      },
      { type: "h2", text: "7. Fix the cause, not just the symptom" },
      {
        type: "ul",
        items: [
          "If a plugin is responsible, check for an update that fixes the bug, roll back to the previous version, or replace it with a better-maintained alternative.",
          "If it is the theme, undo the recent change or ask the theme developer for a fix.",
          "If it is PHP, update the incompatible plugins or temporarily switch to a supported PHP version while you do.",
          "If it is resources, add caching, remove plugins you do not need, and consider better hosting.",
        ],
      },
      { type: "h2", text: "How to stop it happening again" },
      {
        type: "ul",
        items: [
          "Update plugins one at a time, not all at once, so you know which update caused a problem.",
          "Test major updates on a staging copy of the site first — many hosts offer one-click staging.",
          "Keep automatic daily backups stored off the server.",
          "Remove plugins you no longer use; every one is another thing that can break.",
          "Use uptime monitoring so you hear about a 503 before your customers do.",
        ],
      },
      { type: "h2", text: "Want someone to fix it now?" },
      {
        type: "p",
        text: "I have fixed plenty of WordPress sites taken down by a 503 after a plugin update. I find the cause from the logs, get the site back online safely, fix or replace the faulty plugin, and set up backups and update practices so it does not keep happening. If your site is down right now, send me the address and what changed before it broke, and I will reply within 24 hours with what is wrong and a fixed price to fix it.",
      },
    ],
  },
  {
    slug: "local-seo-guide-service-businesses",
    title: "Local SEO for service businesses: a step-by-step guide",
    excerpt:
      "How plumbers, clinics, contractors and other local service businesses can show up in the map pack and local results — from Google Business Profile to service-area pages, reviews and tracking.",
    category: "SEO",
    date: "Oct 2026",
    dateISO: "2026-10-22",
    read: "8 min read",
    cover: cover("local-seo-guide-service-businesses"),
    content: [
      {
        type: "p",
        text: "If you run a service business — a plumber, an electrician, a dental clinic, a landscaper, a cleaning company — most of your customers find you the same way: they type what they need plus a place, or simply \"near me\", and pick from the first few results. Local SEO is the work of making sure you are one of those results. The short version: get your Google Business Profile right, make your name, address and phone number consistent everywhere, build one genuinely useful page per service and per area you cover, collect reviews steadily, and measure the calls and forms that come in. This guide walks through each step in the order I would do it for a client.",
      },
      { type: "h2", text: "1. Understand what you are actually competing for" },
      {
        type: "p",
        text: "A local search usually shows two kinds of results. At the top there is the map pack — the three businesses shown with a map, star ratings and a call button. Below that are the normal organic results. They are ranked differently. The map pack leans heavily on your Google Business Profile, how close you are to the searcher, and your reviews. The organic results lean on your website: its pages, its content and the links pointing to it. A good local strategy works on both, because a customer who sees you in the map pack and again in the results below is far more likely to call you than the business that appears once.",
      },
      {
        type: "p",
        text: "It also helps to be honest about distance. Google will rarely show a business in the map pack for a searcher on the other side of a big city, however good its profile is. You cannot fake proximity, so focus on the areas you genuinely serve and make sure you dominate those before stretching further out.",
      },
      { type: "h2", text: "2. Set up your Google Business Profile properly" },
      {
        type: "p",
        text: "Your Google Business Profile is the single most important local SEO asset you have, and most businesses fill it in once and forget it. Treat it as a second homepage. Every field you complete gives Google more confidence about what you do and where.",
      },
      {
        type: "ul",
        items: [
          "Choose the most specific primary category you can — \"Emergency plumber\" says more than \"Plumber\" if that is your main work — then add secondary categories for other services.",
          "If you visit customers rather than having them visit you, set a service area and hide your street address instead of listing a home address.",
          "Fill in every service with a short description, and add your real opening hours, including holiday hours.",
          "Upload genuine photos of your team, vehicles, premises and finished jobs. Stock photos do nothing for trust.",
          "Post updates every week or two — a recent job, a seasonal offer, a tip. It keeps the profile active and gives searchers a reason to choose you.",
          "Use the Q&A section to answer the questions you get asked on the phone every day.",
        ],
      },
      { type: "h2", text: "3. Make your name, address and phone number consistent everywhere" },
      {
        type: "p",
        text: "Search engines cross-check your business details across the web: your website, your Google profile, directories, social profiles and industry listings. When they all match exactly, it reinforces that you are a real, established business at that location. When one directory has an old phone number and another has a slightly different business name, that confidence drops. The fix is unglamorous but effective: decide on one exact format for your name, address and phone number, put it in the footer of your website, and then work through every listing you can find and make it match.",
      },
      {
        type: "ul",
        items: [
          "Start with the big platforms: Google, Bing Places, Apple Business Connect, Facebook and Yelp or the equivalent in your country.",
          "Then cover industry directories that customers actually use in your trade.",
          "Search for your old phone numbers and old addresses to find stale listings you forgot about.",
          "Use a local phone number on the website rather than only a mobile or a national call-centre number where you can.",
        ],
      },
      { type: "h2", text: "4. Build a real page for every service" },
      {
        type: "p",
        text: "One of the most common problems I see is a website with a single \"Services\" page that lists ten things in bullet points. Google has nothing substantial to rank for any of them. Each core service deserves its own page: what it is, who it is for, what the process looks like, typical price ranges or what affects the price, common questions, photos of real jobs, and a clear way to get a quote. A page like that answers the searcher's question and gives Google a clear signal about what you offer.",
      },
      {
        type: "p",
        text: "Write these pages for the customer, not for a keyword tool. If someone needs a boiler repaired, they want to know how fast you can come out, whether you cover their make of boiler, and roughly what it might cost. Answer those plainly and the right keywords appear naturally.",
      },
      { type: "h2", text: "5. Add area pages — but only if they say something real" },
      {
        type: "p",
        text: "If you serve several towns or suburbs, location pages can help you rank in each of them. This is also where a lot of businesses get it badly wrong. Twenty pages that are identical apart from the town name are thin content, and search engines treat them as doorway pages. They rarely rank and can drag the rest of the site down with them.",
      },
      {
        type: "p",
        text: "A location page earns its place when it contains something specific to that area: jobs you have done there with photos, the neighbourhoods you cover, local considerations (older housing stock, planning rules, water hardness, whatever matters in your trade), travel times or call-out arrangements, and reviews from customers in that area. If you cannot write anything genuinely local about a place, it is better to cover it on a broader regional page than to create a hollow one.",
      },
      {
        type: "quote",
        text: "A good test for any area page: if you swapped the town name for another one, would the page still be true? If yes, it is not a local page yet.",
      },
      { type: "h2", text: "6. Collect reviews steadily, and reply to all of them" },
      {
        type: "p",
        text: "Reviews influence both rankings and the decision to call. What matters is not just the star rating but the number of reviews, how recent they are, and what they say. A burst of twenty reviews two years ago and nothing since looks worse than a steady trickle every month. The easiest way to get there is to make asking part of finishing every job.",
      },
      {
        type: "ul",
        items: [
          "Send a short message with a direct review link within a day of finishing the job, while the customer is still happy.",
          "Ask customers to mention the service and area in their own words — never script or incentivise reviews, which breaks platform rules.",
          "Reply to every review, good or bad. A calm, helpful reply to a complaint often wins more trust than a page of five-star ratings.",
          "Show recent reviews on your website, on the relevant service pages, not just on a separate testimonials page.",
        ],
      },
      { type: "h2", text: "7. Earn local links and mentions" },
      {
        type: "p",
        text: "Links from other websites still matter, and for a local business the most valuable ones are local. You do not need hundreds; a handful of genuine, relevant links can make a real difference in a local market. Think about the relationships you already have: suppliers who list approved installers, local business associations, a sports team or event you sponsor, a community group you help, a local news story about a project. Each of these is a natural reason for another local site to mention and link to you, and they are far more valuable than anything you could buy.",
      },
      { type: "h2", text: "8. Get the technical basics right on your website" },
      {
        type: "p",
        text: "Most local searches happen on a phone, often by someone who needs help quickly. If your site is slow, hard to use on mobile, or hides the phone number, you lose the customer even if you rank. Make sure the basics are in place.",
      },
      {
        type: "ul",
        items: [
          "A tap-to-call phone number and a short quote form visible without scrolling on mobile.",
          "Fast load times — compress photos and avoid heavy page builders where possible.",
          "LocalBusiness structured data (schema) with your name, address, phone, opening hours and service area.",
          "A clear title and description on each page that includes the service and the area in plain language.",
          "An embedded map and directions on your contact page if customers visit you.",
        ],
      },
      { type: "h2", text: "9. Track calls and forms, not just rankings" },
      {
        type: "p",
        text: "Rankings are a means to an end. What you actually want is more calls, messages and quote requests from the right kind of customer. Set up tracking so you can see where enquiries come from: Google Business Profile insights for calls and direction requests, analytics events for form submissions and phone-link taps, and if your volume justifies it, call tracking numbers. Review it monthly. Over a few months you will see which services and areas bring in work, and you can put more effort into those pages and less into the ones that do not move.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "If this feels like a lot, start with the steps that have the biggest effect for the least effort: complete your Google Business Profile, fix your business details across the main platforms, and start asking every happy customer for a review. Then build out proper service pages, and add area pages only where you have something real to say. Local SEO is not a one-off project; it is a set of good habits that compound over time.",
      },
      {
        type: "p",
        text: "If you would rather have it done for you, I build fast, mobile-first websites for service businesses with the local SEO foundations — service pages, area pages, schema and tracking — set up properly from day one. Send me a message with your trade and the areas you cover, and I will tell you honestly where the quickest wins are.",
      },
    ],
  },
  {
    slug: "real-estate-website-lead-generation",
    title: "What a real estate website needs to generate leads in 2026",
    excerpt:
      "The features that turn a property website from an online brochure into a lead source: fast listing search, strong property pages, seller valuation capture, area guides, CRM integration and speed with heavy photography.",
    category: "Strategy",
    date: "Oct 2026",
    dateISO: "2026-10-14",
    read: "7 min read",
    cover: cover("real-estate-website-lead-generation"),
    content: [
      {
        type: "p",
        text: "A real estate website generates leads when it does two jobs well: it lets buyers and tenants find and compare properties without friction, and it gives sellers and landlords an obvious reason to get in touch. Most agency sites only do the first job, and often slowly. The features that make the difference are fast search and filtering, property pages built to convert, a dedicated valuation route for sellers, local area content the big portals cannot match, a proper connection to your CRM, and performance that holds up under heavy photography. This guide goes through each one and what good looks like.",
      },
      { type: "h2", text: "1. Accept that you will not beat the portals at their own game" },
      {
        type: "p",
        text: "The major property portals have enormous inventories, huge brand recognition and a lot of search authority. Trying to outrank them for broad searches like \"houses for sale\" in a big city is usually a waste of budget. That is fine, because your website has a different job. Buyers often see a property on a portal first, then come to your site to check you out, see your other listings, or contact you directly. Sellers, in particular, research agents before choosing one. Your site wins by being the best place to learn about you, your listings and your area — not by being a smaller portal.",
      },
      { type: "h2", text: "2. Listing search that stays fast" },
      {
        type: "p",
        text: "Search is the most-used feature on any property site, so it has to feel instant. Visitors should be able to filter by the things they actually care about and see results update without waiting for full page reloads.",
      },
      {
        type: "ul",
        items: [
          "Filters for price range, property type, bedrooms, bathrooms, area and whether it is for sale or rent.",
          "Sorting by newest, price and, where relevant, distance.",
          "A map view alongside the list view, because location is often the first question.",
          "Results that keep their filters when a visitor goes into a property and comes back.",
          "Shareable URLs for searches, so a couple can send each other the same set of results.",
        ],
      },
      {
        type: "p",
        text: "Under the hood, this means a properly indexed database and pagination or lazy loading, so the site does not slow down as your portfolio grows from twenty listings to two hundred.",
      },
      { type: "h2", text: "3. Property pages built to convert" },
      {
        type: "p",
        text: "The property page is where interest turns into an enquiry, so every one should answer the obvious questions and make the next step easy. A gallery of large, sharp photos is essential, but so is everything around it.",
      },
      {
        type: "ul",
        items: [
          "Key facts at the top: price, size, bedrooms, bathrooms, tenure or lease details, and availability.",
          "A floor plan and, where you have them, a video walkthrough or virtual tour.",
          "A map with nearby schools, transport and amenities.",
          "A clear, short enquiry form or viewing request on the page itself — not a link to a generic contact page.",
          "Enquiries routed to the agent responsible for that property, with the property reference attached.",
          "Similar properties at the bottom, so a visitor who is not quite convinced keeps browsing.",
        ],
      },
      { type: "h2", text: "4. A dedicated path for sellers and landlords" },
      {
        type: "p",
        text: "Here is the part most agency websites miss. Buyers are plentiful; instructions to sell or let are what keep an agency in business. Yet sellers often land on a site built entirely around listings, with nothing but a general contact form for them. Give them their own route: a clear \"What is my property worth?\" call to action on the homepage and in the navigation, leading to a short valuation request form. Ask only what you need to book the appraisal — address, property type, a rough timeline and contact details. An instant online estimate can be a useful hook if your data supports it, but the real goal is a booked valuation appointment.",
      },
      {
        type: "quote",
        text: "Treat every seller who visits your site as the most valuable lead you will get that week — because they usually are.",
      },
      { type: "h2", text: "5. Area guides: where you can genuinely outrank the portals" },
      {
        type: "p",
        text: "Local knowledge is the one thing the big portals cannot replicate at scale, and it is exactly what buyers moving to a new area are searching for. Well-written area guides — covering neighbourhoods, schools, transport links, typical property types, what it is like to live there and recent market activity you can speak to — attract people early in their search and position you as the local expert. They also give sellers confidence that you understand their area. Link each guide to your current listings in that area, and keep the guides updated; a guide that mentions a school or development that changed years ago does more harm than good.",
      },
      { type: "h2", text: "6. Connect to your CRM and listing feeds" },
      {
        type: "p",
        text: "If your team has to enter each property twice — once in the agency software and again on the website — listings will eventually drift out of sync, and sold properties will stay online. Most property CRMs offer a feed or an API. A well-built website pulls listings from that source automatically, so price changes and status updates appear without anyone touching the site. In the other direction, enquiries from the website should land in the CRM with the property reference and source attached, so nothing gets lost in a shared inbox and you can see which listings and pages actually produce leads.",
      },
      { type: "h2", text: "7. Speed, even with heavy photography" },
      {
        type: "p",
        text: "Property sites are image-heavy by nature, which makes them easy to slow down. A slow site loses visitors on mobile, where many property searches happen during a commute or in the evening on the sofa. The fixes are well established.",
      },
      {
        type: "ul",
        items: [
          "Serve images in modern formats like WebP or AVIF, at the size each screen actually needs.",
          "Lazy-load gallery images below the first one, so the page appears quickly.",
          "Use a content delivery network so photos load fast wherever the visitor is.",
          "Keep third-party scripts — chat widgets, trackers, embedded maps — under control and load them only where needed.",
        ],
      },
      { type: "h2", text: "8. Give buyers a reason to come back" },
      {
        type: "p",
        text: "Most people do not buy or rent the first property they look at. If they leave your site with no way to hear about new listings, they will go back to the portals. Saved searches and email alerts for new properties matching their criteria solve this, and they turn an anonymous visitor into a contact you can follow up with. Even a simple \"register for new listings\" form, with a few preferences, is better than nothing.",
      },
      { type: "h2", text: "9. Structured data and the SEO basics" },
      {
        type: "p",
        text: "Search engines understand listings better when they are marked up with structured data describing the property, price and location, and your agency with organisation and local business details. Each property and area page should have a clear, unique title and description, and sold or let properties should be handled deliberately — either kept as a record with a clear status or redirected sensibly — rather than left to return errors.",
      },
      { type: "h2", text: "Developments and project sites" },
      {
        type: "p",
        text: "If you are a developer or work with one, a single housing scheme or project often deserves its own site or section, separate from general listings: masterplans, phases, plot or unit availability, specifications, payment plans, progress updates and a dedicated enquiry flow. I built this kind of site for DHA Bahawalpur, a housing authority, where residents and buyers needed project details and information in one clear place.",
      },
      { type: "h2", text: "Putting it together" },
      {
        type: "p",
        text: "A property website that generates leads is not about flashy animation. It is fast search, convincing property pages, a clear path for sellers, local content you can own, a clean connection to your CRM, and speed that survives a gallery of photos. Get those right and the site becomes a working part of your agency rather than an online brochure.",
      },
      {
        type: "p",
        text: "If you are planning a new property website or want to improve the one you have, get in touch. Tell me how your agency works and which CRM you use, and I will come back with a clear plan and a fixed quote.",
      },
    ],
  },
  {
    slug: "laravel-vs-wordpress-custom-web-app",
    title: "Laravel vs WordPress: when your business needs a custom web app",
    excerpt:
      "WordPress is great for content sites, but bookings, portals, dashboards and multi-role logins can outgrow it. Here is how to tell when a custom Laravel application is the better choice, and what it costs in time and upkeep.",
    category: "Development",
    date: "Oct 2026",
    dateISO: "2026-10-06",
    read: "7 min read",
    cover: cover("laravel-vs-wordpress-custom-web-app"),
    content: [
      {
        type: "p",
        text: "If your website mainly publishes content — pages about your services, a blog, a portfolio, a contact form — WordPress is usually the right choice. It is quick to build, easy for your team to edit, and has an enormous ecosystem. When the site has to run part of your business — bookings with rules, customer portals, dashboards, several user roles, complex integrations or custom workflows — a custom application built with a framework like Laravel is usually the better long-term choice. Both are built on PHP, but they solve different problems. This guide explains how to tell which one your project needs.",
      },
      { type: "h2", text: "What WordPress is genuinely good at" },
      {
        type: "p",
        text: "WordPress started as a blogging platform and grew into a content management system that powers a huge share of the web. Its strengths are real and they matter for most business websites.",
      },
      {
        type: "ul",
        items: [
          "Your team can add pages, edit text and publish posts without a developer.",
          "A large library of themes and plugins covers common needs like forms, SEO and simple e-commerce.",
          "It is quick to launch — a well-built business site can go live in a few weeks.",
          "Plenty of developers know it, so you are never locked to one person.",
        ],
      },
      {
        type: "p",
        text: "For a services business, a clinic, a consultancy, a local trade or a content-led brand, those strengths usually outweigh everything else. I build plenty of WordPress sites for exactly that reason.",
      },
      { type: "h2", text: "Signs you are outgrowing WordPress" },
      {
        type: "p",
        text: "The trouble starts when a website is asked to behave like software. You can bend WordPress a long way with plugins, but each plugin brings its own code, its own update cycle and its own assumptions about how things should work. Past a certain point, the site becomes a fragile stack of add-ons held together by workarounds. Watch for these signs.",
      },
      {
        type: "ul",
        items: [
          "You need several kinds of users — customers, staff, managers, partners — each seeing and doing different things.",
          "Bookings, quotes or orders follow your own rules: availability, approvals, pricing logic, deposits, cancellations.",
          "Customers need a portal to log in, track jobs, download documents or pay invoices.",
          "Your team wants dashboards and reports built from the data the site collects.",
          "The site has to sync with other systems — accounting, CRM, inventory, shipping, an internal tool — reliably, in both directions.",
          "You are already paying for many premium plugins and every update makes you nervous.",
        ],
      },
      {
        type: "p",
        text: "If two or three of those describe your plans, it is worth seriously considering a custom application.",
      },
      { type: "h2", text: "What Laravel gives you instead" },
      {
        type: "p",
        text: "Laravel is a PHP framework for building web applications. Rather than starting from a finished website and adding features through plugins, you start from a solid foundation and build exactly the features your business needs. It comes with well-tested building blocks for the hard parts of application development.",
      },
      {
        type: "ul",
        items: [
          "Authentication, user roles and permissions, so each type of user sees only what they should.",
          "A clean way to model your data — customers, jobs, bookings, invoices — and the relationships between them.",
          "Queues and scheduled tasks for things that happen in the background, like sending reminders or syncing with another system overnight.",
          "Solid tools for building APIs, so a mobile app or another system can talk to your platform.",
          "Built-in protection against common security issues and a mature testing setup.",
        ],
      },
      {
        type: "p",
        text: "The result is software shaped around how your business actually works, instead of a business process bent to fit whatever a plugin allows.",
      },
      { type: "h2", text: "The honest trade-offs: time, cost and editing" },
      {
        type: "p",
        text: "A custom application is not the right answer for everyone, and it is worth being clear about what it costs. It takes longer to build than a WordPress site because the features are designed and written for you rather than installed. It usually costs more up front for the same reason. A simple content site might be weeks of work; a custom platform with portals and dashboards is often a matter of months, typically delivered in phases so you can start using the core features early.",
      },
      {
        type: "p",
        text: "Content editing also works differently. In WordPress, editing is built in. In a Laravel application, the admin panel is built for your specific data, which makes it excellent for managing bookings or customers but means a general page builder is not there by default. Many businesses solve this by keeping a WordPress or headless content site for marketing pages and running the application alongside it.",
      },
      {
        type: "quote",
        text: "The question is not which platform is better. It is whether your website mainly publishes information or mainly runs a process.",
      },
      { type: "h2", text: "Maintenance and security over the long run" },
      {
        type: "p",
        text: "Both options need looking after. A WordPress site needs regular core, theme and plugin updates, and the more plugins it has, the more can go wrong — conflicts, abandoned plugins and security issues are the most common reasons a WordPress site breaks. A Laravel application has fewer moving parts from third parties, but it is your own codebase, so it needs a developer who understands it for updates and new features. Good documentation, clean code and automated tests matter a great deal here; they are what let you hand the project to another developer one day without starting again.",
      },
      { type: "h2", text: "You do not always have to choose one" },
      {
        type: "p",
        text: "Many of the best setups use both. A fast WordPress site handles the marketing pages, blog and SEO, where easy editing matters most. A Laravel application runs behind a login for the parts that are really software: the customer portal, booking engine or internal dashboard. Each tool does what it is best at, and visitors move between them without noticing.",
      },
      { type: "h2", text: "A quick decision checklist" },
      {
        type: "ul",
        items: [
          "Mostly pages, posts and a contact form? WordPress.",
          "An online shop with standard checkout? Shopify or WooCommerce, not a custom build.",
          "Logins with different roles, custom booking or pricing rules, portals or dashboards? Laravel or another application framework.",
          "Heavy integrations with other business systems that must stay in sync? A custom application.",
          "A content site now, with software features planned later? Start with WordPress, and plan the application as a separate phase.",
        ],
      },
      { type: "h2", text: "Choosing for your business" },
      {
        type: "p",
        text: "I work with both. I recently built Discover Times, a website for a home decoration studio, on Laravel and PHP, and I build WordPress sites regularly for businesses whose needs are mainly content. The right choice depends on what the site has to do, how your team will use it, and where the business is heading over the next few years — not on which tool a developer happens to prefer.",
      },
      {
        type: "p",
        text: "If you are not sure which side of the line your project falls on, send me a short description of what you want the site to do. I will tell you honestly whether WordPress will cover it or whether a custom application is worth the investment, and give you a fixed quote either way.",
      },
    ],
  },
  {
    slug: "how-to-build-business-website-usa",
    title: "How to build a business website in the USA (a practical 2026 guide)",
    excerpt:
      "A step-by-step guide to building a business website in the USA, from choosing a platform and domain to SEO, accessibility, and launch, with realistic USD costs.",
    category: "Web Development",
    date: "Jul 2026",
    dateISO: "2026-07-16",
    read: "9 min read",
    cover: cover("how-to-build-business-website-usa"),
    content: [
      {
        type: "p",
        text: "For a business in the United States, a website is no longer optional. It is where customers check if you are real, compare you to competitors, and decide whether to call. The good news is that building a professional business website is more achievable than most owners think, as long as you approach it in the right order. This guide walks through exactly how to build a business website in the USA that loads fast, ranks on Google, and turns visitors into customers.",
      },
      { type: "h2", text: "1. Start with a clear goal, not a design" },
      {
        type: "p",
        text: "Before anyone picks colours or fonts, decide what the site is actually for. Do you want phone calls, online orders, booked appointments, or quote requests? A plumber in Texas and a boutique in New York need very different sites. Write down the single most important action you want a visitor to take, then design every page to lead toward it. A site with a clear goal will always outperform a pretty site with no direction.",
      },
      { type: "h2", text: "2. Secure your domain and hosting" },
      {
        type: "p",
        text: "Your domain is your address on the web, so choose one that is short, memorable, and ideally matches your business name. A dot com is still the most trusted choice for US businesses. For hosting, avoid the cheapest shared plans, because a slow server undermines everything else you do. Managed hosting or a modern platform pays for itself in speed and reliability.",
      },
      {
        type: "ul",
        items: [
          "Pick a dot com if it is available, and keep the name easy to spell out over the phone.",
          "Register the domain in your own name or company, never through a developer's account.",
          "Choose hosting with fast US-based servers so your American visitors get quick load times.",
        ],
      },
      { type: "h2", text: "3. Choose the right platform" },
      {
        type: "p",
        text: "There is no single best platform, only the best fit for your goals. WordPress is a great choice if you want to edit content yourself and add a blog. Shopify is built for online stores. For a fast, custom, app-like experience, a modern framework like Next.js is hard to beat. If you are not sure, a good developer will recommend the platform that matches your budget and the way you plan to run the site, not the one that is easiest for them.",
      },
      { type: "h2", text: "4. Design for mobile first" },
      {
        type: "p",
        text: "More than half of US web traffic comes from phones, and Google judges your site on its mobile version. That means the phone layout is not an afterthought, it is the main event. Keep navigation simple, make buttons easy to tap, and put your phone number and main call to action within thumb reach. A clean, fast mobile experience will win you more business than any desktop animation.",
      },
      { type: "h2", text: "5. Build in SEO from the first line" },
      {
        type: "p",
        text: "Search engine optimisation is far cheaper to do during the build than to bolt on later. Done right, it is what gets your business found when someone in your city searches for what you offer. The technical foundations matter as much as the words on the page.",
      },
      {
        type: "ul",
        items: [
          "Give every page a unique, keyword-focused title and meta description.",
          "Use clean, readable URLs without random numbers or parameters.",
          "Add local business schema so Google understands your address and services.",
          "Claim and complete your Google Business Profile for local search and maps.",
        ],
      },
      { type: "h2", text: "6. Make it accessible" },
      {
        type: "p",
        text: "Accessibility is both good practice and increasingly expected of US businesses. Building your site so it works for people using screen readers or keyboard navigation widens your audience and reduces legal risk. Proper heading structure, descriptive alt text on images, and strong colour contrast cover most of the basics and also happen to help your SEO.",
      },
      { type: "h2", text: "7. What it costs in USD" },
      {
        type: "p",
        text: "Prices vary widely because a one-page site and a custom store are very different projects. As a rough guide, a simple professional site sits at the lower end of a few hundred to a couple of thousand dollars, a custom business site with several pages and solid SEO lands in the mid range, and a full online store or web app costs more because of the complexity involved. Whatever the budget, insist on a fixed quote upfront so there are no surprises.",
      },
      { type: "h2", text: "8. Test, launch, and keep it healthy" },
      {
        type: "p",
        text: "Before going live, test the site on real phones and browsers, submit a test through every form, and check your load speed. After launch, a website is not finished, it is running. Keep the platform updated, watch your performance, and refresh content so it keeps ranking and converting long after the launch day excitement fades.",
      },
      { type: "h2", text: "Plan your pages before you build" },
      {
        type: "p",
        text: "A little planning saves a lot of rebuilding. Before anyone writes a line of code, sketch out the pages your business actually needs. Most US business websites do well with a strong home page, an about page that builds trust, a clear services or products page, proof in the form of reviews or case studies, and an easy contact page. Map how a visitor moves from landing on your site to getting in touch, and cut anything that does not serve that journey. A focused five-page site that converts will beat a sprawling twenty-page site that confuses people every time.",
      },
      { type: "h2", text: "Write copy that speaks to US customers" },
      {
        type: "p",
        text: "Design gets attention, but words do the selling. Write the way your customers speak, lead with the benefit rather than the feature, and answer the questions they are quietly asking: can you solve my problem, can I trust you, and what happens next. Keep paragraphs short, use clear headings so people can scan, and put a call to action on every page. Good copy is also good SEO, because naturally using the terms your American customers search for helps you rank without resorting to awkward keyword stuffing.",
      },
      { type: "h2", text: "Add trust signals that reassure buyers" },
      {
        type: "p",
        text: "US buyers research before they commit, so make it easy to trust you. Real customer reviews, recognisable client logos, clear contact details with a US phone number, and any certifications or guarantees all quietly reduce the risk a visitor feels. Even small touches, like genuine photos instead of generic stock and a visible privacy policy, make your business feel established and safe to deal with.",
      },
      { type: "h2", text: "Set up analytics from day one" },
      {
        type: "p",
        text: "You cannot improve what you do not measure. Before launch, connect analytics and set up basic conversion tracking so you can see how many visitors you get, where they come from, and how many turn into enquiries or sales. This data turns your website from a guess into a tool you can steadily improve, doubling down on what works and quietly fixing what does not.",
      },
      { type: "h2", text: "Do you need a designer, a developer, or both?" },
      {
        type: "p",
        text: "For a straightforward site, one skilled developer who also handles design can cover everything, which is usually faster and cheaper than juggling several freelancers. For a bigger brand project you may want a dedicated designer as well. What matters most is working with someone who takes ownership of the result, communicates clearly, and can explain their choices in plain language. Always ask to see real, live examples of their work, not just polished mockups that were never actually built.",
      },
      { type: "h2", text: "Keep it secure, backed up, and give it time" },
      {
        type: "p",
        text: "A hacked or broken business website damages both your reputation and your rankings, so keep your platform updated, use strong passwords with two-factor authentication, and make sure automatic backups are running. It is also worth remembering that a brand new site does not rank overnight. Google needs time to crawl, index, and trust your pages, so keep publishing useful content and stay patient. The businesses that win in US search treat their website as an ongoing asset, not a one-time project they forget the week after launch.",
      },
      { type: "h2", text: "Common mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Choosing the cheapest hosting and then wondering why the site feels slow.",
          "Hiding your phone number or contact form instead of making it impossible to miss.",
          "Launching without testing every form, so enquiries silently never arrive.",
          "Treating SEO as an afterthought rather than building it in from the first page.",
          "Never touching the site again after launch and watching the rankings slip away.",
        ],
      },
      {
        type: "quote",
        text: "A business website is an investment that should pay you back in leads and sales. Build it with a goal, speed, and SEO in mind, and it will keep earning for years.",
      },
      {
        type: "p",
        text: "If you would rather have all of this handled for you, this is exactly the kind of build I do for US businesses, remotely and with clear USD pricing. Tell me your goal and I will come back with a plan and a fixed quote within 24 hours.",
      },
    ],
  },
  {
    slug: "best-website-design-small-business-australia",
    title: "The best website design for a small business in Australia",
    excerpt:
      "What great website design looks like for Australian small businesses in 2026: mobile-first, fast, local-SEO ready, and built to turn visitors into paying customers.",
    category: "Strategy",
    date: "Jul 2026",
    dateISO: "2026-07-12",
    read: "8 min read",
    cover: cover("best-website-design-small-business-australia"),
    content: [
      {
        type: "p",
        text: "Australian customers are online, on their phones, and quick to judge. For a small business in Australia, good website design is not about winning awards, it is about earning trust in the first few seconds and making it effortless to get in touch. Here is what the best website design for a small Australian business actually looks like in 2026, and why each piece matters for your bottom line.",
      },
      { type: "h2", text: "Mobile first is not optional" },
      {
        type: "p",
        text: "The majority of Australians browse on their phones, so your website has to be designed for the small screen before anything else. That means large, tappable buttons, text that is readable without zooming, and a layout that never forces sideways scrolling. If a customer in Sydney or Perth has to pinch and squint, they will leave and call the competitor whose site just worked.",
      },
      { type: "h2", text: "Speed builds trust" },
      {
        type: "p",
        text: "A slow site feels untrustworthy, and Australian visitors will not wait. Good design keeps pages light, images optimised, and load times under a couple of seconds. Speed is also a Google ranking factor, so a fast site both keeps visitors happy and helps you climb the search results. It is one of the highest-value design decisions a small business can make.",
      },
      { type: "h2", text: "Clear structure and a single focus" },
      {
        type: "p",
        text: "The best small business sites are not cluttered. Each page has one clear job and one obvious next step, whether that is calling you, booking a service, or requesting a quote. A confused visitor does nothing, so strong design removes distractions and guides people gently toward getting in touch.",
      },
      {
        type: "ul",
        items: [
          "Put your phone number and main call to action where they are always easy to reach.",
          "Use clear headings so visitors can scan and find what they need in seconds.",
          "Keep menus short, because too many options make people freeze.",
        ],
      },
      { type: "h2", text: "Built for local search" },
      {
        type: "p",
        text: "Most small businesses serve a local area, so your design and setup should help you show up when nearby customers search. That means location-focused content, local business schema, and a complete Google Business Profile. Ranking for searches like your service plus your suburb or city is often where the real leads come from for Australian small businesses.",
      },
      { type: "h2", text: "Trust signals that reassure" },
      {
        type: "p",
        text: "Australians do their research before they buy. Good design makes it easy to trust you by featuring genuine reviews, clear contact details, honest photos, and any relevant credentials or guarantees. These small touches quietly answer the question every visitor is asking: can I rely on this business?",
      },
      { type: "h2", text: "Design that reflects your brand" },
      {
        type: "p",
        text: "Your website should look and feel like your business, not a generic template. A consistent colour palette, a clean logo, and a tone of voice that matches how you talk to customers all make you memorable. For a small business, that sense of a real, considered brand is what separates you from the competitor using a stock theme they never customised.",
      },
      { type: "h2", text: "What it costs, and what to expect" },
      {
        type: "p",
        text: "Quality small business design in Australia does not have to break the bank, but a price that seems too good to be true usually is. Cheap builds often skip the SEO, speed, and testing that make a site actually work. Expect a fixed quote in AUD, a clear timeline, and a developer who explains their choices in plain language rather than jargon.",
      },
      { type: "h2", text: "A tone that suits Australian customers" },
      {
        type: "p",
        text: "Australians tend to respond to a straightforward, down-to-earth tone rather than hard sell or corporate jargon. Your website should sound like a real person who knows their trade, not a brochure written by a committee. Clear, friendly copy that gets to the point builds more trust with a local audience than clever slogans. When people feel like they are dealing with a genuine business, they are far more likely to pick up the phone or fill in the form.",
      },
      { type: "h2", text: "Real photos beat generic stock" },
      {
        type: "p",
        text: "Nothing undermines a small business site faster than obvious stock photos of models in a fake office. Wherever you can, use real images of your work, your team, your premises, or your products. Authentic photos make you look established and trustworthy, and they help customers picture what it is actually like to deal with you. A handful of good, genuine photos will do more for conversions than a gallery of polished but soulless stock.",
      },
      { type: "h2", text: "Content that answers the questions buyers ask" },
      {
        type: "p",
        text: "The best small business sites answer the questions customers have before they even ask them. What areas do you serve, how much does it cost, how long does it take, and what makes you different. Putting clear answers on the page removes hesitation and cuts down on time-wasting enquiries. It is also excellent for SEO, because those are exactly the phrases people type into Google when they are ready to buy.",
      },
      { type: "h2", text: "Accessibility widens your reach" },
      {
        type: "p",
        text: "Designing your site so it works for everyone is both good practice and good business. Strong colour contrast, readable font sizes, descriptive alt text on images, and a layout that works with keyboard navigation all make your site usable for more people, including those with disabilities. Accessible sites also tend to be cleaner and faster, which helps your rankings. It is one of those decisions that quietly benefits every visitor, not just some of them.",
      },
      { type: "h2", text: "How to choose a web designer in Australia" },
      {
        type: "p",
        text: "Look for someone who asks about your goals before they talk about design, who can show you real live sites they have built, and who explains things in plain English. Be wary of anyone who cannot tell you how your site will be found on Google, or who quotes a suspiciously low price with no mention of SEO, speed, or testing. A good designer is a partner in your business, not just someone who hands over a pretty template and disappears.",
      },
      { type: "h2", text: "Design mistakes that quietly cost customers" },
      {
        type: "ul",
        items: [
          "Slow-loading pages full of huge, uncompressed images.",
          "A layout that breaks or feels awkward on a phone.",
          "No clear call to action, so visitors do not know what to do next.",
          "Contact details buried instead of front and centre.",
          "A generic template that looks exactly like every competitor's site.",
        ],
      },
      {
        type: "quote",
        text: "Good design is not decoration. For a small business, it is the difference between a site that quietly loses customers and one that brings them in.",
      },
      {
        type: "p",
        text: "If you run a small business in Australia and want a website that is fast, mobile-first, and built to bring in real enquiries, that is exactly what I build. Tell me about your business and I will reply within 24 hours with a plan and a fixed AUD quote.",
      },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-business-websites",
    title: "Next.js vs WordPress for business websites: which should you choose?",
    excerpt:
      "An honest comparison of Next.js and WordPress for business websites, covering speed, SEO, cost, editing, security, and which one actually fits your business.",
    category: "Next.js",
    date: "Jul 2026",
    dateISO: "2026-07-08",
    read: "9 min read",
    cover: cover("nextjs-vs-wordpress-business-websites"),
    content: [
      {
        type: "p",
        text: "Next.js and WordPress are two of the most popular ways to build a business website, and they could hardly be more different. WordPress powers a huge share of the web and is famous for being easy to edit. Next.js is a modern framework built for speed and custom experiences. So which is right for your business? Here is an honest comparison from someone who builds on both, with no bias toward the one that is trendier this year.",
      },
      { type: "h2", text: "WordPress in a nutshell" },
      {
        type: "p",
        text: "WordPress is a content management system that lets you build and edit a website without touching code. Its biggest strengths are the enormous library of themes and plugins, and how easy it is for a non-technical owner to update pages, publish blog posts, and manage content day to day. If you want to run the site yourself after launch, WordPress is hard to beat.",
      },
      { type: "h2", text: "Next.js in a nutshell" },
      {
        type: "p",
        text: "Next.js is a React-based framework used to build fast, modern websites and web apps. Instead of assembling a site from themes and plugins, a developer builds exactly what you need. The payoff is outstanding speed, tight control, and an app-like feel. The trade-off is that changes usually go through a developer rather than a simple dashboard.",
      },
      { type: "h2", text: "Speed and performance" },
      {
        type: "p",
        text: "This is where Next.js shines. Because pages can be pre-rendered and served as lightweight static files, Next.js sites are typically very fast and pass Core Web Vitals with room to spare. WordPress can be made fast too, but it takes careful work: good hosting, caching, and disciplined use of plugins. Out of the box, a lean Next.js build usually has the edge.",
      },
      { type: "h2", text: "SEO" },
      {
        type: "p",
        text: "Both can rank extremely well, and SEO success depends far more on content and technical care than on the platform. WordPress has mature SEO plugins that make the basics easy. Next.js gives a developer complete control over every tag, which is powerful in skilled hands. For most businesses, the deciding factor is who builds and maintains the site, not the logo on the tech.",
      },
      { type: "h2", text: "Editing and day-to-day control" },
      {
        type: "p",
        text: "If you plan to update content often, run a blog, or change things without calling a developer, WordPress is the friendlier option. Next.js sites can be paired with a modern content system to add that flexibility, but in their simplest form, edits go through code. Be honest with yourself about how you want to manage the site after launch, because that answer often decides the platform.",
      },
      {
        type: "ul",
        items: [
          "Choose WordPress if easy self-editing, blogging, and a huge plugin ecosystem matter most.",
          "Choose Next.js if speed, custom functionality, and an app-like experience are the priority.",
          "Either can work brilliantly with a developer who builds it properly and maintains it well.",
        ],
      },
      { type: "h2", text: "Security and maintenance" },
      {
        type: "p",
        text: "WordPress is a big target simply because it is so popular, so it needs regular updates, backups, and sensible plugin choices to stay secure. Next.js has a smaller attack surface because there is no plugin ecosystem to exploit, though it still needs good hosting and upkeep. Whichever you choose, ongoing maintenance is not optional if you want the site to stay fast and safe.",
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "A simple WordPress site can be quicker and cheaper to launch thanks to ready-made themes. A custom Next.js build often costs more upfront because it is made to measure, but it can pay off in performance and a distinctive experience. Over a few years, the totals are usually closer than people expect once hosting, plugins, and maintenance are factored in.",
      },
      { type: "h2", text: "Hosting and infrastructure" },
      {
        type: "p",
        text: "The two platforms live in different worlds when it comes to hosting. WordPress needs a server running PHP and a database, which is why hosting quality has such a big effect on its speed and security. Next.js suits modern hosting platforms that serve pre-built pages from a global network, which tends to deliver excellent performance with very little tuning. For a business, this often means a Next.js site stays fast under load with less ongoing babysitting, while a WordPress site rewards good hosting and punishes cheap hosting.",
      },
      { type: "h2", text: "Scaling as your business grows" },
      {
        type: "p",
        text: "Both platforms can grow with you, but in different ways. WordPress scales through better hosting, caching, and careful plugin management, and it handles large content libraries and blogs comfortably. Next.js scales beautifully for traffic and for custom features, because it is built like an application rather than a collection of plugins. If you expect heavy traffic spikes or plan to add custom tools, dashboards, or integrations down the line, Next.js gives you more headroom without things becoming fragile.",
      },
      { type: "h2", text: "The hybrid option: headless WordPress" },
      {
        type: "p",
        text: "You do not always have to choose one or the other. A popular modern approach is to run WordPress purely as the place you write and manage content, while Next.js handles the actual website your visitors see. This gives you the easy editing of WordPress with the speed and flexibility of Next.js. It is more involved to set up, so it makes most sense for content-heavy businesses that want both a great editing experience and top-tier performance.",
      },
      { type: "h2", text: "A quick reality check on trends" },
      {
        type: "p",
        text: "It is easy to get swept up in whatever framework is popular this year. The truth is that most business websites succeed or fail on fundamentals: clear content, fast loading, solid SEO, and a build that is properly maintained. A well-built WordPress site will comfortably outperform a poorly-built Next.js site, and the reverse is just as true. The platform is a tool, not a strategy.",
      },
      { type: "h2", text: "When each one clearly wins" },
      {
        type: "ul",
        items: [
          "A blog-led business that publishes often and wants to self-edit: WordPress.",
          "A simple brochure site on a tight budget and timeline: usually WordPress.",
          "A fast, custom marketing site where performance is a priority: Next.js.",
          "A web app, dashboard, or product with custom functionality: Next.js.",
          "A content-heavy brand that wants easy editing and top speed: headless WordPress with Next.js.",
        ],
      },
      { type: "h2", text: "Can you switch later?" },
      {
        type: "p",
        text: "Yes, but it is work, so it pays to choose thoughtfully now. Content can be migrated between platforms, and a good developer can move you from WordPress to Next.js or set up a hybrid when your needs change. The smart move is to pick based on how you will realistically run the site over the next few years, not just how it looks on launch day, so you are not paying to rebuild sooner than you need to.",
      },
      {
        type: "quote",
        text: "Pick the tool that fits your goals and the way you will run the site, not the one that is fashionable. The best platform is the one you can actually live with after launch.",
      },
      {
        type: "p",
        text: "Still unsure which fits your business? That is exactly the conversation I enjoy. Tell me your goals and how you want to manage the site, and I will recommend the right choice honestly, even if it is not the one I would find most fun to build.",
      },
    ],
  },
  {
    slug: "why-your-business-needs-a-website-in-2026",
    title: "Why your business needs a website in 2026",
    excerpt:
      "Social media is not enough. Here is why a professional website is essential for your business in 2026, from credibility and Google visibility to owning your own audience.",
    category: "Business",
    date: "Jul 2026",
    dateISO: "2026-07-04",
    read: "8 min read",
    cover: cover("why-your-business-needs-a-website-in-2026"),
    content: [
      {
        type: "p",
        text: "Every year, more business happens online, and every year the excuses for not having a proper website get weaker. Some owners still lean entirely on a Facebook page or an Instagram profile and hope that is enough. In 2026, it is not. A professional website is the foundation your entire online presence should sit on. Here is why your business needs one, and what happens if you keep putting it off.",
      },
      { type: "h2", text: "Credibility: you look real" },
      {
        type: "p",
        text: "The first thing a potential customer does after hearing about you is search your name. If nothing professional comes up, doubt creeps in. A clean, fast website instantly signals that you are an established, trustworthy business. Without one, you are asking people to take a leap of faith that many of them simply will not take when a competitor with a proper site is one click away.",
      },
      { type: "h2", text: "Google is where buying decisions start" },
      {
        type: "p",
        text: "When someone needs a product or service, they search for it. A website is what lets you show up in those results and capture that intent at the exact moment a person is ready to act. Social media profiles rarely rank for the terms your customers type. A well-built, SEO-ready website is your ticket into the search results that actually drive enquiries.",
      },
      { type: "h2", text: "You own it, unlike social media" },
      {
        type: "p",
        text: "Your Instagram followers and Facebook likes are borrowed. The platform controls the reach, changes the rules, and can suspend an account without warning. Your website is an asset you own outright. It is the one place online where you set the rules, keep your content, and build an audience that no algorithm change can take away overnight.",
      },
      { type: "h2", text: "It sells while you sleep" },
      {
        type: "p",
        text: "A good website works around the clock. It answers common questions, showcases your work, takes bookings or orders, and collects enquiries at two in the morning while you rest. For a small business, that is like having a tireless salesperson who never takes a day off, all for a fraction of the cost of hiring one.",
      },
      {
        type: "ul",
        items: [
          "Captures leads and sales outside your working hours.",
          "Answers the questions that would otherwise fill your inbox and phone.",
          "Presents your business exactly the way you want, every single time.",
        ],
      },
      { type: "h2", text: "The cost of not having one" },
      {
        type: "p",
        text: "Not having a website is not saving money, it is losing it quietly. Every customer who searches, finds nothing convincing, and picks a competitor is a sale you never even knew you missed. In a market where buyers research before they buy, being invisible online is one of the most expensive mistakes a business can make.",
      },
      { type: "h2", text: "What a modern site needs in 2026" },
      {
        type: "p",
        text: "A website in 2026 has to do more than exist. It needs to load in about a second, look great on phones, rank on Google, and make getting in touch effortless. Clean code, proper SEO, and a clear path to contact you are the baseline. Anything less and the site becomes a box ticked rather than a tool that grows your business.",
      },
      { type: "h2", text: "Search is changing, and you need to be in it" },
      {
        type: "p",
        text: "The way people search is evolving fast. Between traditional Google results, maps, and AI-powered answers, customers have more ways than ever to find a business, and almost all of them pull from real websites. If you do not have a proper site with clear, structured content, you are simply not part of that conversation. A well-built website with good SEO and schema markup gives you the best chance of being the business that gets surfaced when someone is ready to buy.",
      },
      { type: "h2", text: "You are more than a listing on someone else's platform" },
      {
        type: "p",
        text: "Marketplaces and directories can send you customers, but they also put you side by side with every competitor and take a cut along the way. Your own website is the one place where you control the story, the pricing, and the experience, with no competitor ads next to your name. It is the difference between renting a stall in someone else's market and owning your own shop.",
      },
      { type: "h2", text: "Build an audience you actually own" },
      {
        type: "p",
        text: "A website lets you capture enquiries, grow an email list, and stay in touch with people who are interested in what you do. That audience is yours, and it keeps working for you regardless of what any social platform decides to change. Email and a solid website consistently outperform borrowed social reach for turning interest into repeat business, because you are not fighting an algorithm for the right to reach your own customers.",
      },
      { type: "h2", text: "The data a website gives you" },
      {
        type: "p",
        text: "With a website and analytics, you can see exactly what your customers are interested in: which services get the most attention, where visitors come from, and what makes them get in touch. That insight helps you make smarter decisions about your marketing and your business as a whole. Social media hands most of that data to the platform, while your own site hands it to you.",
      },
      { type: "h2", text: "It levels the playing field" },
      {
        type: "p",
        text: "A professional website lets a small local business look every bit as credible as a large competitor. Customers judge you on the experience you give them online, not on your headcount. A fast, well-designed site tells people you take your business seriously, and that impression alone can win you work against bigger names who have let their own website go stale.",
      },
      { type: "h2", text: "How to get started without the stress" },
      {
        type: "p",
        text: "Getting a website does not have to be overwhelming. Start by writing down your main goal and the handful of pages you need, gather a few real photos, and then work with a developer who can handle the technical side and guide you through the rest. The hardest part is usually just deciding to begin. Once the site is live and bringing in enquiries, most business owners only wish they had done it sooner.",
      },
      {
        type: "quote",
        text: "A website is no longer a nice-to-have. In 2026 it is the front door to your business, and a locked front door costs you customers every day.",
      },
      {
        type: "p",
        text: "If your business is running on social media alone, or on a site that no longer pulls its weight, it is worth a conversation. Tell me what you do and I will reply within 24 hours with an honest plan and a fixed quote for a website that actually works.",
      },
    ],
  },
  {
    slug: "make-wordpress-load-under-one-second",
    title: "10 ways to make your WordPress site load in under a second",
    excerpt:
      "Caching, image optimisation, and the plugins that are secretly slowing you down. A practical speed checklist you can work through today.",
    category: "Performance",
    date: "Jun 2026",
    dateISO: "2026-06-24",
    read: "6 min read",
    cover: cover("make-wordpress-load-under-one-second"),
    content: [
      {
        type: "p",
        text: "A slow WordPress site costs you visitors, rankings, and sales. Google has been clear that speed is a ranking factor, and real users are even less forgiving than search engines. The good news is that most WordPress sites are slow for the same handful of reasons, and every one of them is fixable.",
      },
      {
        type: "p",
        text: "Here is the exact checklist I work through when a client hands me a sluggish site. You do not need all ten to see a difference, but together they will get most sites loading in under a second.",
      },
      { type: "h2", text: "1. Turn on real caching" },
      {
        type: "p",
        text: "Caching saves a ready-made copy of your pages so the server does not have to rebuild them on every visit. A good caching plugin is the single biggest win for most sites. Pair it with server-level caching if your host offers it.",
      },
      { type: "h2", text: "2. Compress and resize your images" },
      {
        type: "p",
        text: "Images are almost always the heaviest thing on a page. Serve them at the size they are actually displayed, convert them to modern formats like WebP, and compress them. A hero image should rarely be more than a couple of hundred kilobytes.",
      },
      { type: "h2", text: "3. Audit your plugins" },
      {
        type: "p",
        text: "Every plugin adds code, and some load on every single page whether you need them there or not. Deactivate anything you are not using, and replace bloated plugins with lighter alternatives.",
      },
      {
        type: "ul",
        items: [
          "Deactivate and delete plugins you no longer use.",
          "Look for one plugin that can replace three.",
          "Watch out for page builders that load huge scripts everywhere.",
        ],
      },
      { type: "h2", text: "4. Choose a fast host" },
      {
        type: "p",
        text: "Cheap shared hosting is a false economy. If your server takes 600 milliseconds just to respond, no plugin will save you. Managed WordPress hosting with a good stack pays for itself in performance and peace of mind.",
      },
      { type: "h2", text: "5. Use a content delivery network" },
      {
        type: "p",
        text: "A CDN serves your files from a location close to each visitor. For an audience spread across countries, this alone can cut load time dramatically and takes pressure off your main server.",
      },
      { type: "h2", text: "The rest of the list" },
      {
        type: "ul",
        items: [
          "Minify and combine CSS and JavaScript.",
          "Load only the fonts and font weights you use.",
          "Defer scripts that are not needed for the first paint.",
          "Clean up your database and reduce post revisions.",
          "Keep WordPress, your theme, and plugins up to date.",
        ],
      },
      {
        type: "quote",
        text: "Speed is not a one-time task. Test your site every few months, because a plugin update or a new image can quietly undo your hard work.",
      },
      {
        type: "p",
        text: "If you would rather have someone handle all of this for you, speed optimisation is part of every build and maintenance plan I offer. A fast site is not a luxury, it is the baseline your visitors expect.",
      },
    ],
  },
  {
    slug: "shopify-vs-woocommerce",
    title: "Shopify vs WooCommerce: which should you actually choose?",
    excerpt:
      "An honest comparison for store owners covering cost, control, SEO, and scaling, with no platform bias and no hidden agenda.",
    category: "E-commerce",
    date: "Jun 2026",
    dateISO: "2026-06-10",
    read: "8 min read",
    cover: cover("shopify-vs-woocommerce"),
    content: [
      {
        type: "p",
        text: "Shopify or WooCommerce is one of the first questions every new store owner faces, and the internet is full of biased answers. Both are excellent platforms. The right one depends on your budget, your technical comfort, and how much control you want. Here is a straight comparison from someone who builds on both.",
      },
      { type: "h2", text: "Shopify in one line" },
      {
        type: "p",
        text: "Shopify is a hosted, all-in-one platform. You pay a monthly fee and Shopify handles hosting, security, and updates. It is the fastest way to get a reliable store live, and it rarely breaks.",
      },
      { type: "h2", text: "WooCommerce in one line" },
      {
        type: "p",
        text: "WooCommerce is a free plugin that turns WordPress into a store. You own everything and can customise anything, but you are also responsible for hosting, security, and maintenance.",
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "Shopify has predictable monthly costs plus transaction fees unless you use their own payments. WooCommerce is free to start, but you pay for hosting, a theme, and often a few premium plugins. Over a few years the totals are closer than people expect.",
      },
      { type: "h2", text: "Control and flexibility" },
      {
        type: "p",
        text: "This is where WooCommerce pulls ahead. Because it is built on WordPress and open source, you can change almost anything about how the store looks and works. Shopify is flexible within its own system, but you play by its rules.",
      },
      { type: "h2", text: "SEO and content" },
      {
        type: "p",
        text: "Both can rank well. WooCommerce gives you the full power of WordPress for blogging and content marketing, which matters if content is a big part of your strategy. Shopify is perfectly capable but slightly more restrictive in its URL structure and blogging tools.",
      },
      {
        type: "ul",
        items: [
          "Choose Shopify if you want a reliable store live quickly with minimal maintenance.",
          "Choose WooCommerce if you want full control, deep customisation, and strong content tools.",
          "Choose either if you have a developer who can set it up properly, because a good build matters more than the logo.",
        ],
      },
      {
        type: "quote",
        text: "The platform is rarely the reason a store fails. Poor product pages, slow loading, and a confusing checkout are. Fix those first, whichever platform you pick.",
      },
      {
        type: "p",
        text: "If you are still unsure, tell me about your products and your goals. I will recommend the platform that actually fits your business, not the one that is easiest for me to build.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist-new-website",
    title: "The technical SEO checklist every new website needs",
    excerpt:
      "Sitemaps, schema, Core Web Vitals, and the on-page basics that get you indexed and ranking faster, explained without the jargon.",
    category: "SEO",
    date: "May 2026",
    dateISO: "2026-05-22",
    read: "7 min read",
    cover: cover("technical-seo-checklist-new-website"),
    content: [
      {
        type: "p",
        text: "Great content will not rank if search engines cannot crawl, understand, and trust your site. Technical SEO is the foundation everything else sits on. Here is the checklist I run through before any new site goes live.",
      },
      { type: "h2", text: "Make sure Google can find every page" },
      {
        type: "p",
        text: "Generate an XML sitemap and submit it in Google Search Console. Check your robots file is not accidentally blocking important pages. If a page is not in the index, it cannot rank, no matter how good it is.",
      },
      { type: "h2", text: "Get the on-page basics right" },
      {
        type: "ul",
        items: [
          "One clear title tag per page, with the main keyword near the front.",
          "A meta description that reads like an ad, not a summary.",
          "A single H1 per page and a logical heading structure below it.",
          "Descriptive, readable URLs without random numbers.",
        ],
      },
      { type: "h2", text: "Add structured data" },
      {
        type: "p",
        text: "Schema markup tells search engines exactly what your content is, whether that is an article, a product, a local business, or a review. It is what earns you those rich results with stars, prices, and extra links.",
      },
      { type: "h2", text: "Pass Core Web Vitals" },
      {
        type: "p",
        text: "Google measures real-world speed and stability through Core Web Vitals. A fast, stable page is both a ranking signal and a better experience. Test your key pages and fix anything in the red.",
      },
      { type: "h2", text: "Make it mobile first" },
      {
        type: "p",
        text: "Google indexes the mobile version of your site. If your site is awkward on a phone, that is the version being judged. Test on a real device, not just a resized browser window.",
      },
      {
        type: "quote",
        text: "Technical SEO is not a one-time launch task. Set a reminder to check Search Console every month for crawl errors and coverage issues.",
      },
      {
        type: "p",
        text: "Every site I build ships with this checklist already handled, because SEO baked in from the start always beats SEO bolted on later. If your current site is missing the basics, a quick audit will show you exactly where the gaps are.",
      },
    ],
  },
  {
    slug: "why-i-build-with-nextjs",
    title: "Why I build with Next.js (and when I don't)",
    excerpt:
      "Server rendering, SEO, and speed. The real-world trade-offs of the modern React framework, and the projects where WordPress still wins.",
    category: "Next.js",
    date: "May 2026",
    dateISO: "2026-05-08",
    read: "5 min read",
    cover: cover("why-i-build-with-nextjs"),
    content: [
      {
        type: "p",
        text: "Next.js is my go-to for custom, high-performance projects. But I do not use it for everything, and any developer who tells you one tool fits every job is selling you something. Here is how I actually decide.",
      },
      { type: "h2", text: "What makes Next.js great" },
      {
        type: "ul",
        items: [
          "Server rendering means pages arrive fast and fully formed, which is excellent for SEO.",
          "It is built on React, so complex, interactive interfaces stay maintainable.",
          "Image, font, and script handling are optimised out of the box.",
          "It scales from a simple site to a full application without switching tools.",
        ],
      },
      { type: "h2", text: "When Next.js is the right call" },
      {
        type: "p",
        text: "I reach for Next.js when a project needs custom functionality, tight performance, or an app-like experience. Dashboards, booking systems, marketplaces, and content-heavy sites that must load instantly are all a natural fit.",
      },
      { type: "h2", text: "When I do not use it" },
      {
        type: "p",
        text: "If a client wants to edit their own content daily, run a blog, and manage everything without touching code, WordPress is often the better answer. The best technology is the one the client can actually live with after I hand it over.",
      },
      {
        type: "quote",
        text: "Pick the tool that fits the goal and the person maintaining it, not the one that is trendy this year.",
      },
      {
        type: "p",
        text: "If you are not sure which approach suits your project, that is exactly the conversation I enjoy having. Tell me what you are building and I will point you to the right stack, even if it is not the one I would personally find most fun.",
      },
    ],
  },
  {
    slug: "fix-common-contact-form-problems",
    title: "Fixing the most common contact-form problems",
    excerpt:
      "Why your form emails go to spam, and how proper SMTP, SPF, and DKIM keep your leads landing in the inbox instead of disappearing.",
    category: "Development",
    date: "Apr 2026",
    dateISO: "2026-04-19",
    read: "6 min read",
    cover: cover("fix-common-contact-form-problems"),
    content: [
      {
        type: "p",
        text: "There is one website problem that quietly costs businesses more than almost any other: a contact form that looks like it works but never delivers the message. The visitor clicks send, sees a thank-you note, and you never hear from them. Here is why it happens and how to fix it for good.",
      },
      { type: "h2", text: "Why form emails vanish" },
      {
        type: "p",
        text: "By default, many sites try to send email straight from the web server. Modern email providers distrust that, so the message either lands in spam or gets rejected entirely. Nothing looks broken, which is exactly what makes it dangerous.",
      },
      { type: "h2", text: "The fix: send through proper SMTP" },
      {
        type: "p",
        text: "Instead of sending from the server, route your form email through an authenticated sending service. This makes your messages look legitimate and dramatically improves deliverability.",
      },
      {
        type: "ul",
        items: [
          "Use a dedicated transactional email service for form and system emails.",
          "Set up SPF and DKIM records so providers trust your domain.",
          "Add DMARC to protect your domain from spoofing.",
          "Always send a copy to a second address as a backup.",
        ],
      },
      { type: "h2", text: "Test like a stranger" },
      {
        type: "p",
        text: "Submit your own form from an outside email account and check that the message arrives in the inbox, not spam. Do this again after any hosting or plugin change, because these things break silently.",
      },
      {
        type: "quote",
        text: "A form that does not deliver is worse than no form at all, because it makes you look unresponsive to people who were ready to buy.",
      },
      {
        type: "p",
        text: "If you suspect leads are slipping through the cracks, this is one of the first things I check on any site. It is usually a quick fix with a big payoff.",
      },
    ],
  },
  {
    slug: "core-web-vitals-for-non-developers",
    title: "Core Web Vitals explained for non-developers",
    excerpt:
      "LCP, CLS, and INP. What Google's speed metrics actually mean, why they affect rankings, and how to pass them without a computer science degree.",
    category: "Performance",
    date: "Apr 2026",
    dateISO: "2026-04-03",
    read: "9 min read",
    cover: cover("core-web-vitals-for-non-developers"),
    content: [
      {
        type: "p",
        text: "Core Web Vitals sound technical, but the idea behind them is simple: does your page feel fast, stable, and responsive to a real person? Google turned that feeling into three measurable numbers. Here is what each one means in plain English.",
      },
      { type: "h2", text: "LCP: how fast the main content appears" },
      {
        type: "p",
        text: "Largest Contentful Paint measures how long it takes for the biggest thing on screen, usually your hero image or headline, to load. Aim for under two and a half seconds. Slow images and slow servers are the usual culprits.",
      },
      { type: "h2", text: "CLS: how much the page jumps around" },
      {
        type: "p",
        text: "Cumulative Layout Shift measures visual stability. If you have ever gone to tap a button and the page shifted, that is layout shift. It is usually caused by images without set dimensions or content that loads in late and pushes everything down.",
      },
      { type: "h2", text: "INP: how quickly the page responds to you" },
      {
        type: "p",
        text: "Interaction to Next Paint measures how fast the page reacts when you tap or click. If a menu takes a beat to open or a button feels laggy, that is poor responsiveness, usually caused by heavy scripts.",
      },
      { type: "h2", text: "How to actually pass them" },
      {
        type: "ul",
        items: [
          "Optimise and correctly size your images to improve LCP.",
          "Always set width and height on images to stop layout shift.",
          "Reduce and defer heavy JavaScript to improve responsiveness.",
          "Use a fast host and caching so the server responds quickly.",
        ],
      },
      {
        type: "quote",
        text: "You do not need to understand the code behind these metrics. You just need a site built with them in mind from the beginning.",
      },
      {
        type: "p",
        text: "Passing Core Web Vitals is part of every site I build and every speed audit I run. If you want to know where your site stands today, a quick test will show you exactly which of the three needs attention.",
      },
    ],
  },
  {
    slug: "how-much-should-a-website-cost",
    title: "How much should a website cost? An honest breakdown",
    excerpt:
      "Why quotes range from a hundred dollars to fifty thousand, what you are really paying for, and how to spot a price that is too good to be true.",
    category: "Business",
    date: "Mar 2026",
    dateISO: "2026-03-20",
    read: "7 min read",
    cover: cover("how-much-should-a-website-cost"),
    content: [
      {
        type: "p",
        text: "Ask ten people what a website costs and you will get ten wildly different answers. That is not because anyone is lying, it is because a website can mean a simple one-page site or a full custom application. Here is an honest look at what drives the price so you can budget with your eyes open.",
      },
      { type: "h2", text: "What you are actually paying for" },
      {
        type: "p",
        text: "The design and code are only part of it. You are also paying for planning, content structure, SEO, testing, and the experience that stops the project from going wrong. A cheap site that never brings in a single customer is the most expensive kind.",
      },
      { type: "h2", text: "Rough tiers" },
      {
        type: "ul",
        items: [
          "A simple, professional brochure site: a smaller fixed budget, quick turnaround.",
          "A custom business site with SEO and several tailored pages: a mid range budget.",
          "An online store or web app with custom features: a larger budget that reflects the complexity.",
        ],
      },
      { type: "h2", text: "Why very cheap quotes are risky" },
      {
        type: "p",
        text: "If a price seems too good to be true, something is usually missing: proper SEO, real testing, a fast build, or support after launch. You often end up paying a second developer to fix it, which costs more than doing it right the first time.",
      },
      {
        type: "quote",
        text: "A website is an investment that should pay you back in leads and sales. Judge it by what it earns, not only by what it costs.",
      },
      {
        type: "p",
        text: "I quote a fixed price after a short conversation about what you need, so there are no surprises. Whatever your budget, I will tell you honestly what is realistic and where your money is best spent.",
      },
    ],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "7 signs your website needs a redesign",
    excerpt:
      "It is not just about looks. Slow speed, poor mobile experience, and no new leads are all signals it is time for a fresh build.",
    category: "Strategy",
    date: "Mar 2026",
    dateISO: "2026-03-05",
    read: "6 min read",
    cover: cover("signs-your-website-needs-a-redesign"),
    content: [
      {
        type: "p",
        text: "A redesign is a real investment, so you do not want to do it on a whim. But a tired website quietly leaks customers every day. Here are seven honest signs it is time for a fresh build.",
      },
      { type: "h2", text: "1. It is slow" },
      {
        type: "p",
        text: "If your pages take more than a few seconds to load, visitors leave before they ever see your offer. Speed problems are often baked into an old build and hard to patch.",
      },
      { type: "h2", text: "2. It looks wrong on phones" },
      {
        type: "p",
        text: "Most of your visitors are on mobile. If they have to pinch, zoom, and scroll sideways, you are losing them. A modern site is designed for the phone first.",
      },
      { type: "h2", text: "3. It brings in no leads" },
      {
        type: "p",
        text: "A website should generate enquiries and sales, not just exist. If yours is a quiet brochure that no one acts on, the design and structure are likely working against you.",
      },
      { type: "h2", text: "The other four signs" },
      {
        type: "ul",
        items: [
          "It looks dated compared to your competitors.",
          "You cannot easily update it yourself.",
          "It is not ranking on Google for anything useful.",
          "It no longer reflects what your business has become.",
        ],
      },
      {
        type: "quote",
        text: "You do not need a redesign every year. You need one when your site is actively holding your business back.",
      },
      {
        type: "p",
        text: "If two or three of these sound familiar, it is worth a conversation. I can tell you honestly whether a full rebuild or a few targeted fixes will get you the best return.",
      },
    ],
  },
];

export const POSTS_PER_PAGE = 6;

export const getSortedPosts = () =>
  [...POSTS].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

export const getPostBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
};
