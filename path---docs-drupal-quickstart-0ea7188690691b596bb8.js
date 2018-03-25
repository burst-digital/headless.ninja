webpackJsonp([99819278302283],{357:function(e,t){e.exports={data:{allDocs:{edges:[{node:{frontmatter:{title:"Enable the HN Module in Drupal",category:"drupal-quickstart",stub:null},fields:{slug:"/docs/drupal-quickstart"}}},{node:{frontmatter:{title:"React setup",category:"react-quickstart",stub:null},fields:{slug:"/docs/react-quickstart"}}},{node:{frontmatter:{title:"Drupal",category:"reference",stub:!0},fields:{slug:"/docs/reference/drupal"}}},{node:{frontmatter:{title:"Enabling submodules",category:"drupal-quickstart",stub:!0},fields:{slug:"/docs/drupal-quickstart/enabling-submodules"}}},{node:{frontmatter:{title:"Query entities and references",category:"react-quickstart",stub:!0},fields:{slug:"/docs/react-quickstart/query-entities-and-references"}}},{node:{frontmatter:{title:"Javascript",category:"reference",stub:!0},fields:{slug:"/docs/reference/javascript"}}},{node:{frontmatter:{title:"Altering the response",category:"drupal-quickstart",stub:!0},fields:{slug:"/docs/drupal-quickstart/alter-response"}}},{node:{frontmatter:{title:"React",category:"reference",stub:!0},fields:{slug:"/docs/reference/react"}}},{node:{frontmatter:{title:"Documentation",category:"top",stub:!0},fields:{slug:"/docs/"}}},{node:{frontmatter:{title:"Alternatives",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/alternatives"}}},{node:{frontmatter:{title:"Data structure",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/data-structure"}}},{node:{frontmatter:{title:"Request endpoint",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/request-endpoint"}}},{node:{frontmatter:{title:"404 and 403 pages",category:"guides",stub:!0},fields:{slug:"/docs/guides/404-and-403"}}},{node:{frontmatter:{title:"Altering entities",category:"guides",stub:!0},fields:{slug:"/docs/guides/altering-entities"}}},{node:{frontmatter:{title:"Content listings",category:"guides",stub:!0},fields:{slug:"/docs/guides/content-listings"}}},{node:{frontmatter:{title:"Layouts with Paragraphs",category:"guides",stub:!0},fields:{slug:"/docs/guides/layouts-with-paragraphs"}}},{node:{frontmatter:{title:"Proxy Drupal with Node.js",category:"guides",stub:null},fields:{slug:"/docs/guides/proxy-drupal"}}},{node:{frontmatter:{title:"Server-side rendering",category:"guides",stub:!0},fields:{slug:"/docs/guides/server-side-rendering"}}},{node:{frontmatter:{title:"Views",category:"guides",stub:!0},fields:{slug:"/docs/guides/views"}}}]},docsItem:{html:'<p>To use the Headless Ninja module, you need a Drupal installation. For this guide we assume you already have basic Drupal knowledge.</p>\n<h2 id="new-drupal-website"><a href="#new-drupal-website" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Drupal website</h2>\n<p>If you want to try out Headless Ninja on a new Drupal installation, you can use the HN Starterskit.</p>\n<p>Before you start, you need to make sure Composer is installed on your computer. If you run <code>composer -V</code> in your terminal and see something like <code>Composer version 1.x.x</code> popping up, you\'re ready to go.</p>\n<p>Create a directory for your project and run the following command in your terminal:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>composer create-project headless-ninja/drupal-template -s dev --remove-vcs\n</code></pre>\n      </div>\n<p>This will download a basic Drupal project with HN and other nice-to-have modules installed.</p>\n<p>To start the php server, run <code>composer run start-server --timeout 0</code> in your terminal. You will need to keep this command running while you\'re developing.</p>\n<p>In your terminal, the URL of your Drupal installation will show up. Open that URL in your browser and follow the on-screen instructions to install the HN Starterskit.</p>\n<h2 id="enable-in-existing-drupal-website"><a href="#enable-in-existing-drupal-website" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable in existing Drupal website</h2>\n<p>If you have a Drupal website based on Composer, you can run <code>composer require drupal/hn</code> to download the latest version of HN. </p>\n<p>If you are running a traditional file-based Drupal project, you can download the HN module from the <a href="https://www.drupal.org/project/hn">Headless Ninja Drupal page</a> and extract the zip in the <code>modules</code> folder.</p>\n<p>You can enable the module trough the <em>Extend</em> page.</p>',frontmatter:{title:"Enable the HN Module in Drupal",category:"drupal-quickstart"},fields:{slug:"/docs/drupal-quickstart"}}},pathContext:{slug:"/docs/drupal-quickstart"}}}});
//# sourceMappingURL=path---docs-drupal-quickstart-0ea7188690691b596bb8.js.map