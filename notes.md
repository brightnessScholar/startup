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
    -Arrow functions are a more concise way to write functions in JavaScript
    -Arrow functions are much more compact compared to regular function expressions.
    -the function keyword is replaced by =>, and there’s no need for return if the function consists of a single expression.
    Traditional Function:
        const sum = function(a, b) {
            return a + b;
        };
    Arrow Function:
        const sum = (a, b) => a + b;

    -However, if the function body contains more than one expression or statements, you need to use curly braces and an explicit return statement
    Arrow Function:
        const sum = (a, b) => {
        const result = a + b;
        return result;  // Explicit return needed here
        };

    -Arrow functions do not have their own this context but inherit it from the surrounding scope
    Traditional Function:
        function Timer() {
            this.seconds = 0;
            setInterval(function() {
                this.seconds++;
                console.log(this.seconds); // `this` refers to the global object, not Timer
            }, 1000);
        }

        const timer = new Timer(); // NaN will be logged because `this` is incorrect
    Arrow Function:
        function Timer() {
            this.seconds = 0;
            setInterval(() => {
                this.seconds++; // `this` correctly refers to the Timer object
                console.log(this.seconds);
            }, 1000);
        }

        const timer = new Timer(); // Works as expected, `this` refers to Timer
    ^^^the arrow function retains the value of this from the surrounding Timer object, so it correctly increments the seconds property.

    -Arrow functions do not have their own arguments object. If you need to access the arguments passed to the function, you will have to use rest parameters (...args).
    Traditional Function:
        function example() {
        console.log(arguments);
        }
        example(1, 2, 3);  // Logs: [1, 2, 3]
    Arrow Function:
        const example = () => {
        console.log(arguments);  // Will throw an error: `arguments is not defined`
        };
        example(1, 2, 3);
    Arrow Function Fixed:
        const example = (...args) => {
        console.log(args);  // Logs: [1, 2, 3]
        };
        example(1, 2, 3);
    
    -Arrow functions are great for functions that consist of a single expression or require concise syntax.
    -When passing functions as arguments (such as event handlers or array methods), arrow functions provide a cleaner syntax and resolve issues with this.
    -Arrow functions are useful in scenarios where you want to preserve the context of this, such as in event listeners or object methods.
    -If you want a function to have its own this value (for example, in methods or constructor functions), arrow functions should be avoided.
    -If you need access to the arguments object (for variable-length arguments), use a traditional function instead of an arrow function.

***What does the following code using map with an array output?**
    -The map() function in JavaScript is a powerful method that allows you to transform the elements of an array
    -It creates a new array by applying a provided callback function to each element of the original array, without modifying the original array itself
    -The map() method is particularly useful when you want to iterate over an array and produce a new array based on some transformation or computation for each element.
    -The original array remains unchanged, and the map() method returns a new array with the transformed elements.
    -map() performs the operation without altering the array it is called on.
    -The length of the returned array will be the same as the length of the original array.

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);

    console.log(doubled);  // Output: [2, 4, 6, 8, 10]
    ^^^the map() function takes each element of the numbers array, multiplies it by 2, and returns a new array doubled.

    const fruits = ['apple', 'banana', 'cherry'];
    const fruitDetails = fruits.map((fruit, index) => {
        return `${index + 1}: ${fruit}`;
    });

    console.log(fruitDetails);  // Output: ["1: apple", "2: banana", "3: cherry"]
    ^^^The result is a new array with each fruit prefixed by its index.

    -You can use map() to transform an array of objects. For instance, you might have an array of users and want to extract only the names of all user
    const users = [
        { id: 1, name: 'John', age: 28 },
        { id: 2, name: 'Jane', age: 22 },
        { id: 3, name: 'Mike', age: 32 }
    ];

    const names = users.map(user => user.name);

    console.log(names);  // Output: ['John', 'Jane', 'Mike']
    ^^^ the map() function takes each user object and returns only the name property, resulting in a new array of names.

    -use map() to create more complex data structures. For instance, combining values or creating new objects.
    const numbers = [1, 2, 3];
    const formattedNumbers = numbers.map(num => ({
        original: num,
        squared: num * num,
        cubed: num * num * num
    }));

    console.log(formattedNumbers);
    // Output:
    // [
    //   { original: 1, squared: 1, cubed: 1 },
    //   { original: 2, squared: 4, cubed: 8 },
    //   { original: 3, squared: 9, cubed: 27 }
    // ]

    -Purpose: To create a new array by transforming each element in an existing array.
    -Returns: A new array with the transformed elements.
    -Doesn't modify the original array.
    -Can access the index and the original array if needed.
    -Use map() when you need to transform or modify the elements of an array, without modifying the original array.
    -It's ideal when you need to compute a new value for each element and return that value in a new array.

