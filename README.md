# Company Handbook UI 


# Color Scheme 
- Background: #F8FAFC
- Text Color: #1E293B
- Primary Blue: #2563EB
- Contrast Background: #1E293B


# Developement 

## 10/01
- [x] Built Out Template
  - Home Page (Landing Page)
  - Navbar 
  - Color Scheme set up 
  - Installing Typewriting for Jumbotron / Hero
    - `npm install react-simple-typewriter`
    - JSX for supply our `Typerwriter` component with some words 
- [ ] List of Companies 
  - Router + Redux
  - Implemented Routers
- [ ] Add more to homescreen
  - Features / How It Works
  - Demo 
  - Statisics
    - PDFS uploaded
    - Companies Onboarded
    - Questions Answered

## 10/02
- [x] Set up a Footer 
- [x] List the Companies 
- [ ] Build chatbox 

**Setting up Footer** 

> Footer has been problematic for some time so...
>
> let's walkthrough how we create a Footer

`App.js`
```js
export default function App(){
    return (<>
        <div className='app-container'>
            {/* Navbar & Routes & Body Content here*/}
        </div>
        <footer className='app-footer'>
        </footer>
    </>)
}
```
1) We have to wrap our body elements in a `<div>` with `app-container` class name 
2) We set a footer below this `<div>` because we want the footer to stay at the bottom regardless of content length 

`App.css`
```css
.app-container {
  display: flex;
  padding-bottom:15px;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container spans the full height of the viewport */
}

.app-footer {
    padding: "1rem 0";
    flex-shrink: 0; /* Footer stays at the bottom */
    position:absolute;
    left:0;
    bottom:0;
    right:0;
}
```
1) Be sure your app container has a min height based on view port 
2) App footer has to be absolute to stay at the bottom while being scroll-friendly 
   1) if problem just be sure to change it to `postition: fixed` with some `z-index`
