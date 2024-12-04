# startup
Startup application for BYU CS 260

## My Life - For College Students
### Sales Pitch
A common problem among college students (especially fresh off the mission rms in provo) is the fact that we are used to a routine, set schedule. Throughout high school and on our missions, we followed the same schedule every day - wake up, get ready, go to school/study, meet with friends, wind down, and sleep. Contrast that set lifestyle with the chaos of college decision making: now everything is up in the air for college students. The first thing they turn to is their devices, as they search for a 'planner' type program that will help them structure their life. As a return missionary who was used to this organized life structure myself, I was in search of something to help me manage my life after coming home and was sorely disappointed. And in all honesty, most well designed planner applications nowadays cost way too much money and are always limited to a certain aspect of planning only.

My startup will be focused around creating a website designed, with the input of return missionaries and fellow college students, to help the user build a schedule for every aspect of their life in a user friendly, cost efficient way. While this website will be catered mostly to college students, it will have alternative options that apply to any age. 

### Key Features and Design Aspects
This application's focus is not designed specifically on schoolwork management, but rather on life and time management. It will include features such as:
* a yearly, monthly, weekly, and daily calendar
* a preset list of default activity labels to apply to your calendar
* options to add new activities or sub activities to default labels
* a built in schedule builder that can be used to document classes, work schedules, etc.
* options to mark the percentage of completion of tasks in To-Do lists
* options to make multiple To-Do lists and group them under activity labels
* a customizable reminder schedule
* progress bar options to showcase your school, work, or activity progress
* connection to contacts, gmail, and other external applications to allow for more customization and efficiency.
* goal setting interractive features to allow friends to support one another.

### Recognizing All Technologies
In this startup web application, I will be using a variety of technologies in order to create a concise, user friendly experience for all ages and all levels of technological understanding.
#### The Technologies
HTML - There will be 3 main HTML pages: 1 for the login, 1 for the calendar, and 1 for the schedule builder.

CSS - The application will look good on the desktop and will be mobile friendly.

JavaScript - This will allow the user to log in and save their account across devices. It will also give them options to add schedules, to-dos, and other interractions with their schedule builder.

React - It will provide opportunities for the user to customize their schedule design as well as add their own activity and list features.

Web service - By using this, the user will be able to link their account with gmail, contacts, and other helpful applications.

My application will use 'Google Search Results API' [https://github.com/public-apis/public-apis]

Authentication: The user will be required to make an account with their email so that they can save their progress.

Database data: This will allow users to post their goals and follow other users to see their goals. Since the application will display progress, users can 'cheer' each other on.

WebSocket data: The website will collect data on ways that we can improve according to our users. 

### Website Design
![Image of a login interface on my website.]
Sign in.png

![Image of a calendar and to-do list page on my website.]
Calendar.png

![Image of a school schedule and progress report page on my website.]
School Schedule.png

---------------------------------------------------------------------------------------------------------------------------------------
## Startup HTML Project - Update (September 29th)
For this section of the project, I created 5 html files:
* index.html
    - This will be my main html (homepage). Here is where I placed links to all the other elements in my program and this is the main screen when people go to my website. I added an image, a navigation bar, and a link to my Github in the footer.
* application.html
    - This page is where my task element will be. Users can come to this section of the website to add tasks to their schedule. I created a list that is adaptable by the user as well as an image element and a "return to home" link.
* database.html
    - This page is where I will add a calendar element to my website. I'm not sure how to do that quite yet because it involves a lot of css and javascript as well but it will be there. The calendar will showcase added classes and tasks and when they are taking place.
    - I also added a list of classes that is adaptable so that the user can add classes.
* authentication.html
    - This is where the user will sign in to their account. Having an account will save all of their progress and changes on the website including their added classes and tasks.
* websocket.html
    - Finally, I added this page as a potential forum where people can give feedback to me on how to improve the website. I also want to make a forum where people can post their thoughts and ideas on how to manage tasks better (but I haven't added this element yet).

-----------------------------------------------------------------------------------------------------------------------------------------
## Startup CSS Project Update (November 19th)
I finally deployed my CSS startup and the thing that was causing the problem was that I was typing in the deploy commands wrong into my terminal. Remember:
    ./deployFiles.sh -k ~/Desktop/test.pem -h homework-hub.com -s simon
    ./deployFiles.sh -k ~/Desktop/test.pem -h homework-hub.com -s startup

- I was forgetting to put the path to my pem file in the command line and my startup was failing because it couldn't find my test.pem
- Also, I learned that I could combine my index.css and my authentication.css files into one because having both was unnecessary for my program. I figure that I could just make the user sign in on the main page because eventually I will have to force them to sign in before they do anything on the website anyways.
- I plan to change a couple of things in my database.css file eventually when I gain more tools from Mongo, which will let me store things in the backend
- I eventaully want to allow the user to add events to the calendar on my database page in my website but I don't know how to use the backend all the way yet. Eventually we will get there.
- The websocket page looks how I want it to look and it allows the user to sign in but again, it doesn't save the data to the backend part of the page yet so its pretty surface level. 
- Overall, this is the general look I want my website to have aside from some little tweaks to the look of the application and database pages. 

