<div align="center">
  <img src="../image/logo.svg" alt="Parse Buffer Logo" width="210"/>
  <h1>Parse Buffer</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/parse-buffer/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/parse-buffer/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/parse-buffer/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/parse-buffer/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-buffer"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fparse-buffer" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/parse-buffer" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-buffer"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fparse-buffer" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/parse-buffer?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/parse-buffer?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/parse-buffer/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/parse-buffer" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Parse Buffer is a JavaScript function that converts the string representation of a Buffer object into the original Buffer object. This function is useful when you want to reprocess binary data stored or sent in string format.

## Features

Parse Buffer offers the following features:

- Converts a Buffer representation string into a native Buffer object.
- Checks if the input is in a valid Buffer format.
- Can be integrated into TypeScript code.

## Installation

To install Parse Buffer locally, follow these installation steps:

```shell
npm install @barudakrosul/parse-buffer
```

## Usage

To start using Parse Buffer, import the module first:

**1\. CommonJS**
```javascript
const parseBuffer = require("@barudakrosul/parse-buffer");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import parseBuffer from "@barudakrosul/parse-buffer";
```

**3\. TypeScript**
```typescript
import parseBuffer from "@barudakrosul/parse-buffer";
```

Example of usage:

```javascript
const bufferString = "<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>";
const buffer = parseBuffer(bufferString);

console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buffer.toString()); // "Hello World!"
```

## Contribution

Contributions to Parse Buffer are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Parse Buffer is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Parse Buffer appreciates the support and contributions of the following individuals and open source projects:

- [@Achixz](https://github.com/Achixz) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Parse Buffer by referring to [Changelog](https://github.com/BarudakRosul/parse-buffer/releases).

Thank you for choosing Parse Buffer! We aim to provide an easy solution to convert Buffer strings into native Buffer objects.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)