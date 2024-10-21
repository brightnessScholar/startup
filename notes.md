//This will be my notes file - 

Today I was working on my server and I was frustrated because my macbook wouldn't let me save my key pair to key access. I need to ask Professor about this!

Today I learned how to use git's push and pull affects. This was so helpful for me because I wasn't super familiar with git beforehand. I knew how to push from vscode to git but not how to pull back.


*** Writing HTML
<html lang = "en">
    <head>
        <title>FirstHTML</title>
    </head>

    <body>
        Hello World

        <p>Hello world</p>

        <img alt="beach">
        src="image link w = 600 & h = 300" />
    </body>
</html>

html files have a head and body
    head -> title -> first HTML

Link references
Absolute:
    <a href = "link">
Relative:
    <g href = "link" />

***** w3schools.com -> good resource for learning HTML elements *****




*****Midterm Review*****

Midterm Questions
***In the following code, what does the link element do?**
    <link> element is used to define a relationship between the current document and an external resource.
    <link rel="stylesheet" href="styles.css">

    -it can be used to link other files such as css files, images, fonts, scripts, and stylesheets

***In the following code,  what does a div tag do?**
    <div> tag in HTML is a block-level container element that is used to group other HTML elements together
    
    -you can use it to group elements like text, images, or other html tags and style them as one unit
    -the <div> tag lets you apply css styles to the <div> group appearance
        <div style="background-color: lightblue; padding: 20px;">
            <p>This content is inside a styled div.</p>
        </div>
    -allows you to divide the entire webpage into sections in order to create complex layouts like grids or columns
        <div id="header">
            <h1>Website Header</h1>
        </div>
        <div id="content">
            <p>Main content goes here.</p>
        </div>
        <div id="footer">
            <p>Footer information.</p>
        </div>

***In the following code, what is the difference between the #title and .grid selector?**
    -The #title selector targets an element with the id="title" attribute.
        -An ID is meant to be unique within a document. Each id should only appear once in the HTML
    -Typically used for one element (e.g., header, title)
        HTML:
        <h1 id="title">This is the Title</h1>

        CSS:
        #title {
        color: blue;
        font-size: 24px;
        }

    -The .grid selector targets elements with the class="grid" attribute
        -A class can be reused multiple times across different elements on the same page, so multiple elements can have the same class.
    -Used for grouping multiple elements (e.g., grid layout)
        HTML:
        <div class="grid">
            <p>Grid content 1</p>
            <p>Grid content 2</p>
        </div>

        <div class="grid">
            <p>Grid content 3</p>
        </div>

        CSS:
        .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        }

***In the following code, what is the difference between padding and margin?**
    -Padding:
        -Padding adds space inside an element, between the content and the border of the element. It is the space inside the element’s box.
        -Increasing padding increases the size of the element, as it pushes the content inward, but doesn't affect the position of other elements (like spacing between them).
        -Padding is typically used when you want to add space inside an element to give it breathing room from its content (like text, images, etc.).
        HTML:
        <div class="box">This is padded content.</div>

        CSS:
        .box {
        padding: 20px;
        background-color: lightblue;
        border: 1px solid #000;
        }
        ^^^padding adds 20px of space on all sides inside the div around the text, but the size of the div increases as a result.

    -Margin:
        -Margin adds space outside an element, between the element’s border and other surrounding elements. It is the space outside the element’s box.
        -Increasing margin does not affect the size of the element itself but moves the element away from other elements. It creates space between the element and its neighbors.
        -Margin is typically used when you want to create space between an element and other elements or the edges of the page.
        HTML:
        <div class="box">This is a div with margin.</div>

        CSS:
        .box {
        margin: 20px;
        background-color: lightgreen;
        border: 1px solid #000;
        }
        ^^^margin creates 20px of space around the outside of the div, separating it from other elements or the page edges, but the size of the div itself remains unchanged.

***Given this HTML and this CSS how will the images be displayed using flex?**
    -When you use Flexbox, the parent container becomes a flex container, and its children (like images or text) become flex items
    -By default, flex items are displayed in a row (horizontally) and are centered vertically. But you can control the layout using various Flexbox properties
    -If you place an image inside a flex container without specifying any size, the image will:
        -Maintain its natural dimensions.
        -Scale down if the container is too small to fit it, but won't scale up beyond its original size unless you explicitly allow that.
        -If you set flex-grow: 1 on the image, it will grow to fill any available space in the flex container.
        -If you set flex-shrink: 1 on the image, it will shrink if the container becomes too small.
        -You can set a fixed size, like flex-basis: 200px;
        -You can control the alignment of the image along the cross-axis (vertical in a row layout) using align-self: flex-start, center, flex-end
    HTML:
    <div class="flex-container">
        <img src="image.jpg" alt="Image" class="flex-item">
    </div>

    CSS:
    .flex-container {
        display: flex;
        justify-content: center; /* Center items horizontally */
        align-items: center;     /* Center items vertically */
        height: 400px;
    }

    .flex-item {
        flex-grow: 1;   /* Image will grow to fill the available space */
        flex-shrink: 1; /* Image will shrink if there’s not enough space */
        max-width: 100%;
        flex: 0 0 200px; /* The image will have a fixed size of 200px */
    }

    -Flexbox provides control over alignment: You can easily center images horizontally and vertically using justify-content and align-items.
    -Flexbox can make images flexible: By using flex-grow, flex-shrink, and flex-basis, you can control how images resize depending on the container size.
    -Flexbox helps with responsive design: When used with responsive image techniques, Flexbox helps images adapt to different screen sizes and container widths.

***What does the following padding CSS do?**
    -Padding adds space inside an element, between the content and the border of the element. It is the space inside the element’s box.
    - Increasing padding increases the size of the element, as it pushes the content inward, but doesn't affect the position of other elements (like spacing between them).
    - Padding is typically used when you want to add space inside an element to give it breathing room from its content (like text, images, etc.).

***What does the following code using arrow syntax function declaration do?**



What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?


