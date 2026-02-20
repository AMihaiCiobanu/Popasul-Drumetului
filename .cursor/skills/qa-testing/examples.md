# QA Testing Examples

## Example 1: Testing HTML Changes

**Scenario**: You modified `index.html` to add a new section.

**Test Process**:

1. **Check git diff**:
   ```bash
   git diff HEAD~1 index.html
   ```

2. **Identify what changed**:
   - Added new "Events" section
   - Added navigation link
   - Added translations for new section

3. **Create focused test checklist**:
   - [ ] New section displays correctly
   - [ ] Navigation link scrolls to new section
   - [ ] Smooth scroll works
   - [ ] Translations exist for all 5 languages
   - [ ] Section animates on scroll (reveal effect)
   - [ ] Responsive layout works on mobile

4. **Execute tests**:
   - Open page in browser
   - Click navigation link
   - Verify smooth scroll
   - Switch languages, verify translations
   - Test on mobile viewport
   - Check browser console for errors

5. **Report results**:
   - ✅ All tests passed
   - ⚠️ Translation missing for FR language → Fixed
   - ✅ Ready to commit

## Example 2: Testing CSS Changes

**Scenario**: You modified `styles.css` to update the header styling.

**Test Process**:

1. **Check git diff**:
   ```bash
   git diff HEAD~1 styles.css
   ```

2. **Identify what changed**:
   - Updated header background color
   - Changed header height on scroll
   - Modified navigation link hover states

3. **Create focused test checklist**:
   - [ ] Header displays with new background color
   - [ ] Header changes correctly on scroll
   - [ ] Navigation links have new hover effect
   - [ ] No layout shifts (CLS)
   - [ ] Works on all breakpoints
   - [ ] Color contrast meets accessibility standards

4. **Execute tests**:
   - Load page, verify initial header
   - Scroll down, verify header changes
   - Hover over nav links
   - Test on mobile/tablet/desktop
   - Check Lighthouse for CLS score
   - Verify color contrast (use DevTools)

5. **Report results**:
   - ✅ Visual changes look good
   - ⚠️ Color contrast ratio 4.2:1 (needs 4.5:1) → Adjusted
   - ✅ Ready to commit

## Example 3: Testing JavaScript Changes

**Scenario**: You modified `script.js` to fix language switching.

**Test Process**:

1. **Check git diff**:
   ```bash
   git diff HEAD~1 script.js
   ```

2. **Identify what changed**:
   - Fixed language switcher bug
   - Updated translation loading logic
   - Added error handling

3. **Create focused test checklist**:
   - [ ] Language switcher works for all 5 languages
   - [ ] Translations load correctly
   - [ ] HTML lang attribute updates
   - [ ] No console errors
   - [ ] Error handling works (test with network throttling)
   - [ ] Previous language selection persists (if applicable)

4. **Execute tests**:
   - Click each language button (RO, EN, FR, PL, UA)
   - Verify content changes
   - Check HTML lang attribute in DevTools
   - Open console, verify no errors
   - Throttle network to 3G, test error handling
   - Refresh page, verify language persists

5. **Report results**:
   - ✅ All languages work correctly
   - ✅ Error handling works
   - ✅ No console errors
   - ✅ Ready to commit

## Example 4: Testing Multiple File Changes

**Scenario**: You added a new "Reservations" page with HTML, CSS, and JS changes.

**Test Process**:

1. **Check git diff**:
   ```bash
   git diff HEAD~1
   ```

2. **Identify what changed**:
   - New `reservations.html` file
   - Updated `styles.css` with reservation styles
   - Updated `script.js` with reservation form logic
   - Updated navigation in `index.html`

3. **Create comprehensive test checklist**:
   - [ ] New page loads correctly
   - [ ] Navigation link works from homepage
   - [ ] Form displays correctly
   - [ ] Form validation works
   - [ ] Styling matches site design
   - [ ] Translations work for all languages
   - [ ] Responsive design works
   - [ ] Form submission works (if implemented)
   - [ ] Error messages display correctly
   - [ ] Integration with existing pages works

4. **Execute tests**:
   - Navigate to new page from homepage
   - Test form with valid/invalid inputs
   - Switch languages, verify translations
   - Test on all device sizes
   - Verify form submission (if implemented)
   - Check console for errors
   - Test navigation back to homepage

