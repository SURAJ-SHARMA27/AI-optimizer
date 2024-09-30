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

## Installation from Git Repository

To set up the **AI Code Refactor** extension from the GitHub repository:
 
1. **Clone the Repository**:
   ```
   git clone https://github.com/SURAJ-SHARMA27/AI-optimizer.git
   cd AI-optimizer
   ```
2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then, run:
   ```
   npm install
   ```
3. **Configure API Key**:
   Create a .env file in the root of the project and add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   It is highly recommended to use your own API key. You can generate one by visiting the [Google API Console](https://aistudio.google.com/app/apikey).

   For testing purposes, you may use the following key:
   ```
   GEMINI_API_KEY=AIzaSyDKl1GheDTBv4wSrTW0V-3SCZNonVOcAbw
   ```

4. **Open in Visual Studio Code**:
   Launch Visual Studio Code in the project directory:
   ```
   code .
   ```
5. **Run the Extension**:
   Press F5 to start debugging your extension. This will open a new window of Visual Studio Code with your extension loaded.


## Requirements

- **Node.js** and **npm**.
- AI-powered suggestions use the **GoogleGenerativeAI** API.
- Visual Studio Code `1.93.0` or higher.

## Known Issues

None at the moment. Please report any issues on the GitHub repository.

## Release Notes

### 1.0.0

- Initial release with AI-powered code optimization and two snippets (MongoDB connection and Node.js server setup).

