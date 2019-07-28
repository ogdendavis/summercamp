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

What will we learn?
* We will learn how to make a fully functional web application
* We'll learn how to use three computer languages:
  * HTML: The language of the internet, which structures content in web browsers
  * CSS: A styling language used to style HTML content on the web
  * JavaScript: A programming language used to control the interactive and dynamic components of a web app
* We will learn how to use a text editor and Chrome developer tools
* We will learn what version control is, and how to use it

How will we do it?
* We'll start with 3 files: an HTML file, a CSS file, and a JavaScript file
* These files will already be linked together, and will have some basic functionality
* We will use a text editor to edit the files
* We will use an internet browser to view our app, and the browser's developer tools to find out what our app is doing
* We will use the Terminal to manage Git (our version control tool)

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

####Group Activity: HTML, CSS, and JavaScript

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
7. Show: Show the students the finished index.html in a browser, but disable the CSS and JavaScript. Then add back in the CSS and note the difference. Then add back in the JavaScript. It all works together!

### Part 3: Setup and Git

On their own computers and with teacher guidance, students will:
* Install Chrome (https://www.google.com/chrome/)
* Install Atom (https://atom.io/)
* Install Git (https://git-scm.com/)
* Download course starter .zip to Downloads

#### Group Activity: Initializing a Project

We will initialize the project -- from the command line!

***Watch Video: https://www.youtube.com/watch?v=5XgBd6rjuDQ***  
***Stop at ~7:15*** (after mkdir)

Commands used:  
`pwd`  
`ls`  
`cd`  
`mkdir`  

*Explain all steps as you go along: "pwd shows us what directory we're in," etc*
* Open a terminal window (in Applications/Utilities)
* Use `pwd` to confirm that you're in the home directory, and that there is a folder called Desktop
* Use `cd Desktop` to switch to the desktop directory
* Use `mkdir webapp` to make a new folder
* Use `cd webapp` to move into the new folder
* **New command!** Use `mv ~/Downloads/starter.zip .` to move the starter.zip file from the Downloads folder to the webapp folder
  * Be sure to explain `~` and `.`
* **New command!** Use `unzip starter.zip` to unzip the starter package
* You should now have the starter project files in your webapp folder! One last thing:
* We want to be able to open Chrome from the command line, but we currently can't. To do that, we need to update our *bash profile*, a file that contains special instructions where we can customize the code that runs in the Terminal, so...
* Use `mv bash_profile ~/.bash_profile` to move the file to the proper place for the computer to see it
  * Confirm that it works by quitting the terminal session, and then trying to open index.html from the command line in a new session

#### Group Activity: Starting with Git

***Watch video: https://www.youtube.com/watch?v=OqmSzXDrJBk***  
*This talks about overall functionality of git, but basically all we'll use is the first part: the ability to commit and revert to a set point as needed*

In Terminal:
* Make sure you're in the webapp folder with `pwd`
  * If you're not, get there with `cd`
* Use `git init` to initialize a git repo
* Use `git status` to see the status of the repo
* Use `git add` to add the files you want to track
  * `git add .` to add everything in the current folder
  * `git add [file]` to add a single file
* Use `git commit -m` to make an initial commit
  * Don't forget a descriptive message!
* Use `git status` to check that all changes have been committed
* Use `git log` to see your commit!

#### Individual Activity: Reverting uncommitted changes to a file

* In terminal, use `atom .` from webapp directory to open all files in atom
  * Welcome to atom! Brief intro.
* In atom, make changes to index.html. Do whatever you want. Ruin it! Save your changes.
* In terminal, use `git status` to see if git has noticed your changes.
* But we don't want these changes! So how do we get them out of git?
* To revert a single file, use `git checkout [file]`
* Use `git status` to check if your changes were undone
* Go back to atom -- are your changes still there?

It is possible to revert committed changes, revert changes to multiple files, etc., but we won't go over that, now. Knowing how to undo breaking changes to files that you haven't yet committed is enough to get started, and I'll help you if you need to do more down the road!


### Part 4: Examining the starter code (HTML & CSS)

In Terminal:
* Use `chrome index.html` to open index.html in Chrome
* Use `atom .` to open the starter files in Atom
  * Brief review: index.html is content structure, style.css is presentation/style, and app.js is interactive/dynamic

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

***Remember to check, add, and commit your work before moving on to the next part!***

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
    * Use a class selector to make the text in the `<main>` element 21 pixels in size
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

***Remember to check, add, and commit your work before moving on to the next part!***

### Part 5: Adding Content!

#### Group Activity: Adding an Image

We want to insert an image below the `<main>` element and above the `<footer>` element:
```
</main>

<img id="lolcatImage" src="images/normalTime.jpg" alt="lolcat">

<footer>
```

* Info on the image element can be found here: https://www.w3schools.com/tags/tag_img.asp
* Inserting the image tag:
  * We place the tag where we want the image
  * Remember to start with the tag name: img
  * Required attributes:
    * src: Points to the image file
    * alt: Text to display if the image can't load
  * Optional attribute:
    * id: We will use this to style the image with CSS, and to dynamically change the image with JavaScript!
* Reload and check it out!

***Remember to check, add, and commit your work before moving on to the next part!***

#### Individual Activity: Adding a Blockquote

Students will work individually to put a blockquote between the image and the footer:
```
<img id="lolcatImage" src="images/normalTime.jpg" alt="lolcat">

<blockquote id="timeEvent">It's burrito time!</blockquote>

<footer>
```

Student instructions:
* Place a blockquote element below the image we just inserted, but above the footer
* Add an ID attribute
  * Remember that IDs must be unique!
* Put some text in the element
* Reload index.html -- you should see your new text underneath the photo!

***Remember to check, add, and commit your work before moving on to the next part!***

### Part 6: Styling!

#### Group Activity: Linking to External Stylesheets

* Check out https://fonts.google.com/
  * Brief explanation of page
* Find Bungee Shade font
  * Explain page -- esp. 'Select this font' button and 'popular pairings'
* Add Bungee Shade and Bungee, show how to copy code
* Ask: Where does this code go?
  * index.html header!
  * Preference: before our individual stylesheet
* In style.css (talk through whole process):
  * Add `font-family: 'Bungee';` to `body` ruleset
    * Show what happens: Everything is Bungee!
  * Add ruleset for `h1` with `font-family: 'Bungee Shade';`
    * Show what happens: `h1` is Bungee Shade!
    * Demonstrate what happens when making a bad declaration: `h1` is no longer Bungee Shade -- it's the default font!
    * Show fallbacks

***GIT COMMIT!***

#### Individual Activity: Styling Playtime!

This is your chance to do what you like with the style of your project so far!

**Rules to follow:**

1. Only work in index.html and style.css  
*Don't worry, we'll play with app.js tomorrow!*
2. Make a Git commit after every successful change:

        git status
        git add
        git commit -m *[message]*
        git status
        
3. If you start something, then decide you don't want to do it after all, undo it with Git:

        git status
        git checkout *[file to revert]*
        git status

**Ideas for what to do with your app:**

1. Align content on the page  
*Google 'center content with css'*
2. Pick out other fonts you like, and/or change fonts of other parts of the page
3. Change background and text colors
4. Replace the main image
5. Add a link to your favorite website
