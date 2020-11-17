# Vena Solutions Mockup

A working responsive webpage mockup for Vena Solutions. The site is built from scratch using Tailwind.css, custom css, and javascript.

## Notes

### Carousel 

For the carousel section, I built an interpretation of the assigned spec: "The first product feature needs to be a carousel image (with 3 product screenshots). The images can be reused". From this description it was a bit difficult to know exactly what route to take for building this out - especially on a mobile device. I would not normally use a carousel in this type of layout for mobile - with text on left, carousel on right - as the images get detached from the accompanying text, which isn't ideal for UX and ease of use. In my version, I made each of the text paragraphs on the left column highlighted and clickable to make them more clearly connected with the corresponding slides in the carousel.

### Breadcrumbs

While it was specified that breadcrumbs were to be included in the layout, they normally only exist on subpages, not on the homepage.  As such I included a "solutions" page which includes breadcrumbs in the style of Vena's current site.

### CDNs

For speed of development I used the CDN for Tailwind.  As noted in the docs, this is a large file and will most likely affect page load time/speed. In a production build I would include hard copies and make use of the Tailwind sass extension files/libraries. 

### SEO, AODA

I included very basic SEO and AODA tags. For production this would be more thoroughly tuned up.

### Optimization

Load speed was not optimized in this mockup, though a basic lazyload library was used to improve image loading.