# 🧱 Dev Stack Builder

Dev Stack Builder is a modern, responsive web application designed for developers to discover, compare, and assemble tools into a tailored development stack. Built using React, Vite, and Tailwind CSS.

---

## 🛠️ Tech Stack
- **Library:** React.js (via Vite)
- **Styling:** Tailwind CSS
- **Notifications:** React-Toastify
- **Icons & Data:** Devicon & custom JSON dataset

---

## ✨ Key Features
1. **Interactive Stack Builder:** Add technologies to a dedicated sidebar with real-time counters, duplicate prevention, single-item removal, and batch clearing.
2. **Dynamic UI States:** Add buttons update dynamically to disabled states with visual confirmation once an item is selected.
3. **Toast Notifications:** Contextual feedback for duplicate additions, successful inclusions, removals, and clearing.
4. **Responsive Design:** Mobile hamburger drawer, adaptive multi-column grid layouts, and sticky navigation.

---

## 📚 React Concepts & Architecture

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within JavaScript files. It simplifies UI authoring by unifying layout structure and component logic in one place. Under the hood, JSX compiles to native `React.createElement()` function calls that output Virtual DOM objects.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed downward from a parent component to a child component. A child cannot directly modify incoming props.
- **State:** Mutable data managed locally and internally by the component. When state is updated via its setter function, React re-renders the component to display the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to declare, track, and update reactive state variables. In this project, `useState` is used in:
- `App.jsx`: Managing the loaded dataset (`technologies`), the selected cart items (`stack`), and the initial loading spinner (`loading`).
- `Navbar.jsx`: Toggling the responsive mobile dropdown navigation menu (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` enables components to execute side effects—such as data fetching, timers, or direct DOM operations—outside the primary render flow. In this project, `useEffect` is paired with an empty dependency array (`[]`) to load `public/technologies.json` exactly once when the component first mounts, preventing infinite fetch loops.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique `key` props during its Virtual DOM reconciliation process to identify which items have been modified, added, or removed. Supplying unique keys enables React to surgically update changed elements rather than re-rendering the entire list from scratch, preserving component state and maximizing render efficiency.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering refers to presenting distinct UI blocks based on state values or runtime conditions. 
**Example from `Sidebar.jsx`:**
```jsx
{stack.length === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-xl py-10 px-4 text-center">
    <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-0.5">
    {stack.map((item) => (
      <StackItem item="{item}" key="{item.id}" onRemove="{onRemove}"/>
    ))}
  </div>
)}