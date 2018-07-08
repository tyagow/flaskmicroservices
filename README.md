# Microservices with Docker, Flask, and React

[![Build Status](https://travis-ci.org/tyagow/flaskmicroservices.svg?branch=master)](https://travis-ci.org/tyagow/flaskmicroservices)

## Running dev 

```shell
$ sudo docker-compose -f docker-compose-dev.yml up -d --build 
$ sudo docker-compose -f docker-compose-dev.yml run users python manage.py recreate_db
$ docker-compose -f docker-compose-dev.yml run users python manage.py seed_db
$ docker-compose -f docker-compose-dev.yml run users python manage.py test
```