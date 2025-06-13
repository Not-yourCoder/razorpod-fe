# Razorpod Frontend

## Project Setup & Local Development

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd razorpod-fe
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Design Choices & Trade-offs

- **State Management:**
  - Used Redux Toolkit for global state (products, categories, cart) for predictable state and easy debugging.
- **Routing:**
  - Used `@tanstack/react-router` for flexible, type-safe routing.
- **Responsiveness:**
  - Tailwind CSS utility classes are used for rapid, consistent, and responsive UI development.
- **Animations:**
  - GSAP is used for smooth product grid and card animations.
- **Component Structure:**
  - Components are modular and colocated by feature for maintainability.
- **Performance:**
  - Product grids use virtualization and horizontal scrolling for large datasets.
- **Accessibility:**
  - Interactive elements (buttons, links) use proper ARIA labels and keyboard navigation where possible.

---

## Third-Party Libraries Used

- **@tanstack/react-router**: Advanced, type-safe routing for React apps.
- **Redux Toolkit**: Simplifies Redux state management and reduces boilerplate.
- **react-redux**: Connects React components to the Redux store.
- **GSAP**: For performant, timeline-based animations.
- **react-hot-toast**: For user-friendly toast notifications.
- **lucide-react**: For modern, consistent SVG icon components.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

**Why these choices?**
- Chosen for their popularity, community support, and ability to solve specific problems (state, routing, animation, UI consistency) efficiently.

---

## Notes
- If you encounter issues, ensure your Node.js version is compatible and dependencies are installed correctly.
- For environment variables or API endpoints, check the `.env` file or project documentation.
