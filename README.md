# HNG Stage 1b: Testable Profile Card

## Project Overview
This project is a high-precision, accessible, and responsive Profile Card built using semantic HTML, modern CSS (Flexbox/Grid), and Vanilla JavaScript. It is designed to be fully testable via automated scripts, with specific `data-testid` attributes assigned to every core element.

## Key Features
- **Semantic HTML5:** Built using `<article>`, `<figure>`, `<section>`, and `<nav>` to ensure maximum machine readability and SEO.
- **Dynamic Epoch Time:** Features a live-updating display of the current Unix Epoch time in milliseconds (`Date.now()`).
- **Responsive Layout:** - **Mobile:** A clean, centered vertical stack for readability on small screens.
    - **Desktop:** A sophisticated side-by-side layout using CSS Flexbox.
- **Accessibility (A11y):**
    - High-contrast text colors meeting WCAG AA standards.
    - Meaningful `alt` text for the avatar image.
    - Visible focus states for keyboard-only navigation.
    - `aria-live="polite"` on dynamic time updates to notify screen readers without interruption.
- **Security:** External social links use `target="_blank"` with `rel="noopener noreferrer"` to prevent security vulnerabilities.

## Technical Implementation

### High-Precision Timer
**Logic:** The "Current User Time" updates every 10ms.
**Reasoning:** While a 1-second interval is standard, a 10ms interval was chosen to showcase the high-precision nature of the Unix Epoch and to provide a "live" feel that proves the UI is actively rendering and responsive.

### Modern CSS
- **Variables:** Used for centralized color and spacing management.
- **Grid Layout:** Employed for the Hobbies/Dislikes lists to ensure perfect alignment regardless of content length.
- **Flexbox:** Used for the main card container to handle the mobile-to-desktop transition seamlessly.

## Testing
Every required element is tagged with a `data-testid` for automated verification:
- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-avatar`
- `test-user-social-links`
- ...and more.

## How to Run
1. Clone the repository.
2. Open `index.html` in your browser.
3. Observe the live millisecond counter and test responsiveness by resizing your browser window.

## Author
**Obianyor Chukwuebuka Chinonso (Jason)** Automation Engineer & Full-stack Developer