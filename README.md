# Test-Driven Development: Team Profile Generator

The motivation of this project was to create a Node.js command-line application using JavaScript. The application will take in information about employees on a software engineering team which will then generate a rendered HTML webpage that displays a summary for each person. The application also has test script to make sure each section of code passes a predetermined criteria. 

## Functionality

The following shows the functionality and prompts the user will have to complete in order to generate the HTML page.

When a user starts the application then they are prompted to enter the **team manager**’s:

  * Name
  * Employee ID
  * Email address
  * Office number

  When a user enters those requirements then the user is presented with a menu with the option to:

  * Add an engineer
  * Add an intern 
  * Finish building the team
  
  When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:

  * Engineer's Name
  * ID
  * Email
  * GitHub username
  
  When a user selects the **intern** option then a user is prompted to enter the following and then the user is taken back to the menu:

  * Intern’s name
  * ID
  * Email
  * School

When a user decides to finish building their team then they exit the application, and the HTML is generated.

## Screenshot

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![screenshot of generator ](./assets/Project%20screenshot.JPG)

## License
MIT License

Copyright (c) 2022 MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
