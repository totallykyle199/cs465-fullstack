# cs465-fullstack

# Architecture
- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  
Express: is a well-liked server-side Node.js framework for web applications. It supports server logic, middleware, and routing. Express is in charge of managing HTTP requests and providing HTML, JSON, or other content to the client in a full-stack project.
  
  HTML: (Hypertext Markup Language) is the standard markup language for creating web pages.
    
  JavaScript: is a versatile scripting language used for client-side scripting.
    
  SPA: Single-page HTML applications, or SPAs, load an HTML page and dynamically change the content based on user interactions. They develop responsive and seamless user experiences by   utilizing JavaScript frameworks such as Vue.js, Angular, and React. SPAs offer a more seamless user experience by decreasing the need for complete page reloads.
    
- Why did the backend use a NoSQL MongoDB database?
  
MongoDB is a document-oriented, NoSQL database that stores information in an adaptable, schema-less BSON (Binary JSON) format. Unlike conventional relational databases, MongoDB works well for projects requiring highly scalable data structures or those that are changing in terms of data architectures.

# Functionality
- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-   
The JSON specification defines the format for data. It is compatible with many different programming languages. Programming languages like JavaScript define objects using JSON. JSON and APIs are used to connect the front end and back end. JSON is used by RESTful APIs to send and receive queries.
  
- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  
Using Handlebars to create templates in place of some of the static HTML pages is one example of refactoring to improve functionality. This made it possible to change the content displayed on a page while maintaining its structural integrity. Another rewrite involves storing the material in MongoDB instead of static JSON files stored within the codebase, which were used to populate the templates. This makes it possible to add or modify content data without requiring the website's code to be updated.