***What does the following code output using getElementByID and addEventListener?**
    -getElementById():
        -getElementById() is a method in JavaScript that is used to select an HTML element by its unique id attribute
        -It returns the first element within the document that matches the specified id
        document.getElementById("id");
        ^^^"id": The string value of the id attribute you want to target. This should be the unique ID of the element in the HTML.

        -The method returns the element with the specified id if it exists. If no element with the given id is found, it returns null.
        HTML:
        <div id="myElement">Hello, World!</div>

        JavaScript:
        const element = document.getElementById("myElement");
        console.log(element);  // Output: <div id="myElement">Hello, World!</div>
        ^^^getElementById("myElement") selects the div element with id="myElement". The result is the actual HTML element.

        -you can also use getElementByID to manipulate the element and manipulate the style of the element
        -getElementById() is used to select an element by its unique id in the DOM.
        -The element with the specified id or null if no matching element is found.
        -Manipulating HTML elements (changing content, styles, or attributes) based on the id.
    -addEventListener():
        -addEventListener() function in JavaScript is used to attach an event handler (also known as an event listener) to an HTML element
        -This function allows you to listen for a specific event (like a click, keypress, mouse movement, etc.) on an element and then execute a function when that event occurs
        -It provides a more flexible and powerful way to handle events compared to older methods like onclick

        element.addEventListener(event, callback, useCapture);
            -event: A string representing the type of event to listen for (e.g., "click", "keydown", "mouseover", etc.).
            -callback: The function that will be executed when the event occurs. This function is called the event handler or event listener.
            -useCapture (optional): A Boolean that specifies whether the event should be captured during the capture phase (true) or the bubbling phase (false). Most of the time, you will leave this as false, but it can be useful for more advanced event handling.
        Example:
        HTML:
        <button id="myButton">Click Me!</button>

        JavaScript:
        const button = document.getElementById("myButton");

        // Adding a click event listener
        button.addEventListener("click", function() {
        alert("Button was clicked!");
        });

        -You can also remove an event listener if it's no longer needed, using the removeEventListener() method. However, to successfully remove an event listener, you need to pass the same function reference that was used with addEventListener().
        -Unlike older methods (e.g., onclick), addEventListener() allows you to attach multiple event listeners to the same element for the same event type.
        -It keeps your JavaScript code separate from your HTML, which is considered good practice in modern web development
        -You can use addEventListener() to implement event delegation, which is especially useful for handling events on dynamically added elements

***What does the following line of Javascript do using a # selector?**
    -when you use # in a selector, it's typically part of a query selector (e.g., document.querySelector() or document.querySelectorAll()) to target an element by its id
    -The # symbol is used to represent an ID selector in CSS, and JavaScript uses the same notation to find elements with a specific id
    -When you use # in JavaScript with querySelector() or querySelectorAll(), it searches for an element that has a specific id attribute.
        -querySelector("#myId") will select the first element that has the id="myId"
        -querySelectorAll("#myId") will return a NodeList of all elements with the id="myId", although typically IDs should be unique
    -Used as a CSS selector to target elements by their id
    -REMEMBER: The id attribute should be unique within a page, meaning only one element should have a specific id

