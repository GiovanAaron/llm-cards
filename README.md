# 🧠 Dynamic Result Viewer — Track 2: Web UI Task

## Project Overview

This project implements a **Dynamic Result Viewer** for **Track 2** of the Heywa challenge. It accepts a JSON array of heterogeneous "card" objects (`product`, `forum`, `research`) and dynamically renders each based on its type. The UI supports **tag-based filtering** to allow intuitive exploration of diverse data types in a unified layout.

🔗 GitHub Repo: [https://github.com/GiovanAaron/llm-cards](https://github.com/GiovanAaron/llm-cards)

---

## ⚙️ Setup Instructions

### Local Development

```bash
git clone https://github.com/GiovanAaron/llm-cards.git
cd llm-cards
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧩 Your Approach

- **Project Structure**
  - `pages/`: Contains the main homepage and routing logic.
  - `components/`: Holds reusable UI components including `ProductCard`, `ForumCard`, `ResearchCard`.
  - `services/`: Provides a mock API layer that simulates fetching card data.

- **Rendering Strategy**
  I originally planned to create a single dynamic `Card` component that would adapt to any card shape by detecting keys at runtime. However, after reviewing the dataset, I found that each card type (`product`, `forum`, `research`) had a consistent structure with predictable keys.  
  This allowed me to define **separate card components for each type**, simplifying the layout and styling process. Each component handles its own structure cleanly, with conditional rendering for optional values. While this approach is more maintainable for the current data, it’s a tradeoff in flexibility.

- **Design Decisions**
  The visual style was inspired by the **electric blue and bubblegum pink** logo, reflecting a younger Gen Z audience. I aimed to keep the interface minimalist, as per the brief, but the use of bold and varied colors may have made the UI feel a bit louder than intended. With more time, I would refine the visual tone to better balance vibrancy and minimalism.

- **Future Improvements**
  - Refactor to a **single dynamic card component** to better support future schema changes or unstructured data.
  - Revisit the **visual style** to tone down color saturation and improve visual hierarchy.
  - Turn **tags into slug-based links**, allowing filtered views to be shareable/bookmarkable.
  - Add proper **error handling** for failed or invalid API responses.
  - Introduce animated card interactions (e.g. expand/collapse) and polish responsive layout.
  - Improve accessibility and keyboard navigation support.

---

## 🤖 AI Tool Usage

I used AI tooling (**Windsurf**) throughout development to assist with repetitive and mechanical tasks. Specifically, it helped with:
- Autocompletion and boilerplate generation for React component files.
- Converting pixel values to `rem` units across the stylesheet to maintain scalability.
- Rapidly interpreting error logs, especially those related to component references and import mismatches.

All logic, UI behavior, and component structure decisions were made independently. AI was used strictly for support tasks to speed up development, not to design or structure the application.
