# WEBSOCKETS

## Requirements

* Docker

## Installation instructions

```bash
> git clone https://github.com/juljupy/websockets.git
> cd websockets
> cd siapsockets
> cp .env.example .env
> docker run --rm --interactive --tty -v $(pwd):/app composer install --ignore-platform-reqs
> ./vendor/bin/sail build
> ./vendor/bin/sail up
```

* Open a new terminal and type:

```bash
> ./vendor/bin/sail artisan migrate
```

**NOTE**
If you get a permission error type (**WARNING**):

```bash
sudo chmod 777 -R .
```

## Application routes

You have several URLs to visualize and monitorize `websockets` app:

* http://localhost:81 (backend app with user registration and login).
* http://localhost:81/horizon (Message queue monitoring).
* http://localhost:3000 (front end app to play with websockets).
