<br />
<p align="center">

![Screenshot (162)](https://user-images.githubusercontent.com/63772910/164757993-5980cbbf-1275-42e8-bd28-f65f503fbe81.png)


  </a>

  <h3 align="center">E-Commerce Website</h3>
  
  <h4 align="center">Demo: <a href="https://next-e-commerce-example.vercel.app/">https://next-e-commerce-example.vercel.app/</a></h4>

  <p align="center">
    An e-commerce website example built with Next.js  Using Firebase as backend.
    <br />
    <br />
  
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

Implemented a UI design on Dribbble by [Anton Mikhaltsov](https://dribbble.com/shots/9404340-Shop-Clothing-Web-Page).

- Filter and Sort buttons are not working yet.
- It is responsive.
- Firebase functions could be better
- Home page(News In) cards has no redirects. They are just placeholders.

### Built With

- [React](https://reactjs.org)
- [NextJS](https://nextjs.org/)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [React Hook Form](https://react-hook-form.com/)
- [date-fns](date-fns.org/)
- [Sass](https://sass-lang.com/)

<!-- Screens -->

## Screenshots

### News In

![Home Image](https://i.ibb.co/ZzG3GtN/index.png)
- Cards has no links and they are static, they are just placeholders.

### Categories

![Categories Image](https://i.ibb.co/ScCBXDZ/index2.png)

### Product

![Product Image](https://i.ibb.co/mbsd2Y1/index5.png)

### Cart

![Cart Image](https://i.ibb.co/svHtw0H/index3.png)

### Account

![Account Image](https://i.ibb.co/JcR3x7F/index4.png)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) version 10.13 or later
- [Git](https://git-scm.com/) (I used 2.20.1)

### Installation

1. You need to create a firebase project

2. Clone the repo and change the directory

```sh
git clone https://github.com/anilsenay/next-e-commerce.git
cd next-e-commerce
```

3. Install NPM packages

```sh
npm install
```

4. Create your .env.local file on root folder(next-e-commerce) with this content. Put your firebase keys.

```
NEXT_PUBLIC_FIREBASE_API_KEY = your-firebase-api-key
NEXT_PUBLIC_FIREBASE_PROJECT_ID = your-firebase-project-id
NEXT_PUBLIC_FIREBASE_APP_ID = your-firebase-app-id
```

5. Run in development mode

```sh
npm run dev
```

<!-- Issues / Future plans -->

## Issues - Future plans

- Filter and Sort buttons
- Optimize firestore query functions
- On cart page, decrease item button is not working
- ~~Website will be %100 responsive~~
- Replace some HTML tags with semantic tags

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->

## License

Distributed under the GPL License. See `LICENSE` for more information.

