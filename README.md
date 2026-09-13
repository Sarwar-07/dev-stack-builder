@'
# 🧱 Dev Stack Builder

Dev Stack Builder is a modern, responsive web application designed for developers to discover, compare, and assemble tools into a tailored development stack. Built using React, Vite, and Tailwind CSS.

---

## 🔗 Project Links
- **Live Site:** https://cerulean-hamster-56419e.netlify.app/
- **GitHub Repository:** https://github.com/Sarwar-07/dev-stack-builder

---

## 🛠️ Technology Used
- **Library:** React.js (via Vite)
- **Styling:** Tailwind CSS (Custom gradient theme: Orange -> Pink -> Violet)
- **Notifications:** React-Toastify
- **Data & Icons:** Custom local JSON dataset and Devicon SVG assets

---

## ✨ Key Features
1. **Interactive Stack Builder:** Add tools to a dedicated "Your Stack" sidebar with dynamic counters, duplicate entry prevention, individual item removal, and a batch "Clear All" function.
2. **Dynamic UI Card States:** Technology cards react in real-time—once added, the card button disables and displays "✓ Added to Stack" to prevent accidental clicks.
3. **Toast Notifications:** Instant feedback alerts powered by react-toastify for successful additions, duplicate attempts, single removals, and clearing the entire stack.
4. **Responsive Layout & Sticky Nav:** Fluid layout shifting from single-column on mobile to three columns on desktop, paired with a sticky navigation bar and hamburger drawer.

---

## 🚀 Getting Started Locally

1. Clone the repository:
   git clone https://github.com/Sarwar-07/dev-stack-builder.git

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

---

## 📚 React Questions & Architecture

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that lets developers write HTML-like elements inside JavaScript files. It is used in React because it makes building UI components straightforward by keeping the layout and rendering logic together in one place. Under the hood, JSX compiles to native React.createElement() function calls that output Virtual DOM objects.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. A child cannot alter its own incoming props directly.
- **State:** Mutable, internal memory managed inside a component. When state is updated using its setter function, React re-renders the component to show the updated values.

### 3. What does the useState hook do, and where did you use it in this project?
The useState hook allows functional components to store and update reactive local state. In this project, useState is used in:
- `App.jsx`: To track the loaded technologies array (technologies), the selected items in the stack (stack), and the initial data fetching status (loading).
- `Navbar.jsx`: To toggle the mobile navigation drawer (mobileMenuOpen).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect handles side effects (such as data fetching, timers, or DOM subscriptions) outside of the main render loop. In this project, useEffect is paired with an empty dependency array ([]) to fetch public/technologies.json once when the component initially mounts, preventing infinite render and re-fetch loops.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key prop during its Virtual DOM reconciliation process to identify which items have changed, been added, or been removed. Providing a unique identifier allows React to update only the modified list item rather than re-rendering the entire list, ensuring better performance and preserving state.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI output based on a state value or logical condition.

Example from Sidebar.jsx (showing the empty stack message when no items exist):
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
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: The parent sends data downward through props attributes (for example, passing <TechGrid stack={stack} technologies={technologies} />).

Child to Parent: The parent passes a callback function downward via props (for example, onAdd={handleAddToStack}). When an event triggers in the child (such as clicking the "Add to Stack" button), the child invokes that callback function with data as an argument (for example, onAdd(tech)), updating the parent component's state.
'@ | Out-File -FilePath README.md -Encoding utf8
