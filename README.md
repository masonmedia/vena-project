# Vena Solutions Mockup

A template of README best practices to make your README simple to understand and easy to use.

## Description

A working responsive webpage mockup for Vena Solutions. The site is built from scratch using Tailwind.css, custom css, and javascript.

## Notes

### Carousel 

For the carousel section I made an interpretation of the assigned spec: "The first product feature needs to be a carousel image (with 3 product screenshots). The images can be reused". From this description it was a bit difficult to know exactly what route to take for building this out - especially on a mobile device. I would not normally use a carousel in this format for a mobile layout as the images get detached from the accompanying text which isn't good for UX and ease of use. In my version, I made each of the text paragraphs on the left column clickable and correlating to an accompanying slide in the adjacent column on the right.

### CDNs

I use CDNs for Tailwind, the AOS animation library, and Swiper.js carousel.  In a production build I would include hard copies and make use of the Tailwind sass extension files/libraries. 

### SEO, AODA

I included very basic SEO and AODA tags. For production this would be more thoroughly tuned up.

### Optimization

Load speed was not optimized in this mockup, though a basic lazyload library was used to improve image loading.