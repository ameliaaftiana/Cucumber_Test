# Tugas Cucumber - Test Engineering

## 😁 About Me

Nama: Amelia Putri Aftiana
NIM: 71220867

## 📖 Overview

This project demonstrates **Behavior Driven Development (BDD)** using **Cucumber.js** with **Selenium WebDriver** for automated testing of web applications. The project implements comprehensive test scenarios for user login functionality and shopping cart management using the SauceDemo website.

## 🛠️ Tech Stack

- **Cucumber.js** - BDD framework with Gherkin syntax
- **Selenium WebDriver** - Browser automation
- **Chai** - Assertion library
- **Node.js** - JavaScript runtime
- **Chrome WebDriver** - Browser automation driver

## 📋 Prerequisites

Before running this project, make sure you have:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Chrome Browser](https://www.google.com/chrome/)
- [ChromeDriver](https://chromedriver.chromium.org/) (automatically managed by Selenium)

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cucumber-tutorial
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Verify installation**
   ```bash
   npm test
   ```

## 📁 Project Structure

```
cucumber-tutorial/
├── features/
│   ├── step_definitions/
│   │   └── step.js           # Step definitions implementation
│   └── login.feature         # Gherkin scenarios
├── package.json              # Project dependencies
├── cucumber.json             # Cucumber configuration
└── README.md                # This file
```

## 🧪 Test Scenarios

The project includes **6 comprehensive test scenarios**:

### Core Scenarios
1. **Successful Login** - Valid credentials authentication
2. **Failed Login** - Invalid credentials error handling
3. **Add Item to Cart** - Shopping cart functionality
4. **Remove Item from Cart** - Cart management

### Additional Scenarios
5. **User Logout** - Session termination
6. **Product Details View** - Product information display

## 📝 Gherkin Features

Each scenario is written in **Gherkin syntax** using:
- `Feature:` - Describes the feature being tested
- `Scenario:` - Specific test case
- `Given:` - Initial context/preconditions
- `When:` - Actions performed
- `Then:` - Expected outcomes
- `And:` - Additional conditions

### Example Scenario:
```gherkin
Scenario: Successful login with valid details
    Given the user is on the login page
    When the user enters a valid username and password
    And the user clicks the login button
    Then the user should see a success message
```

## 🎯 Key Features

- **BDD Approach**: Human-readable test specifications
- **Cross-browser Testing**: Selenium WebDriver integration
- **Assertion Library**: Comprehensive validation using Chai
- **Error Handling**: Robust error management and cleanup
- **Modular Design**: Reusable step definitions

## ✅ Test Results

### Successful Test Execution

The project has been successfully tested with all scenarios passing:

![Test Results](https://github.com/ameliaaftiana/Cucumber_Test/blob/main/test-results-screenshot.png)

**Test Summary:**
- ✅ **6 scenarios** - All passed
- ✅ **28 steps** - All passed  
- ⏱️ **Execution Time**: ~1m14s
- 🖥️ **Browser**: Chrome (automated)

## 🔧 Configuration

### Package.json Configuration
```json
{
  "type": "module",
  "scripts": {
    "test": "cucumber-js"
  },
  "devDependencies": {
    "@cucumber/cucumber": "^11.2.0",
    "chai": "^5.1.2",
    "selenium-webdriver": "^4.x.x"
  }
}
```

### Cucumber Configuration
```json
{
  "default": {
    "formatOptions": {
      "snippetInterface": "synchronous"
    }
  }
}
```

## 🎮 Running Tests

Execute all test scenarios:
```bash
npm test
```

Run specific feature:
```bash
npx cucumber-js features/login.feature
```

## 📊 Test Coverage

The project covers:
- **Authentication Flow** (Login/Logout)
- **Shopping Cart Operations** (Add/Remove items)
- **Navigation Testing** (Page transitions)
- **Error Handling** (Invalid credentials)
- **UI Validation** (Element presence and content)

## 📈 Benefits of BDD Approach

1. **Improved Communication** - Stakeholders understand requirements
2. **Living Documentation** - Tests serve as documentation
3. **Early Bug Detection** - Catch issues before production
4. **User-Centric Focus** - Tests reflect real user behavior
5. **Collaboration** - Bridge between technical and non-technical teams

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-scenario`)
3. Add your test scenarios in Gherkin format
4. Implement corresponding step definitions
5. Commit your changes (`git commit -am 'Add new test scenario'`)
6. Push to the branch (`git push origin feature/new-scenario`)
7. Create a Pull Request

## 📚 Learning Resources

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Selenium WebDriver Guide](https://selenium-python.readthedocs.io/)
- [Chai Assertion Library](https://www.chaijs.com/)
- [Gherkin Syntax Reference](https://cucumber.io/docs/gherkin/)

## 🐛 Troubleshooting

### Common Issues:

1. **ChromeDriver not found**
   ```bash
   npm install selenium-webdriver --save-dev
   ```

2. **Timeout errors**
   - Increase `setDefaultTimeout(30000)` in step definitions
   - Check internet connection for SauceDemo website

3. **Element not found**
   - Verify element selectors in SauceDemo website
   - Add explicit waits using `until.elementLocated()`

**Happy Testing! 🧪✨**
