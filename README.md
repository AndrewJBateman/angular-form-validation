# Angular Form Validation

This app sets up form validation in Angular 7 using Template-Driven Forms. This is a simple registration form with standard fields for first name, last name, email, password and confirm password.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Styling of the template-driven forms is done using Bootstrap 4 CSS.

## Screenshots

![Example screenshot](./img/form-validation.png).

## Technologies

* [Angular v7.0.0](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [RxJS Library v6.4.0](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

## Features

* All fields are required, the email field must be a valid email address and the password field must have a min length of 6.

* A custom validator and directive called MustMatch is used to validate that the confirm password and password fields match.

* The form validates on submit rather than as soon as each field is changed, this is implemented using the f.submitted property of the #f="ngForm" template variable which is true after the form is submitted for the first time.

## Status & To-Do List

* Status:

* To-Do: add to commenting. Look into developer tools comment:[DOM] Input elements should have autocomplete attributes (suggested: "new-password"):(More info: `https://goo.gl/9p2vKq)`

## Inspiration

* [Blog by Jason Watmore: Angular 7 - Template-Driven Forms Validation Example](http://jasonwatmore.com/post/2018/11/10/angular-7-template-driven-forms-validation-example).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