5. **Report results**:
   - ✅ Page loads correctly
   - ✅ Form validation works
   - ⚠️ Missing translation for PL language → Added
   - ✅ Responsive design works
   - ✅ Ready to commit

## Example 5: Quick Pre-Commit Test

**Scenario**: You made a small CSS fix and want to quickly verify before committing.

**Quick Test (2 minutes)**:

1. **Check what changed**:
   ```bash
   git diff --cached
   ```

2. **Quick verification**:
   - [ ] Page loads (no 404 errors)
   - [ ] No console errors (F12 → Console)
   - [ ] Visual change looks correct
   - [ ] Mobile view still works

3. **Execute**:
   - Open page in browser
   - Check console
   - Verify visual change
   - Resize to mobile viewport

4. **Result**:
   - ✅ Quick test passed
   - ✅ Safe to commit

## Example 6: Full Regression Test

**Scenario**: You're about to deploy and want to ensure everything works.

**Full Test Process (30-45 minutes)**:

1. **Test all pages**:
   - [ ] index.html - All sections work
   - [ ] termeni-conditii.html - All links work
   - [ ] politica-confidentialitate.html - Content displays
   - [ ] politica-cookies.html - Content displays

2. **Test all languages**:
   - [ ] RO - All content translates
   - [ ] EN - All content translates
   - [ ] FR - All content translates
   - [ ] PL - All content translates
   - [ ] UA - All content translates

3. **Test all breakpoints**:
   - [ ] Mobile (375px)
   - [ ] Tablet (768px)
   - [ ] Desktop (1280px)
   - [ ] Large (1920px)

4. **Test all browsers**:
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari

5. **Run Lighthouse audit**:
   - [ ] Performance score ≥ 90
   - [ ] Accessibility score ≥ 90
   - [ ] Best Practices score ≥ 90
   - [ ] SEO score ≥ 90

6. **Accessibility check**:
   - [ ] Keyboard navigation works
   - [ ] Focus indicators visible
   - [ ] Color contrast meets standards
   - [ ] Alt text on images

7. **Report results**:
   - ✅ All pages tested
   - ✅ All languages work
   - ✅ All breakpoints work
   - ✅ Lighthouse scores: P95, A100, BP100, SEO100
   - ✅ Accessibility checks passed
   - ✅ Ready to deploy

## Example 7: Testing After Bug Fix

**Scenario**: You fixed a bug where language switcher wasn't working on mobile.

**Focused Test Process**:

1. **Identify the fix**:
   ```bash
   git diff HEAD~1 script.js
   ```
   - Fixed touch event handling for mobile language switcher

2. **Create targeted test checklist**:
   - [ ] Language switcher works on mobile (touch)
   - [ ] Language switcher still works on desktop (click)
   - [ ] Dropdown opens/closes correctly
   - [ ] Language selection works
   - [ ] No console errors

3. **Execute tests**:
   - Test on actual mobile device (or DevTools mobile mode)
   - Tap language switcher button
   - Tap language option
   - Verify language changes
   - Test on desktop with mouse
   - Check console for errors

4. **Verify fix didn't break anything**:
   - [ ] Desktop language switching still works
   - [ ] Other mobile interactions still work
   - [ ] No new errors introduced

5. **Report results**:
   - ✅ Mobile language switcher fixed
   - ✅ Desktop still works
   - ✅ No regressions
   - ✅ Ready to commit

## Testing Tips

### When to Use Each Test Level

**Quick Smoke Test**: Use for small changes (typo fixes, minor CSS tweaks)
**Standard Test**: Use for feature additions or modifications
**Full Regression**: Use before major releases or deployments

### Common Issues to Watch For

1. **Missing translations**: Always check all 5 languages
2. **Console errors**: Always check browser console
3. **Layout shifts**: Watch for unexpected movement
4. **Broken links**: Test all navigation and footer links
5. **Mobile issues**: Always test responsive design
6. **Performance**: Check Lighthouse scores periodically

### Efficient Testing Workflow

1. **Start with git diff**: Understand what changed
2. **Create focused checklist**: Only test what's relevant
3. **Test critical paths first**: Most important functionality
4. **Use browser DevTools**: Faster than manual inspection
5. **Document issues**: Note what needs fixing
6. **Re-test after fixes**: Verify issues are resolved