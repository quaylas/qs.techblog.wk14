# Challenge 14 : Tech Blog | QS

  ## Description

  [![License: ISC](https://img.shields.io/badge/license-ISC-0d0042)](https://opensource.org/licenses/ISC)

  A simple CMS-style blog site where developers can publish and comment on blog posts. The application leverages MySQL, Sequelize, express-handlebars, dotenv, bcrypt, express-session, and connect-session-sequelize.

  
  The application is deployed live [here](https://devcenter.heroku.com/articles/jawsdb)

  ## Table of Contents
  * [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## User Story and Acceptance Criteria

  ### User Story
  ```
  AS A developer who writes about tech
  I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions
  ```

  ### Acceptance Criteria
  ```
  WHEN I visit the site for the first time
  THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
  ```
  ```
  WHEN I click on the homepage option
  THEN I am taken to the homepage
  ```
  ```
  WHEN I click on any other links in the navigation
  THEN I am prompted to either sign up or sign in
  ```
  ```
  WHEN I choose to sign up
  THEN I am prompted to create a username and password
  ```
  ```
  WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
  ```
  ```
  WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
  ```
  ```
  WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to log out
  ```
  ```
  WHEN I click on the homepage option in the navigation
  THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
  ```
  ```
  WHEN I click on an existing blog post
  THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
  ```
  ```
  WHEN I enter a comment and click on the submit button while signed in
  THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  ```
  ```
  WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  ```
  ```
  WHEN I click on the button to add a new blog post
  THEN I am prompted to enter both a title and contents for my blog post
  ```
  ```
  WHEN I click on the button to create a new blog post
  THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
  ```
  ```
  WHEN I click on one of my existing posts in the dashboard
  THEN I am able to delete or update my post and taken back to an updated dashboard
  ```
  ```
  WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
  ```
  ```
  WHEN I am idle on the page for more than a set time
  THEN I am automatically signed out of the site
  ```

  ## Installation

  Clone the repository and add your own .env file with appropriate credentials. Install dependencies by running the command $npm install

  ## Usage

  Once installation is complete, you will need to initialize  a database and deploy the app (click here to view a live version of the application).

  ## Contributions

  Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

  ## Tests

  There are currently no tests available for this application.

  ## Questions

  This project was developed by [quaylas](https://github.com/quaylas). 
  Questions may be directed to [quayla@cxadvisors.com](mailto:quayla@cxadvisors.com).

  ## License

  This application is licensed under the [ISC License](https://opensource.org/licenses/ISC).
  

