var comments = {
"comments" : [
	{
		"el": "#atoms-intro",
		"title" : "Instructions",
		"comment": "<p>Here are the instructions on how you can participate:</p><p>1. Software Requirements</p><p>Install in the following order</p><br><ul><li><p>Git </p></li><ul>   <li>      <p>https://git-scm.com/downloads</p></li><li><p>For Windows : Make sure you select &ldquo;Use Git from the Windows Command Prompt&rdquo;</p></li></ul>  <li><p>PHP 5.3+</p>  </li>  <ul>    <li>      <p>http://windows.php.net/download/#php-5.5</p>    </li>    <li>      <p>OS X has PHP installed</p>    </li>  </ul>  <li>    <p>Ruby</p>  </li>  <ul>    <li>      <p>https://www.ruby-lang.org/en/documentation/installation/#homebrew</p>    </li>  </ul>  <li>    <p>Sass</p>  </li>  <ul>    <li>      <p>http://sass-lang.com/install</p>    </li>  </ul>  <li>    <p>Compass</p>  </li>  <ul>    <li>      <p>http://thesassway.com/beginner/getting-started-with-sass-and-compass</p>    </li>  </ul></ul><br><p>2. GitLab.com Instructions</p><br><ul>  <li>    <p>Create a free GitLab.com account and sign in</p>  </li>  <ul>    <li>      <p>https://gitlab.com/users/sign_in</p>    </li>  </ul>  <li>    <p>Go to the ITA LA City Patterns GitLab.com Repo</p>  </li>  <ul>    <li>      <p>https://gitlab.com/itawebservices/lacitypatterns</p>    </li>  </ul>  <li>    <p>Fork the repo to your account ( The Fork link is in the top right of the page )</p>  </li>  <li>    <p>Bring in the forked repo locally</p>  </li>  <ul>    <li>      <p>git clone [fork-repo-url]</p>    </li>  </ul>  <li>    <p>Branch off of Master with your own branch </p>  </li>  <ul>    <li>      <p>git checkout -b [branch-name]</p>    </li>  </ul>  <li>    <p>Add an Upstream Remote</p>  </li>  <ul>    <li>      <p>git remote add upstream https://gitlab.com/itawebservices/lacitypatterns.git</p>    </li>  </ul></ul><br><br><br><p>3. Pattern Lab Instructions</p><br><p>The LA City Style Guide is built using Pattern Lab.  Those new to Pattern Lab should get more acquainted with its structure with the instructions below:</p><br><ul>  <li>    <p>Go to the Pattern Lab site for documentation</p>  </li>  <ul>    <li>      <p>http://patternlab.io/docs/index.html</p>    </li>  </ul>  <li>    <p>Once the LACity Patterns repo is cloned locally open the &ldquo;lacitypatterns&rdquo; folder</p>  </li>  <ul>    <li>      <p>rename the &ldquo;_public&rdquo; folder to &ldquo;public&rdquo;</p>    </li>  </ul>  <li>    <p>Use the command line to run Compass Watch on the &ldquo;source&rdquo; folder in &ldquo;lacitypatterns&rdquo;</p>  </li>  <ul>    <li>      <p>compass watch</p>    </li>    <li>      <p>Leave the Compass watch terminal window open</p>    </li>  </ul>  <li>    <p>Use the command line to generate and watch the &ldquo;lacitypatterns&rdquo; folder</p>  </li>  <ul>    <li>      <p>php core/builder.php -w -r</p>    </li>    <li>      <p>Leave the PHP watch command terminal window open</p>    </li>  </ul>  <li>    <p>Edit the files in the &ldquo;source&rdquo; folder ONLY </p>  </li>  <li>    <p>Work on LACity Patterns files. Upon save, the Compass and PHP watch commands will run and rewrite the &ldquo;public&rdquo; folder</p>  </li>  <li>    <p>Commit your changes to your own forked repo</p>  </li>  <ul>    <li>      <p>git add [files-to-add] or git add -A</p>    </li>    <li>      <p>git commit -m 'Commit message'</p>    </li>    <li>      <p>git push origin [branch-name] -u</p>    </li>  </ul></ul><br><p>4. Hack Night Instructions</p><br><p>On Hack Night all participants who have forked the LACity Patterns repo will be given collaborator access in order to push their branches directly into the LACity Patterns Repo.</p><ul> <li><p>Please submit a pull request to ITA Web Services / lacitypatterns and we will use your pull request information to add your account as a developer to the project.</p></li> <li>    <p>Committed changes upstream to the LACity Patterns repo (Note the following step can only be done at Hack Night after you have been added as a collaborator )</p></li>  <ul>    <li>      <p>git push -u upstream  [branch-name]</p>    </li>  </ul></ul><p>NOTE: Use annnotations to provide comments and additional information for your changes.</p><p>Deadline for submission of branches is July 10.</p><p>For Questions and Comments please contact: balmore.botero@lacity.org</p>"	},
	{
		"el": "#atoms-colors",
		"title" : "Colors",
		"comment": "Colors"
	},
	{
		"el": "#atoms-fonts",
		"title" : "Fonts",
		"comment": "Fonts"
	},
	{
		"el": "#atoms-animations",
		"title" : "Animations",
		"comment": "Animations"
	},
	{
		"el": "#atoms-visibility",
		"title" : "Vsibility",
		"comment": "Visibility"
	},
	{
		"el": "#atoms-headings",
		"title" : "Headings",
		"comment": "Headings"
	},
	{
		"el": "#atoms-paragraph",
		"title" : "Paragraph",
		"comment": "Paragraph"
	},
	{
		"el": "#atoms-blockquote",
		"title" : "Blockquote",
		"comment": "Blockquote"
	},
	{
		"el": "#atoms-inline-elements",
		"title" : "Inline Elements",
		"comment": "Inline Elements"
	},
	{
		"el": "#atoms-time",
		"title" : "Time",
		"comment": "Time"
	},
	{
		"el": "#atoms-preformatted-text",
		"title" : "Preformatted Text",
		"comment": "Preformatted Text"
	},
	{
		"el": "#atoms-hr",
		"title" : "HR",
		"comment": "HR"
	},
	{
		"el": "#atoms-unordered",
		"title" : "Unordered List",
		"comment": "Unordere List"
	},
	{
		"el": "#atoms-ordered",
		"title" : "Ordered List",
		"comment": "Ordered List"
	},
	{
		"el": "#atoms-definition",
		"title" : "Definition List",
		"comment": "Definition List"
	},
	{
		"el": "#atoms-logo",
		"title" : "Logo",
		"comment": "TEST The LOGO image is an SVG file, which ensures that the logo displays crisply even on high resolution displays. A PNG fallback is provided for browsers that don't support SVG images.</p><p>Further reading: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Optimizing Web Experiences for High Resolution Screens</a></p>"
	},
	{
		"el": "#atoms-thumbnail-3x4",
		"title" : "Thumbnail 3:4",
		"comment": "Thumbnail 3:4"
	},
	{
		"el": "#atoms-landscape-16x9",
		"title" : "Landscape 16:9",
		"comment": "Landscape 16:9"
	},
	{
		"el": "#atoms-thumbnail-16x9",
		"title" : "Thumbnail 16:9",
		"comment": "Thumbnail 16:9"
	},
	{
		"el": "#atoms-landscape-8x3",
		"title" : "Landscape 8:3",
		"comment": "Landscape 8:3"
	},
	{
		"el": "#atoms-ad",
		"title" : "Ad 300x250",
		"comment": "Ad 300x250"
	},
	{
	"el": "#atoms-avatar",
		"title" : "Avatar",
		"comment": "Avatar"
	},
	{
		"el": "#atoms-icons",
		"title" : "Icons",
		"comment": "Icons"
	},
	{
		"el": "#atoms-loading-icon",
		"title" : "Loading Icon",
		"comment": "Loading Icon"
	},
	{
		"el": "#atoms-favicon",
		"title" : "Favicon",
		"comment": "Favicon"
	},
	{
		"el": "#atoms-text-fields",
		"title" : "Text Fields",
		"comment": "Text Fields"
	},
	{
		"el": "#atoms-select-menu",
		"title" : "Select Menu",
		"comment": "Select Menu"
	},
	{
		"el": "#atoms-checkbox",
		"title" : "Checkbox",
		"comment": "Checkbox"
	},
	{
		"el": "#atoms-radio-buttons",
		"title" : "Radio Buttons",
		"comment": "Radio Buttons"
	},
	{
		"el": "#atoms-html5-inputs",
		"title" : "HTML5 Inputs",
		"comment": "HTML5 Inputs"
	},
	{
		"el": "#atoms-buttons",
		"title" : "Buttons",
		"comment": "Buttons"
	},
	{
		"el": "#atoms-table",
		"title" : "Table",
		"comment": "Table"
	},
	{
		"el": "#molecules-byline",
		"title" : "Byline",
		"comment": "Byline"
	},
	{
		"el": "#molecules-address",
		"title" : "Address",
		"comment": "Address"
	},
	{
		"el": "#molecules-heading-group",
		"title" : "Heading Group",
		"comment": "Heading Group"
	},
	{
		"el": "#molecules-blockquote-with-citation",
		"title" : "Blockquote with Citation",
		"comment": "Blockquote with Citation"
	},
	{
		"el": "#molecules-intro-text",
		"title" : "Intro Text",
		"comment": "Intro Text"
	},
	{
		"el": "#molecules-one-up",
		"title" : "One Up",
		"comment": "One Up"
	},
	{
		"el": "#molecules-two-up",
		"title" : "Two Up",
		"comment": "Two Up"
	},
	{
		"el": "#molecules-three-up",
		"title" : "Three Up",
		"comment": "Three Up"
	},
	{
		"el": "#molecules-four-up",
		"title" : "Four Up",
		"comment": "Four Up"
	},
	{
		"el": "#molecules-media-block",
		"title" : "Media Block",
		"comment": "Media Block"
	},
	{
		"el": "#molecules-block-headline-byline",
		"title" : "Block Headline Byline",
		"comment": "Block Headline Byline"
	},
	{
		"el": ".block-hero",
		"title" : "Block Hero",
		"comment": "<p>The Block Hero area highlights one major story using a large image and a captivating headline.</p>"
	},
	{
		"el": "#molecules-block-hero-secondary",
		"title" : "Block Hero Secondary",
		"comment": "<p>Block Hero Secondary</p>"
	},
	{
		"el": "#molecules-block-thumb-headline",
		"title" : "Block Thumb Headline: 266x150 16:9",
		"comment": "Block Thumb Headline"
	},
	{
		"el": "#molecules-block-headline",
		"title" : "Block Headline",
		"comment": "Block Headline"
	},
	{
		"el": "#molecules-block-inset",
		"title" : "Block Inset",
		"comment": "Block Inset"
	},
	{
		"el": "#molecules-figure-with-caption",
		"title" : "Figure with Caption",
		"comment": "Figure with Caption"
	},
	{
		"el": ".search-form",
		"title" : "Search",
		"comment": "<p>Search is an incredibly important priority, especially for mobile. It is a great idea to give users the ability to jump directly to what they are looking for without forcing them to wade through your site's navigation. Check out the <a href=\"http://burton.com\">Burton</a> and <a href=\"http://yelp.com\">Yelp</a> mobile sites for great examples of experiences that prioritize search.</p><p>We're also using the <a href=\"http://dev.w3.org/html5/markup/input.search.html\">HTML5 search input type</a>, which is great for mobile devices that can <a href=\"http://diveintohtml5.info/forms.html\">bring up the appropriate virtual keyboard</a> for many smartphones. And like the main header navigation, we're hiding the search form on small screens to save space. Clicking the search anchor toggles the form. </p>"
	},
	{
		"el": "#molecules-comment-form",
		"title" : "Comment Form",
		"comment": "Comment Form"
	},
	{
		"el": "#molecules-newsletter",
		"title" : "Newsletter",
		"comment": "Newsletter"
	},
	{
		"el": "#nav",
		"title" : "Primary Navigation",
		"comment": "<p>The Primary Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
	},
	{
		"el": "#molecules-footer-nav",
		"title" : "Footer Nav",
		"comment": "Footer Nav"
	},
	{
		"el": "#molecules-breadcrumbs",
		"title" : "Bread Crumbs",
		"comment": "Bread Crumbs"
	},
	{
		"el": "#molecules-pagination",
		"title" : "Pagination",
		"comment": "Pagination"
	},
	{
		"el": "#molecules-tabs",
		"title" : "Tabs",
		"comment": "Tabs"
	},
	{
		"el": "#molecules-social-share",
		"title" : "Social Share",
		"comment": "Social Share"
	},
	{
		"el": "#molecules-accordion",
		"title" : "Accordion",
		"comment": "Accordion"
	},
	{
		"el": "#molecules-single-comment",
		"title" : "Single Comment",
		"comment": "Single Comment"
	},
	{
		"el": "#molecules-alert",
		"title" : "Alert",
		"comment": "Alert"
	},
	{
		"el": "#organisms-header",
		"title" : "Header",
		"comment": "Header"
	},
	{
		"el": "#organisms-footer",
		"title" : "Footer",
		"comment": "Footer"
	},
	{
		"el": "#organisms-article-body",
		"title" : "Article Body",
		"comment": "Article Body"
	},
	{
		"el": "#organisms-comment-thread",
		"title" : "Comment Thread",
		"comment": "Comment Thread"
	},
	{
		"el": "#organisms-latest-posts",
		"title" : "Latest Posts",
		"comment": "Latest Posts"
	},
	{
		"el": "#organisms-recent-tweets",
		"title" : "Recent Tweets",
		"comment": "Recent Tweets"
	},
	{
		"el": "#organisms-related-posts",
		"title" : "Related Posts",
		"comment": "Related Posts"
	},
	{
		"el": "header[role=banner]",
		"title" : "Masthead",
		"comment": "The main header of the site doesn't take up too much screen real estate in order to keep the focus on the core content. It's using a linear CSS gradient instead of a background image to give greater design flexibility and reduce HTTP requests."
	},
	{
		"el": ".article-header h1",
		"title" : "Article Header",
		"comment": "<p>The article header should be no more than 140 characters. </p>"
	},
]
};
