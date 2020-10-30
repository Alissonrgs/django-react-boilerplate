# Django React Boilerplate

## About

A Django project pre-configured with React and other useful libraries to speed up the development of any project. This endeavor was build with security in mind the and contains the following libraries:

 - [django-rest](https://www.django-rest-framework.org/), for a powerful API
 - [django-js-reverse](https://github.com/ierror/django-js-reverse), for generating URLs on JS
 - [django-two-factor](https://github.com/Bouke/django-two-factor-auth), for  two-factor authentication experience
 - [django-allauth](https://github.com/pennersr/django-allauth), for address authentication and registration
 - [React](https://reactjs.org/), for building interactive UIs
 - [Webpack](https://webpack.js.org/), for bundling static assets
 - [Celery](http://www.celeryproject.org/), for background worker tasks
 - [Docker](https://www.docker.com/), for easy deployment of services

## Pre-requisites

Python 3, NodeJS and Docker installed

## Running Project

Open a command line window on the project directory and
execute the following commands:

 - ``pip install -r requirements.txt``
 - ``python manage.py runserver``

On another command line window, go to the folder ``front``, and execute the following commands:

 - ``yarn install``
 - ``yarn start``

### Running services (with docker)

To execute PostgreSQL and Celery, open a command line window on the project's directory and execute the following command:

 - ``docker-compose up -d``