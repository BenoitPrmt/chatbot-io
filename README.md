<div align="center" id="top"> 
  <img src="https://i.ibb.co/c8hy30b/chatbot-io.webp" alt="chatbot-io banner" />
</div>

<h1 align="center">Chatbot-IO</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/BenoitPrmt/chatbot-io?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/BenoitPrmt/chatbot-io?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BenoitPrmt/chatbot-io?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/BenoitPrmt/chatbot-io?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0;
</p>

<br>

## :dart: About

With Chatbot-IO you can get real conversations or simply make him answer questions in a fast way.

## :sparkles: Features

👨‍🎓 Create a profile\
📤 Send a keyword\
💬 Get the chatbot to answer with an API request or a homemade message

## :rocket: Technologies

The following tools were used in this project:

- [JavaScript](https://developer.mozilla.org/fr/)
- [SASS](https://sass-lang.com/)
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/fr/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

### Frontend Installation

```bash
# Clone this project with GitHub
$ git clone https://github.com/BenoitPrmt/chatbot-io.git

# Access frontend folder
$ cd chatbot-io

# Create a .env.local file
$ touch .env.local

# Fill it with your frontend and backend ports by following the .env.example

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://127.0.0.1:9090>
```

### Backend Installation

```bash
# Clone this project with GitHub
$ git clone https://github.com/BenoitPrmt/chatbot-io-api.git

# Access backend folder
$ cd chatbot-io-api

# Install dependencies
$ composer install

# Look for all the classes and files it needs to include again
$ composer dump-autoload

# Start your Nginx server and PHP server

# 👇 For MacOS
$ brew services start php@8.3 && brew services start nginx

# 👇 For Windows
$ sudo systemctl start php@8.3 && sudo systemctl start nginx

# Start your MAMP / XAMP / LAMP server

# Upload on PHPMyAdmin the database chatbot_io.sql.gz which is in the database folder

# The server will initialize on the port specified in the Nginx configuration file
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/BenoitPrmt" target="_blank">Benoît</a> and <a href="https://github.com/Raxuis" target="_blank">Raphaël</a>

&#xa0;

<a href="#top">Back to top</a>
