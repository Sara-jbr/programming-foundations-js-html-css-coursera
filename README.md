## Programming Foundations with JavaScript, HTML and CSS – Practice Projects

This repository contains my personal practice projects from the [Coursera course](https://www.coursera.org/learn/duke-programming-web) **"Programming Foundations with JavaScript, HTML and CSS"** by Duke University.

##  About the Course

This course is designed for beginners who want to learn the core building blocks of web development and programming. It introduces:

- The **fundamentals of programming** using JavaScript
- Basic **web development with HTML and CSS**
- Programming logic like **variables, functions, loops, and conditionals**
- Working with **images, user input, and canvas** to create interactive web pages

##  What is "Foundation Programming"?

"Foundation programming" means learning the basic concepts that are essential to all programming languages. This includes:
- Writing simple instructions (code)
- Understanding how computers follow logic
- Building blocks like **if-statements**, **loops**, and **functions**
- Problem-solving using code

This course teaches these concepts using **JavaScript**, which runs in every modern browser and is a core web language.

---

## 📄 What is HTML?

**HTML (HyperText Markup Language)** is the skeleton of every web page.

- It defines the **structure** and **content** of the page.
- Elements like `<h1>`, `<p>`, `<img>`, and `<button>` tell the browser what to show.
- HTML is **not** a programming language — it's a **markup language**.

## 🎨 What is CSS?
CSS (Cascading Style Sheets) controls how your HTML looks — the design and layout.

It applies colors, spacing, fonts, and responsive design.
It separates content (HTML) from style (CSS).

## ⚙️ What is JavaScript?
JavaScript (JS) is the programming language of the web. It brings interaction and behavior to your web pages.

It can change HTML and CSS on the page after it loads.
It responds to user actions like clicks and key presses.
JavaScript runs in the browser (like Chrome, Firefox).

## 🔁 How HTML, CSS, and JS Work Together
HTML gives the structure/content.

CSS gives the style/design.

JavaScript gives interaction/behavior.


## 🧠 Web Programming Foundation Rules
When you're just starting, keep these foundational rules in mind:

Separation of concerns:
Structure with HTML, style with CSS, and logic with JavaScript.

Use semantic HTML:
Use correct tags like `<header>`, `<section>`, and `<article>` to improve accessibility and SEO.

Mobile-first design:
Start with small screens and scale up using CSS media queries.

Every HTML element is a **box**. Understanding how this box works is essential for layout and styling. The Box Model consists of:

- **Content**: The actual text or image.
- **Padding**: Space between the content and the border.
- **Border**: The edge around the padding (and content).
- **Margin**: Space outside the border, separating elements.
---

## 🌐 How a Browser Reads a Web Page

When you visit a site, the browser follows these steps:

1. **Load HTML**: Parses the HTML and builds the DOM (a tree of elements).
2. **Load CSS**: Applies styles from `<style>` tags or CSS files, creating the render tree.
3. **Load JavaScript**: Runs scripts that can update the DOM, styles, or react to events.
4. **Render the Page**: Draws everything to the screen using the render tree.
5. **Handle User Input**: Listens for clicks, typing, etc., and JavaScript responds.

## 📚 What is the DOM?

DOM stands for **Document Object Model**.  
It’s how the browser understands and represents your HTML page — like a tree structure made of objects.
The DOM gives structure to your HTML so the browser can render it visually and let you control it with code.

Think of it like this:

🧱 **HTML** → 📖 **DOM** → 🖥️ **Visual Page**


### Explanation:

Every HTML element (`<h1>`, `<p>`, `<img>`, etc.) becomes a **node** in the DOM.  
The browser builds this structure in memory so JavaScript can interact with it.

You can use JavaScript to:

-  Change text or styles
-  Add or remove elements
-  React to user actions (clicks, typing)

---

##  Exercises I Practiced

Here are some of the projects I built to practice the concepts:

###  Paint Canvas
- A drawing application using the HTML5 Canvas
- Lets users choose brush color and size
- Tracks mouse movements to paint

###  Image Upload and Display
- Allows users to upload an image
- Uses `SimpleImage.js` to display it on a canvas

###  Convert Image to Grayscale
- Loads and displays an image
- Converts the image to grayscale by averaging RGB values of each pixel

---

##  Disclaimer

This project is a **personal learning exercise** based on the Coursera course “Programming Foundations with JavaScript, HTML and CSS.” All code was written by me and is intended for educational purposes only.

---

##  Getting Started

To try any of these projects:
1. Clone the repository
2. Open the HTML file in your browser
3. Interact with the app (e.g., upload an image, draw on canvas)

---
