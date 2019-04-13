# Angular Form Validation

This app sets up form validation in Angular 7 using Template-Driven Forms. This is a simple registration form with standard fields for first name, last name, email, password and confirm password. Additional field with maxLength validator added.

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

* Input fields of main form have validation so incorrect inputs trigger a red boundary around the input field and an error message.

* Styling of the template-driven forms is done using Bootstrap 4 CSS.

## Screenshots

![Example screenshot](./img/form-validation.png).

## Technologies

* [Angular v7.2.13](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [Bootstrap v4.3](https://getbootstrap.com/) component library used.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* div with firstName field entry that is validated using a validator and directive called MustMatch

```typescript
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              class="form-control"
              name="firstName"
              [(ngModel)]="model.firstName"
              #firstName="ngModel"
              [ngClass]="{ 'is-invalid': f.submitted && firstName.invalid }"
              required
            />
            <div *ngIf="f.submitted && firstName.invalid" class="invalid-feedback ">
              <div *ngIf="firstName?.errors.required">First Name is required</div>
            </div>
          </div>

```

## Features

* All fields are required, the email field must be a valid email address and the password field must have a min length of 6.

* A custom validator and directive called MustMatch is used to validate that the confirm password and password fields match.

* The form validates on submit rather than as soon as each field is changed, this is implemented using the f.submitted property of the #f="ngForm" template variable which is true after the form is submitted for the first time.

## Status & To-Do List

* Status: simple working form with validaton. The maxLength validation div does not provide error message, just limits the field length to 5 characters.

* To-Do: add functionality to form.

## Inspiration

* [Blog by Jason Watmore: Angular 7 - Template-Driven Forms Validation Example](http://jasonwatmore.com/post/2018/11/10/angular-7-template-driven-forms-validation-example).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
