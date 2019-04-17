# News Search

News Search is a small React app allowing the user to search news headlines and
sort by publish date, popularity, and relevancy. It leverages
[News API](https://newsapi.org/)'s
[`everything` endpoint](https://newsapi.org/docs/endpoints/everything).
Publishing source logos are provided by [Clearbit](https://clearbit.com/)'s
free [logo API](https://clearbit.com/logo) if available.

The only requirement to run the project is
[Docker desktop](https://www.docker.com/products/docker-desktop).
The project uses `docker-compose` to encapsulate dependencies. The project's
`Dockerfile` is based on the `node:current-alpine` image.

### Running the project

To run the project for development with a local web server, in the project
directory, run:

```
docker-compose up web
```

This will run `npm start` in the container. You can also shell into the container

```
docker-compose run --rm web /bin/bash
```

Once in the running container, you can run all the available `npm` scripts or
you can choose to run them through `docker-compose`.

In the project directory, you can run:

```
# equivalent to `docker-compose run -rm web npm start`
docker-compose run -rm web npm start
```

Again, this runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Running tests

```
docker-compose run -rm web npm test
```

Launches the test runner in the interactive watch mode.
See ReactJS's documentation section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### Building the app for deployment

```
docker-compose run -rm web npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Future Roadmap

Nothing is more constant than that feeling of wanting to do just _one. more. thing_.
Here is my current list:

- Loading indicator when background requests are running
- Paging (currently only request the default first 20 articles)
  - Request additional pages after scrolling to the bottom of results
  - Indicate when there are no more results
- "Delightful" transition of incoming articles
  - Fade? Card spin? So many possibilities.
- Tests
  - Ensure all components render
- Keep current state with URL params to allow easy sharing of a search and the results
- On Welcome, display current headlines to inspire some something to search
