---
name: qa-testing
description: Provides comprehensive QA testing checklists and guidance for web applications. Analyzes git changes to suggest relevant test scenarios, validates HTML/CSS/JavaScript functionality, tests multilingual features, responsive design, accessibility, and SEO. Use when committing code, reviewing changes, or when the user asks for testing help or QA assistance.
---

# QA Testing Assistant

## Quick Start

When you commit code or ask for testing help:

1. **Analyze changes**: Review git diff to identify modified files
2. **Suggest test scenarios**: Generate relevant test cases based on changes
3. **Provide checklist**: Create a focused testing checklist
4. **Guide execution**: Walk through critical test paths

## Testing Workflow

### Step 1: Analyze Changes

Check what files changed:
```bash
git diff --cached  # Staged changes
git diff HEAD~1    # Last commit
```

### Step 2: Identify Test Areas

Based on file types changed:

**HTML files** → Test:
- Page structure and semantic HTML
- Meta tags and SEO elements
- Links and navigation
- Forms and interactive elements
- Accessibility attributes

**CSS files** → Test:
- Visual layout and styling
- Responsive breakpoints
- Cross-browser compatibility
- Animation and transitions
- Print styles (if applicable)

**JavaScript files** → Test:
- Functionality and interactions
- Event handlers
- Language switching
- Smooth scrolling
- Intersection Observer animations
- Error handling

**Multiple files** → Test:
- Integration between components
- Cross-page functionality
- Shared resources (translations, styles)

### Step 3: Execute Test Checklist

Use the focused checklist below based on your changes.

## Core Test Checklist

### Functionality Tests

- [ ] **Navigation**: All links work correctly
- [ ] **Language switching**: All 5 languages (RO, EN, FR, PL, UA) display correctly
- [ ] **Smooth scrolling**: Anchor links scroll smoothly to sections
- [ ] **Header behavior**: Header changes on scroll (adds 'scrolled' class)
- [ ] **Reveal animations**: Sections animate on scroll into view
- [ ] **Forms**: All form inputs work (if applicable)
- [ ] **Phone links**: Reservation phone link works (`tel:+40754358065`)
- [ ] **External links**: Open in new tabs with proper attributes

### Visual/UI Tests

- [ ] **Layout**: No broken layouts or overflow issues
- [ ] **Typography**: Fonts load correctly (Montserrat, Playfair Display)
- [ ] **Images**: All images load and display correctly
- [ ] **Icons**: Favicons and touch icons present
- [ ] **Colors**: Brand colors consistent throughout
- [ ] **Spacing**: Consistent padding and margins
- [ ] **Animations**: Smooth transitions without jank

### Responsive Design Tests

Test on multiple viewport sizes:

- [ ] **Mobile** (375px - 480px): Layout adapts correctly
- [ ] **Tablet** (768px - 1024px): Navigation and content reflow properly
- [ ] **Desktop** (1280px+): Full layout displays correctly
- [ ] **Large screens** (1920px+): Content doesn't stretch excessively
- [ ] **Landscape/Portrait**: Orientation changes handled

### Cross-Browser Tests

- [ ] **Chrome/Edge**: Latest version
- [ ] **Firefox**: Latest version
- [ ] **Safari**: Latest version (macOS/iOS)
- [ ] **Mobile browsers**: Chrome Mobile, Safari Mobile

### Multilingual Tests

For each language (RO, EN, FR, PL, UA):

- [ ] **Language switcher**: Button changes active state
- [ ] **Content translation**: All text translates correctly
- [ ] **HTML lang attribute**: Updates to match selected language
- [ ] **RTL support**: If applicable (not needed for these languages)
- [ ] **Special characters**: Display correctly (ă, î, ș, ț, etc.)
- [ ] **Text overflow**: No text cut off in different languages

### Accessibility Tests

- [ ] **Keyboard navigation**: All interactive elements accessible via keyboard
- [ ] **Focus indicators**: Visible focus states on links/buttons
- [ ] **Alt text**: Images have descriptive alt attributes
- [ ] **ARIA labels**: Used where semantic HTML insufficient
- [ ] **Color contrast**: Text meets WCAG AA standards (4.5:1 ratio)
- [ ] **Screen reader**: Test with VoiceOver/NVDA (if available)
- [ ] **Semantic HTML**: Proper use of header, nav, main, footer, section

