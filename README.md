# Testing a test-setup with Mocha & Chai

1. Setup project by running `npm install`.
2. Build JS app by running `gulp js`.
3. Test the JS by running `gulp test`.

The tests are run on the compiled JS found at `/assets/app.js`, which are created by running `gulp js`. The test will run "headless" and print their results into the command line. View the tests in `/test/tests.js`. View the raw JavaScript in `/uncompressed/js/app.js`.