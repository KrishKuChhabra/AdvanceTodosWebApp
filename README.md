# Advance Todo Web App

## Features:

1) ### Task management : Add tasks, mark tasks as checked, and delete tasks.
   
3) ### Categorization: Tasks are divided into three sections: All, Active, and Completed.
   
5) ### Navbar: Provides navigation between the three sections.

   
# Implementation details:

1) ### Framework: Next.js with TypeScript.

2) ### Components: Navbar, task component, and three sections (All, Active, Completed).

3) ### State management: Use a library like Redux or React Context to manage task state.

4) ### Adding tasks: When a task is added in the "All" section, it automatically moves to the "Active" section but remains visible in "All".
   
5) ### Marking tasks as checked: When a task is marked as checked, it moves to the "Completed" section.
   
6) ### Tick and delete functionality: Implement event handlers in the task component to update task status and remove tasks from the state.
