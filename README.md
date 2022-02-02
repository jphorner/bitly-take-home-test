# Bitly Take-Home Challenge

### Overview

This app allows users to submit boat race times using the format ``HH:MM (AM/PM), DAY X``. On submission, the total race time is converted to minutes and displayed in list format. To the right of the individual race times, an average race time can be seen which is updated with each additional time submission.

### Setup Instructions

This project uses ``react``, ``react-dom``, and ``react-scripts`` as dependencies.

In your command line, navigate to a new folder, clone this repository, and navigate into the root directory:

``git clone git@github.com:jphorner/bitly-take-home-test.git``

``cd bitly-take-home-test``

Once in the root directory, install the necessary dependencies then start the application:

``npm install``

``npm start``

If done correctly, you should be able to view the app at ``localhost:3000``.

If you do not have NPM installed on machine, [you can find setup instructions here.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Demo

![Kapture 2022-02-02 at 13 11 00](https://user-images.githubusercontent.com/82003147/152229810-26f8851c-4f78-4d23-ac25-85fa1de96309.gif)

## Technologies

|Development|Development|Design
|--- |--- |--- |
|[<img src="https://img.shields.io/badge/-react-blue" />](https://reactjs.org/)|[ <img src="https://img.shields.io/badge/-javascript-orange" />](https://www.javascript.com/)|[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)|

### Development Timeline

#### Wireframing

Upon reviewing the project spec, I decided I would need four components:

- App (to render all components)
- Header (static)
- Form (for submitting times)
- Results (to render times)

<img width="800" alt="Annotated Bitly Wireframe" src="https://user-images.githubusercontent.com/82003147/152231108-5628140d-4424-4aab-ac9d-a54fd7e59896.png">

#### Component Architecture

Before refactoring, the component architecture was planned to be rendered in the following order:

- ``index.js`` would render the App component, which would then render all other components
- A static ``Header`` component would be rendered first
- A ``Form`` component would then be rendered, which would hold all time submissions in state
  - ``Form`` was later refactored as a functional component, with ``App`` holding all state data
- A ``Results`` component would then be rendered, with time submissions being passed in as props from ``Form``
  - This was also refactored so that times would be passed directly from ``App`` to ``Results``, eliminating the need for prop drilling

**Original Architecture Plan:**

<img width="500" alt="Bitly Component Architecture" src="https://user-images.githubusercontent.com/82003147/152231196-74356a1b-ea3f-473a-9b87-22473163553b.png">

## Contributions

|Joshua Horner
|--- |
|[<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/jphorner)|
|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/joshuapaulhorner/)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/joshuapaulhorner/)
