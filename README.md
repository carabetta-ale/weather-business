<a name="readme-top"></a>

<h3 align="center">Weather&Business</h3>

  <p align="center">
  ExpressJS server to gather weather info and businesses in selected cities.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project consists of receiving various city names as input and returns the weather and associated businesses, giving various information such as reviews

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [Nodejs]
- [Express]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Get a free OpenWeather API Key at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Get a free Yelp API key at [https://www.yelp.com/developers/documentation/v3](https://www.yelp.com/developers/documentation/v3)

3. Clone the repo
   ```sh
   git clone
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your OpenWeather API in a `.env` file
   ```env
   OW_KEY=ENTER YOUR API
   ```
6. Enter your Yelp API in a `.env` file
   ```env
   YELP_KEY=ENTER YOUR API
   ```
7. Enter the desired port to use for the server in a `.env` file
   ```env
   PORT=ENTER YOUR PORT
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Call the API using a servizce like `Postman` by calling the following URL

```
http://localhost:3000/weatherReport?cities={ENTER YOUR CITIES SEPARATED BY COMMA}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alessandro Carabetta - [Linkedin](https://www.linkedin.com/in/alessandro-carabetta-1a069a1b4/) - carabetta.ale@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
