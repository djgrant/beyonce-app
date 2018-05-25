# Beyonce App

A tutorial for creating a fun React app.

### What we will learn today?

- Fetching data into components
- Installing React components from [npm](https://www.npmjs.com/search?q=react)
- How to build an app using [react-router](https://www.npmjs.com/package/react-router)

## Challenge 1: render a list of albums

- Clone this repo

- Install dependencies (`npm install`)

- In the components folder you will find:
    - an `Album` component that is already written
    - an `Albums` component that you need to finish

- In the `Albums` component, fetch an array of albums from https://rawgit.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json.

- Using the data returned from the API, render an array of `Album` components, passing in the necessary props.

Things you will need to know:
- Fetch
  - Example: http://jsbin.com/qafekejato/edit?js,console  
  - Tutorial: https://css-tricks.com/using-fetch/
- lifecycle methods
  - Tutorial/Exmaple: https://github.com/CodeYourFuture/syllabus/blob/scotland/react/lesson2.md#talking-to-an-api
- State
  - Example: https://codesandbox.io/s/q83vz50yl9
  - Tutorial: https://reactjs.org/docs/state-and-lifecycle.html


## Challenge 2: add routes to your app

In this challenge we'll split your app into 3 pages.

- In your app install react-router by running `npm install react-router --save`

- Open https://codesandbox.io/s/p3nww06y00 to see an example of a React app using react-router

In `src/components/App/App.js`:

- Copy the `react-router` imports from the CodeSandbox example over to your app

- Wrap all of the JSX in a `<Router>` component

- Move the content of each of the 3 sections into 3 new components, and then import them as components

- Add 3 `<Route>` components, one for each of the compoents you just created. Each `<Route>` should have a `path` prop and a `component` prop.

- Add a navigation bar to your app with links to the routes you've created


## Challenge 3: install components to style your app

React components can be configured with props, which makes them ideal for sharing with others.

There are [all sorts of React components](https://github.com/brillout/awesome-react-components#ui-components) that you can install and use in your projects.

In this challenge you'll add a video player to the `Album` component.

- Open the `Album` component

- Using npm, install [react-player](https://www.npmjs.com/package/react-player)

- Following the instructions on the [readme](https://www.npmjs.com/package/react-player) add a react-player component into `Album`

- Update your `Albums` component to pass in a `videoUrl` to the `Album` component

- Add `videoUrl` as a prop type to the `Album` component

## Homework

- Find some more content and add another route to your App
- Using react-router, show the About route content in tabs (see the how this is achieved in https://codesandbox.io/s/p3nww06y00)
- Enhance the pages using components provided by [reactstrap](https://reactstrap.github.io/) (Bootstrap for React)