### SEO Tests

- [ ] **Meta tags**: Title, description present and unique per page
- [ ] **Open Graph**: OG tags present for social sharing
- [ ] **Canonical URLs**: Set correctly
- [ ] **Hreflang tags**: Present for all language versions
- [ ] **Structured data**: JSON-LD schema present (if applicable)
- [ ] **Sitemap**: sitemap.xml accessible
- [ ] **Robots.txt**: Configured correctly

### Performance Tests

- [ ] **Page load**: Initial load under 3 seconds
- [ ] **Font loading**: Fonts don't cause FOIT/FOUT
- [ ] **Image optimization**: Images appropriately sized
- [ ] **Script loading**: JavaScript doesn't block rendering
- [ ] **Google Analytics**: Loads correctly without blocking

### Legal/Compliance Tests

- [ ] **Cookie policy**: Link works and page displays correctly
- [ ] **Privacy policy**: Link works and page displays correctly
- [ ] **Terms & Conditions**: Link works and page displays correctly
- [ ] **GDPR compliance**: Cookie consent (if implemented)
- [ ] **ANPC links**: Footer links work correctly

## Change-Specific Testing

### HTML Changes

**If you modified HTML structure:**
- [ ] Validate HTML: `https://validator.w3.org/`
- [ ] Check semantic structure (header, nav, main, footer)
- [ ] Verify all IDs are unique
- [ ] Test anchor links (`#section-name`)
- [ ] Check meta tags are complete

**If you added/modified forms:**
- [ ] Test all input types
- [ ] Validate required fields
- [ ] Test form submission (if applicable)
- [ ] Check error messages display

### CSS Changes

**If you modified styles:**
- [ ] Visual regression: Compare before/after
- [ ] Test all breakpoints affected
- [ ] Check z-index stacking
- [ ] Verify no layout shifts (CLS)
- [ ] Test hover/focus states

**If you added animations:**
- [ ] Test animation performance
- [ ] Verify animation triggers correctly
- [ ] Check animation doesn't cause jank
- [ ] Test with reduced motion preference

### JavaScript Changes

**If you modified JavaScript:**
- [ ] Test affected functionality
- [ ] Check browser console for errors
- [ ] Verify event listeners work
- [ ] Test edge cases and error handling
- [ ] Check memory leaks (if long-running code)

**If you modified translations:**
- [ ] Test all language switches
- [ ] Verify translation keys exist for all languages
- [ ] Check for missing translations
- [ ] Test special characters in translations

## Testing Tools

### Manual Testing
- Browser DevTools (Chrome/Firefox)
- Responsive Design Mode
- Network throttling (slow 3G)
- Lighthouse audit

### Quick Validation
```bash
# Check HTML validity (if validator CLI available)
html-validator index.html

# Check for broken links (if link checker available)
linkchecker index.html
```

## Critical Paths

Always test these critical user journeys:

1. **Homepage → Navigation → Sections**
   - Load homepage
   - Click navigation links
   - Verify smooth scroll works
   - Check language switch

2. **Language Switching**
   - Switch between all 5 languages
   - Verify content updates
   - Check URL/lang attribute

3. **Contact Flow**
   - Click reservation button
   - Verify phone link works
   - Check contact section displays

4. **Legal Pages**
   - Navigate to Terms & Conditions
   - Navigate to Privacy Policy
   - Navigate to Cookie Policy
   - Verify all links work

## Reporting Issues

When you find issues, document:

- **What**: What functionality is broken
- **Where**: Which page/section
- **When**: Steps to reproduce
- **Expected**: What should happen
- **Actual**: What actually happens
- **Browser/Device**: Testing environment

## Quick Test Commands

```bash
# See what changed
git diff HEAD~1

# See staged changes
git diff --cached

# Test specific file changes
git diff HEAD~1 -- path/to/file.html
```

## Additional Resources

- For detailed test scenarios, see [examples.md](examples.md)
- For comprehensive checklist, see [checklist.md](checklist.md)