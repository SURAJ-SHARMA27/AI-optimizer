# AI Code Refactor

**AI Code Refactor** is a Visual Studio Code extension that helps optimize your JavaScript code with the power of AI. By selecting a block of code and pressing `Shift + Alt + I`, the extension will analyze the selected code and provide an optimized version, replacing the original code while commenting out the original for easy comparison.

## Features

### AI-Powered Code Optimization
- Select any code in your editor.
- Press `Shift + Alt + I` to trigger the AI code optimization.
- The AI provides an optimized version of the selected code and replaces the previous code.
- The original code will be commented out for reference.

### Code Snippets
In addition to AI-based code refactoring, the extension includes useful code snippets for quick setup:
- **MongoDB Express Connection**: Quickly generate boilerplate code for setting up MongoDB with Express and Mongoose.
- **Node.js Express Boilerplate**: Generate a basic Node.js server using Express.

## Usage

1. **AI Code Refactor**:
   - Select a block of JavaScript code in your editor.
   - Press `Shift + Alt + I`.
   - The optimized code will replace the original code.
   - The original code will appear commented out, making comparison easy.

2. **Snippets**:
   - **MongoDB Express Connection**: Type `mongoexp` and hit Tab to insert MongoDB and Express boilerplate code.
   - **Node.js Express Boilerplate**: Type `nexp` and hit Tab to insert a basic Node.js server setup.

## Installation

1. Install the extension from the Visual Studio Code Marketplace.
2. Ensure you have a valid API key for the AI service (configured via `.env` file with the variable `GEMINI_API_KEY`).

## Requirements

- **Node.js** and **npm**.
- AI-powered suggestions use the **GoogleGenerativeAI** API. 
- Visual Studio Code `1.93.0` or higher.

## Known Issues

None at the moment. Please report any issues on the GitHub repository.

## Release Notes

### 1.0.0

- Initial release with AI-powered code optimization and two snippets (MongoDB connection and Node.js server setup).
