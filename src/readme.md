# Skill Sharpening Project

Over the past few weeks you've absorbed a ton of new information about how to code. In this project, you will practice many of the core JavaScript skills you've gained through a series of drills focused on individual topics.

The goal of this project is to give you repeated practice.

There are 186 unit tests that need to pass. Each passing test will be worth 1 point.

A minium of 129 points must be attained in order to pass this assessment.

There is no partial credit for the tests.

## Project setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run test files individually

There are a lot of tests that are contained in this project. You can run a single test file individually by putting the name of the file after `npm test`. You can even only put part of the file name.

```
npm test even-more-loops
```

Keep in mind that the testing framework, Jest, will attempt to match as many files as possible. So, for example, the following command will run both the tests in `06-loops.test.js` and `07-even-more-loops.test.js`.

```
npm test loops
```

### Run tests individually

_After choosing a specific file to run,_ you can also specific which test you want to run, specifically. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return an array of everyone's name who is in the line, in order", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

> **NOTE:** Don't forget to remove this after you get the test to pass!

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Instructions

### Project overview

This project contains a number of files covering a variety of different JavaScript topics. Each file to complete is inside of the `src/` directory. For each file, solve the functions by reading through the JSDoc comments above each function. You may also look to the tests, inside of the `__tests__/` directory, to understand what is being asked of you.

You may complete the functions in any order, although you may find that the earlier files (e.g. `01-functions.js`) are easier than some of the later files. Every function requires that _something_ is returned. Pay close attention to the comments and tests to understand what is being asked of you.

### Tips

- Before starting a problem, particularly the more difficult ones, consider the following:

  - What are the inputs and outputs of this function?
  - What do the tests ask for in relation to this function? Are there any edge cases?
  - How might I go about solving this problem? (e.g. Do you need a `for` loop? Bracket notation? An `if/else` statement?)

  Particularly for the more difficult problems, spend time planning your approach before just diving into the code.

- The point of these drills is to give you a lot of practice. Approach each problem, trying to recall the syntax. If you can't remember, then reference your notes or the class materials. Then, if you are still struggling, reach out for help. It's important to attempt to recall the information on your own as opposed to solely relying on notes or others.

- If you're stuck for awhile on a problem, move on to another function or file. Sometimes taking a break from working on one problem by working on another can help.

- If you're ever unclear as to what you need to do, check both the comments and the tests. The tests will have clear inputs and outputs to try.

- There should be no new tools or methods you need to use to solve these problems. Reference your reading, old labs, and other resources shared in class. Do not just search the internet for an answer.
