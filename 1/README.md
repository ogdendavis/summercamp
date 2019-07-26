# Lesson 1

This is the plan for the first lesson in Brookwood's Warrior Way Coding Camp!

## Objectives

### Knowledge

By the end of the lesson, students will understand:
* What a web app is
* The roles of servers, networks, and browsers in consuming a web app
* The roles of HTML, CSS, and JavaScript in building a web app

### App Progress

By the end of the lesson, students will have an app that:
* Tells time (starter already does this)
* Is styled using:
  * background color
  * web fonts, font size, and text alignment
  * image sizing and alignment
  * container margin, padding, and alignment

## Plan

### Part 1: What will we do in this class?

Show final product  
*But yours might look different!*

When we're done, our application will:
* Tell the time
* Display pictures and text based on the time
* Offer multiple user settings and interactions
* Respond to user input

You will be able to customize your application, if you want to:
* **Style:** Pick your own pictures, colors, etc
* **Interactions:** Change what a user click does in the application
* **Extensions:** After the course, you'll have your completed application, and you'll be able to add, edit, or change anything you like!

### Part 2: What is a web app?

**Watch Video: https://www.youtube.com/watch?v=D8c4JZW73cM**

Discussion Questions:
1. What is a website made of?
  * Files and code (can get more specific, but need those two categories)
2. What is the role of a server?
  * Stores websites, and sends them to whoever requests them
3. How does your computer (or any computer) get a website?
  * Through the internet!
4. What does a web browser do?
  * Interprets website code

**Group Activity: HTML, CSS, and JavaScript**

Goal of the activity is to understand the roles of HTML, CSS, and JavaScript:
* HTML provides the structure of the page
* CSS controls the style of the page (colors, image sizes, etc.)
* JavaScript defines the ways that a user can interact with the page

In the activity, we build a house!
1. **HTML:** Ask the class to decide on these characteristics of the house: (Assign student to write on board)
  1. How many stories does the house have?
  2. How many rooms are in the house?
  3. Does the house have a basement? Attic? Porch? Balcony? Yard? Chimney?
2. Conclude: HTML provides the **structure** of a site/app. Just like we decided how many rooms, floors, etc. our house has, HTML is how we decide what content a site has, and the basic structure of that content.
3. **CSS:** Class will decide these things: (Student(s) to draw on board)
  1. What color is the outside of the house?
  2. What size are the various rooms?
  3. What is the layout of the rooms within the house?
4. Conclude: CSS describes the **styling** of a site/app. Just like we chose the color of the house and how big the rooms would be, CSS controls the color, size, and position of elements on a web page.
5. **JavaScript:** Class will decide: (Student(s) to draw/place icons on board)
  1. Where are the doors? How do they work?
  2. What are the various rooms for? (Bedrooms for sleeping, Kitchen for cooking, etc.)
6. Conclude: JavaScript determines the **functionality** of the site. Just like you put a bed in the bedroom to enable sleeping, you use JavaScript to enable users to interact with the page or app.

### Part 3: Setup

On their own computers and with teacher guidance, students will:
* Install Chrome (https://www.google.com/chrome/)
* Install Atom (https://atom.io/)
* Copy course starter files to their desktops
* Open index.html in Chrome
* Open the starter files in Atom

### Part 4: Examining the starter code (HTML & CSS)

#### index.html

* Video: https://www.youtube.com/watch?v=IJWcX2EDAKg
  * Find examples of tags, elements, and attributes in index.html
  * Point out examples of nested elements (e.g. h1 in header in div in body)
  * Main document sections:
    * head (info about document, generally not displayed)
    * body (the document itself, generally what you see in your browser window)
  * Body sections:
    * header (general info about page, like title)
    * main (the main content of the page)
    * footer (author or contact info)
  * Point out link to style.css, and script pointing to app.js
* Developer Tools in Chrome
  * Have students open dev tools for index.html in Chrome (cmd+opt+i, or right click and select inspect)
  * Go to "Elements" tab
    * Here, we see the HTML markup on top, and information about CSS on the bottom
    * What looks different about the HTML in the inspector?
      * Formatting (line breaks)
      * Containers collapse (click to expand body, main, etc)
      * The clock! It's ticking!
    * Our index.html document shows the HTML framework that we have written. The inspector shows the workings of the actual app, letting us see how CSS and JavaScript impact the HTML code. Let's do some styling and see what changes.
  * Individual activity: Make this YOUR project!
    * You're not the instructor, so why is the instructor's name in the footer? In Atom, change that text to your name, and save the document. In Chrome, reload the page to see your change!

#### style.css

Style.css is empty, right now! Let's put some stuff in it.

* Teacher Demo: Show writing one rule -- put a color on the body background!
        body {
          background-color: #f16059;
        }
  * CSS components: selector, property, value
    * property + value = rule!
    * All rules for (a) selector(s) = ruleset!
  * Colors: hex, rgb, keyword
* Class groupwork: Write one ruleset together -- header font!
        header {
          font-size: 24px;
          line-height: 48px;
        }
  * Reference for common CSS properties: http://web.simmons.edu/~grabiner/comm244/weekthree/css-basic-properties.html
  * What selector do we use to style everything in the header?
  * What property sets the font size of the text?
  * Explain pixels
  * What property determines the distance between lines of text?
* Independent work: Writing CSS rules with different selectors!
  * Reference for independent work: https://www.freecodecamp.org/news/get-started-with-css-in-5-minutes-e0804813fc3e/
  * Tasks:
    * Add a rule to our body ruleset to change the color of all the text on the page
    * Use a class selector to make the text in the <main> element 21 pixels in size
    * Use an ID selector to make the clock font 36 pixels in size
      * Oops! Now we have two rules that are trying to set the font size for the clock! Which one is working? Why do you think that is?
    * BONUS: Combine two element selectors to make the text in the paragraph in the footer 12 pixels
      * BONUS BONUS: Also make all the text in the paragraph in the footer uppercase!
  * Solutions:
              body {
                background-color: #f16059;
                color: #222;
              }

              header {
                font-size: 24px;
                line-height: 48px;
              }

              .time {
                font-size: 21px;
              }

              #clock {
                font-size: 36px;
              }

              footer p {
                text-transform: uppercase;
                font-size: 12px;
              }

### Part 5: Adding More Content!

#### Adding an Image
