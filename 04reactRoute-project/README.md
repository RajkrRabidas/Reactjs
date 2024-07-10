## Route in Reactjs
- frist of all we create a components folder in src folder and 
- After create a header, footer, home, about, contact, github, folder in components folder
- After create a file in header folder ke ander header.jsx, aise hi kar ke footer/footer.jsx, home/home.jsx, about/about.jsx, contact/contact.jsx, github/github.jsx

### Install "react-router-dom" package
```console
npm install react-router-dom
```
#### React me a tag use karte hai?
- React me a Tag use nahi karte q ki a tag use karne se page wapase se relode hota hai esi liye a tag ki jagah hum Link Tag ka use karte hai 
#### Link tag milta kaha se ka use kaise kare?
- Link tag hume react-router-dom se milta hai jiska use karne ke liye hume pahle link tah ko import karna ho 
```javascript
import { Link, NavLink } from "react-router-dom";
```
- import karne ke bad kahi bhi use kar satke hai
#### Exaple: 
```javascript
<Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
```
## Router kaise banate hai

main.jsx:
```javascript
<RouterProvider router={router}/> // <App /> ki jagah
```
## How to create a route
- two type of we create a route

#### frist
```javascript
 const router = createBrowserRouter([
   {
     path: '/',
     element: <Layout/>,
     children: [
       {
         path: "",
         element: <Home/>
      },
       {
         path: "about",
         element: <About/>
       },
       {
         path: "contact",
         element: <Contact/>
       }
     ]
   }
 ])
```
#### Secend
```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='contact/:contactid' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)
```

# what is {Outlet} , how to use and why
- Dynamic routing ka liye {Outlet} ka use karte hai
- Ye Outlet hume react-route-dom se milta hai To ese
#### use karne ke liye Outlet ko import karna parta hai
```javascript
import { Outlet } from 'react-router-dom'
```
##### Fir Outlet ko function me pass kar dete hai
### Exaple
```javascript

function Layout() { // it is function called Layout
  return (
   <>
    <Header /> // header component jo every page par show hoga
    <Outlet/>  // Outlet  wala section every page par change hoga Exaple: Home, About, Contact, Github
    <Footer /> // Footer component jo every page par show hoga
   </>
  )
}

export default Layout 
```