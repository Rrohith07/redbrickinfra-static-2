RED BRICK INFRA — VERCEL DEPLOYMENT PACKAGE
=============================================

Website type
------------
Static website built with HTML, CSS, and vanilla JavaScript. No build command,
framework preset, or server-side runtime is required.

Deploy with GitHub + Vercel
---------------------------
1. Extract this ZIP. The index.html file must be at the repository root, alongside
   css/, js/, assets/, about/, services/, projects/, contact-us/, and 404.html.
2. Create a new repository on https://github.com/new. A repository named
   redbrickinfra-website is a reasonable choice. For a public business website,
   a public repository is convenient, but private also works with Vercel.
3. In the extracted folder, open Terminal and run:
      git init
      git add .
      git commit -m "Prepare Red Brick Infra website for deployment"
      git branch -M main
      git remote add origin https://github.com/YOUR-GITHUB-USERNAME/redbrickinfra-website.git
      git push -u origin main
   Replace YOUR-GITHUB-USERNAME with your actual GitHub username. If Git says
   your identity is not configured, set git config user.name and user.email first.
   If GitHub asks for authentication, use its browser sign-in flow or a supported
   personal access token; your GitHub account password is not accepted for Git pushes.
4. Go to https://vercel.com, sign in, and choose Add New → Project.
5. Import the redbrickinfra-website repository and select the correct GitHub account.
6. In project settings, use these build settings:
      Framework Preset: Other
      Root Directory: ./
      Build Command: leave empty / override disabled
      Output Directory: . (or leave the default if Vercel detects static files)
      Install Command: leave empty / override disabled
7. Click Deploy. When deployment finishes, open the generated *.vercel.app URL.
8. Test the home page, About, Services, Projects, Contact Us, the package PDF,
   project video, mobile menu, FAQ accordions, image lightbox, and quote-to-WhatsApp
   flow. Test on both mobile and desktop.
9. Each future push to the connected GitHub branch will trigger a new Vercel deployment.

Important before launch
-----------------------
- The quote form does NOT save submissions to a database or send email. It opens
  WhatsApp with a pre-filled message. Test that the correct WhatsApp account opens.
- The sitemap.xml and robots.txt currently name https://redbrickinfra.in. After
  deploying, either connect that domain in Vercel and confirm DNS/HTTPS, or update
  both files to your actual production domain and redeploy.
- Check the two displayed phone numbers (+91 98485 27399 and +91 9959995036),
  the WhatsApp number (+91 98485 27399), and the email addresses before launch.
- The project video is about 21 MB. It will work as a static asset, but can be slow
  on mobile networks; compress it if performance is a priority.
- The included .htaccess file was removed because Vercel does not use Apache
  .htaccess rules. The site uses its custom 404.html page.

QA performed on this package
----------------------------
- Corrected nested-page paths for CSS, JavaScript, images, internal navigation,
  and local downloads.
- Corrected dynamically rendered image paths on nested pages.
- Checked local HTML references against the files included in the package.
- Checked JavaScript syntax for js/site.js and js/data.js.
- This is a static/package-level check, not a live browser/device test. Verify the
  deployed URL and the WhatsApp handoff before sharing it publicly.