***Which of the following are true? (mark all that are true about the DOM)**
    -The DOM (Document Object Model) is a programming interface for web documents
    -It represents the structure of an HTML or XML document as a tree of nodes, where each node is an object that represents a part of the document (such as an element, attribute, or text)
    -The DOM allows you to programmatically access and manipulate the content, structure, and styles of a webpage using JavaScript or other programming languages.
    -The DOM is an in-memory representation of the web page that allows you to interact with it dynamically
    -The DOM represents a document as a tree structure. The document starts with a root node (typically the <html> tag), and everything else in the document (tags, text, attributes, etc.) is a "child" of that root.
        -Each HTML element is a "node" in the tree

    <html>
        <head>
            <title>My Page</title>
        </head>
        <body>
            <h1>Welcome!</h1>
            <p>This is a paragraph.</p>
        </body>
    </html>

    DOM Model:
    Document
    └── html
        ├── head
        │    └── title
        └── body
            ├── h1
            └── p

    -Element nodes: Represent HTML tags (like <div>, <p>, <h1>, etc.)
    -Text nodes: Represent the text inside HTML tags
    -Attribute nodes: Represent the attributes of an element (like id, class, src, etc.)
    -You can use JavaScript to interact with the DOM, and manipulate elements dynamically
    HTML:
    <div id="myDiv">Hello, World!</div>
    <button onclick="changeText()">Change Text</button>

    JavaScript:
    function changeText() {
        // Access the element by its ID
        const div = document.getElementById("myDiv");
  
        // Change the text content of the div
        div.textContent = "Hello, DOM!";
    }

    -DOM Methods for Access and Manipulation:
        -Selecting Elements:
            -getElementById(id): Selects an element by its id.
            -getElementsByClassName(className): Selects elements by their class name.
            -getElementsByTagName(tagName): Selects elements by their tag name.
            -querySelector(selector): Selects the first element that matches the CSS selector.
            -querySelectorAll(selector): Selects all elements that match the CSS selector.
        -Manipulating Elements:
            -.textContent: Get or set the text inside an element.
            -.innerHTML: Get or set the HTML inside an element.
            -.setAttribute(attr, value): Set an attribute of an element (like id, class, src, etc.).
            -.style: Get or set the inline CSS styles of an element.
        -Creating New Elements:
            -document.createElement(tagName): Creates a new HTML element.
            -appendChild(node): Adds a new child node to an element.
            -removeChild(node): Removes a child node from an element.
        -Event Handling:
            -addEventListener(event, callback): Attach an event listener (like click, mouseover, etc.) to an element.
            -removeEventListener(event, callback): Remove an event listener from an element.

    -The DOM allows web pages to be dynamic
        -You can update content, respond to user actions (like clicks or form submissions), and change the structure or style of the page without needing to reload it
    -The DOM is essential for JavaScript to manipulate HTML documents, enabling the creation of interactive web applications.
    -The DOM is standardized, meaning it works the same across different browsers (with minor exceptions), allowing you to write code that interacts with web documents in a consistent way.

***By default, the HTML span element has a default CSS display property value of:**
    -The HTML <span> element has a default CSS display property value of inline
    -Elements with display: inline are displayed within the flow of text without starting a new line
    -The <span> tag is typically used to style a portion of text or to group inline elements together without affecting the document's layout by breaking lines.
    HTML:
    <p>This is a <span style="color: red;">red</span> word within a sentence.</p>

    CSS:
    span {
        display: inline;
    }
    ^^^the <span> element does not cause the text to break onto a new line, and the word "red" is displayed in red color, but it remains inline with the rest of the paragraph.

***How would you use CSS to change all the div elements to have a background color of red?**
    CSS:
    div {
        background-color: red;
    }
    ^^^This selector targets all <div> elements in the HTML document.
    ^^^background-color: red;: This rule sets the background color of the targeted elements to red.

***How would you display an image with a hyperlink in HTML?**
    -To display an image with a hyperlink in HTML, you can use the <a> (anchor) tag to create a hyperlink and place the <img> tag inside it
    HTML:
    <a href="URL">
        <img src="image-source.jpg" alt="Description of Image">
    </a>
    ^^^<a href="URL">: This creates a hyperlink. Replace "URL" with the link you want the image to navigate to when clicked.
    ^^^<img src="image-source.jpg" alt="Description of Image">: This tag displays the image
    ^^^"Description of Image" with a description for accessibility and SEO purposes.

***In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**
    -Content: This is the actual content of the box (e.g., text, an image, or any other content inside the element). It is the innermost part of the box.
        -This is where the actual content of the element (e.g., text or images) resides.
    -Padding: Padding is the space between the content and the border. It adds space inside the element, between the content and the border, increasing the size of the box but not affecting the external layout.
        -Adds spacing between the content and the border. It does not affect the space between the element and other elements outside of it.
    -Border: The border wraps around the padding and content. It's a thin line that can be styled with width, color, and style (solid, dashed, etc.).
        -Surrounds the content and padding. It can have a thickness and color.
    -Margin: The margin is the outermost layer and creates space between the element's border and surrounding elements. It pushes other elements away and does not affect the size of the element itself.
        -Provides external spacing between this element and other elements around it.

    +-------------------------+
    |       Margin             | <-- outermost layer
    |  +-------------------+  |
    |  |    Border          |  |
    |  |  +-------------+  |  |
    |  |  | Padding      |  |  |
    |  |  |  +-------+  |  |  |
    |  |  |  | Content|  |  |  |
    |  |  |  +-------+  |  |  |
    |  |  +-------------+  |  |
    |  +-------------------+  |
    +-------------------------+


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


