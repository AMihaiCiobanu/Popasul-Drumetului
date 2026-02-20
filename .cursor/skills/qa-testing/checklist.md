<!-- @format -->

# Comprehensive QA Testing Checklist

## Pre-Commit Testing

### Quick Smoke Test (2-3 minutes)

- [ ] Page loads without errors
- [ ] No console errors (F12 → Console)
- [ ] Navigation works
- [ ] Language switcher works
- [ ] Mobile view looks correct

### Standard Test (10-15 minutes)

- [ ] All items from Quick Smoke Test
- [ ] Test all pages (index, terms, privacy, cookies)
- [ ] Test all languages
- [ ] Test responsive breakpoints
- [ ] Test all links (internal and external)

### Full Regression Test (30-45 minutes)

- [ ] All items from Standard Test
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Performance check (Lighthouse)
- [ ] SEO validation
- [ ] Legal compliance check

## Page-Specific Checklists

### index.html

**Hero Section**

- [ ] Hero image loads
- [ ] Title displays correctly in all languages
- [ ] CTA buttons work (Menu, Gallery)
- [ ] Smooth scroll to sections works

**Navigation**

- [ ] All nav links work
- [ ] Active state on current section
- [ ] Mobile menu (if applicable)
- [ ] Language switcher dropdown works
- [ ] Reservation button links to phone

**About Section**

- [ ] Text displays correctly
- [ ] Features/icons display
- [ ] Translations work

**Menu Section**

- [ ] Menu tabs switch correctly
- [ ] Menu items display
- [ ] Translations work for all categories

**Gallery Section**

- [ ] Images load
- [ ] Lightbox/modal works (if implemented)
- [ ] Images are optimized

**Reviews Section**

- [ ] Reviews display correctly
- [ ] Translations work
- [ ] External review links work (if applicable)

**Contact Section**

- [ ] Address displays correctly
- [ ] Phone link works
- [ ] Map displays (if embedded)
- [ ] Hours display correctly

**Footer**

- [ ] All footer links work
- [ ] Legal links (Terms, Privacy, Cookies)
- [ ] ANPC/SOL links work
- [ ] Copyright year correct

### termeni-conditii.html

- [ ] Page loads correctly
- [ ] Navigation header works
- [ ] All sections display
- [ ] Links within page work
- [ ] External links (ANPC, SOL) work
- [ ] Back to homepage works

### politica-confidentialitate.html

- [ ] Page loads correctly
- [ ] GDPR information displays
- [ ] Contact information correct
- [ ] All links work

### politica-cookies.html

- [ ] Page loads correctly
- [ ] Cookie information displays
- [ ] Cookie consent (if implemented) works
- [ ] Links work

## Browser-Specific Tests

### Chrome/Edge

- [ ] Latest version works
- [ ] DevTools show no errors
- [ ] Performance tab shows no issues

### Firefox

- [ ] Latest version works
- [ ] Console shows no errors
- [ ] Responsive design mode works

### Safari

- [ ] macOS Safari works
- [ ] iOS Safari works (if testing)
- [ ] No Safari-specific issues

## Device-Specific Tests

### iPhone (375px - 428px)

- [ ] Layout adapts correctly
- [ ] Touch targets are adequate (44x44px minimum)
- [ ] Text is readable without zooming
- [ ] Navigation is accessible

### iPad (768px - 1024px)

- [ ] Layout uses tablet space effectively
- [ ] Navigation works
- [ ] Images scale appropriately

### Desktop (1280px+)

- [ ] Full layout displays
- [ ] Hover states work
- [ ] No excessive white space

## Performance Checklist

- [ ] **First Contentful Paint (FCP)**: < 1.8s
- [ ] **Largest Contentful Paint (LCP)**: < 2.5s
- [ ] **Time to Interactive (TTI)**: < 3.8s
- [ ] **Cumulative Layout Shift (CLS)**: < 0.1
- [ ] **Total Blocking Time (TBT)**: < 200ms
- [ ] **Speed Index**: < 3.4s

Run Lighthouse audit:

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Performance" and "Accessibility"
4. Click "Generate report"
5. Aim for 90+ scores

## Accessibility Checklist

### WCAG 2.1 Level AA Compliance

**Perceivable**

- [ ] All images have alt text
- [ ] Color is not the only means of conveying information
- [ ] Text contrast ratio ≥ 4.5:1
- [ ] Text can be resized up to 200% without loss of functionality

**Operable**

- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Focus indicators visible
- [ ] Sufficient time limits (if applicable)
- [ ] No content that flashes more than 3 times per second

**Understandable**

- [ ] Language of page declared (lang attribute)
- [ ] Language changes marked
- [ ] Navigation is consistent
- [ ] Form labels are clear

**Robust**

- [ ] Valid HTML
- [ ] Proper use of semantic elements
- [ ] ARIA attributes used correctly (if needed)

## SEO Checklist

### On-Page SEO

- [ ] Unique title tag per page (< 60 chars)
- [ ] Meta description per page (150-160 chars)
- [ ] H1 tag present and unique
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on images
- [ ] Internal linking structure
- [ ] Canonical URL set

### Technical SEO

- [ ] robots.txt configured
- [ ] sitemap.xml accessible
- [ ] Hreflang tags for all languages
- [ ] Structured data (JSON-LD) if applicable
- [ ] Mobile-friendly (responsive)
- [ ] Page speed optimized

### Social Media

- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Social sharing images set

## Security Checklist

- [ ] No sensitive data in source code
- [ ] External links use `rel="noopener noreferrer"`
- [ ] HTTPS enforced (in production)
- [ ] Cookie security flags set (if applicable)
- [ ] Content Security Policy headers (if applicable)

## Legal Compliance Checklist

- [ ] Terms & Conditions page accessible
- [ ] Privacy Policy page accessible
- [ ] Cookie Policy page accessible
- [ ] GDPR compliance (if EU users)
- [ ] ANPC information present (Romanian law)
- [ ] SOL platform link present
- [ ] Contact information complete and accurate

## Regression Testing

When testing after changes, verify:

- [ ] **No broken functionality**: Previously working features still work
- [ ] **No visual regressions**: Layout hasn't unexpectedly changed
- [ ] **No performance degradation**: Page still loads quickly
- [ ] **No new errors**: Console is clean
- [ ] **Cross-browser consistency**: Works in all supported browsers

## Issue Severity Levels

**🔴 Critical (Block Release)**

- Site doesn't load
- Critical functionality broken
- Security vulnerability
- Legal compliance issue

**🟡 High (Fix Before Next Release)**

- Major functionality broken
- Significant visual issue
- Performance degradation
- Accessibility blocker

**🟢 Medium (Fix Soon)**

- Minor functionality issue
- Small visual inconsistency
- Non-critical accessibility issue

**⚪ Low (Nice to Have)**

- Cosmetic improvements
- Minor optimizations
- Enhancement suggestions
