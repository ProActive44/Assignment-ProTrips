![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### Learning Goals | Pro-Tips:

The aim of this lab is to apply the understanding of `forms` and `routers` together.

***Do not forget to use the following command: `npm install react-router-dom` inorder to use router's. ***

### Steps to follow:

1. create a new react project -> using the following command: `npm create vite@latest pro-tips`.
2. You have to make a navbar as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-routers-forms.gif)

As you can see, that ->

1. If we click on Contacts --> we are directed to contacts page.
2. If we click on Registration Form --> we are directed to a page -> where a form is displayed to us.

    2.1  Your form can be very similar to what we have already created in previous lab on `forms`, here is a quick description of the same:

    Your form should have the following fields-
        1. First Name
        2. Last Name
        3. Email
        4. Contacts
        At the end of the form, you should have a button named as `Register`. Upon clicking on this button, your form should be get submitted - and a message should pop-up -> `Registration succesfull!` for validation purpose.

      **NOTE:** You should not get `Registration succesfull!` message, if any of the field is empty. If any field is empty, you should give some message/warning. For eg:

      If I submit the form, without filling out the first-name field, then I should get a message that `Please enter your first name!`.
      Here is demo for your refernce:


![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/form-react.gif)


3. If we click on the name of the site (Kalvium) --> we are directed to the Home page.

You have to achieve the same, using `router's` and `forms`.

**NOTE:** Keep in mind the structure of your application as well. Try to create different components for each page.
For eg: you can create a component as `Contact.jsx` --> where you write the logic for the Contact page, and similarly for other pages. --> this will help you to organize your application structure.


Happy Coding ❤️!