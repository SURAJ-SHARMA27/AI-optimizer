# AI Code Refactor Extension

## Overview

The **AI Code Refactor** extension is designed to optimize your JavaScript code using AI-powered suggestions. By selecting code and pressing `Shift + Alt + I`, the extension analyzes and provides optimized code, replacing the original and commenting out the previous code for easy comparison.

Additionally, the extension includes helpful snippets for quickly setting up MongoDB and Node.js Express server boilerplate code.

## Features

1. **AI-Powered Code Optimization**:
   - Select a block of JavaScript code in your editor.
   - Press `Shift + Alt + I` to trigger the AI-powered optimization.
   - The AI-generated code will replace the original selection.
   - The original code will be commented out for comparison.

2. **Predefined Code Snippets**:
   - **MongoDB Express Connection**: Quickly set up a MongoDB connection using Mongoose.
   - **Node.js Express Boilerplate**: Generate a basic Node.js server with Express setup.

## How to Use

### Running the Extension:
1. Press `F5` to launch a new window with your extension loaded.
2. Select some code in the editor.
3. Trigger the AI-powered optimization by pressing `Shift + Alt + I`.
4. The optimized code will replace the selected code, with the original code commented for comparison.

### Using Snippets:
- **MongoDB Express Connection**: Type `mongoexp` and press Tab to insert the MongoDB connection boilerplate code.
- **Node.js Express Boilerplate**: Type `nexp` and press Tab to insert a Node.js Express server setup.

## Extension Commands

- `Shift + Alt + I`: Optimize selected JavaScript code using AI and comment out the original code for comparison.

## How to Get Started

1. Press `F5` to open a new window with your extension loaded.
2. Select code in the active text editor and press `Shift + Alt + I` to optimize it.

## Debugging

- Set breakpoints in `src/extension.ts` to debug your extension.
- Use the debug console to view any errors or output from the AI response.

## API

Explore the full VS Code API by navigating to `node_modules/@types/vscode/index.d.ts`.

## Testing

- Run tests using the **Extension Test Runner**.
- Watch task can be triggered via **Tasks: Run Task** to ensure tests are automatically discovered.
- You can view test results in the Testing view.

## Future Development

- Explore UX guidelines to ensure seamless integration with VS Code's interface.
- Reduce extension size and improve startup time by bundling your extension.
- Publish your extension on the [VS Code Marketplace](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).
- Set up Continuous Integration for automated testing and building.

---

This extension is currently in its initial release. For any issues or feature requests, feel free to report them in the project repository.
