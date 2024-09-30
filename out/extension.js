"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const gemini_api_key = process.env.GEMINI_API_KEY;
let googleAI;
try {
    googleAI = new GoogleGenerativeAI("AIzaSyDKl1GheDTBv4wSrTW0V-3SCZNonVOcAbw");
    console.log('GoogleGenerativeAI client initialized successfully.');
}
catch (error) {
    console.error('Failed to initialize GoogleGenerativeAI client:', error);
}
function activate(context) {
    console.log('Extension activated.');
    vscode.window.showInformationMessage('Extension Activated');
    let disposable = vscode.commands.registerCommand('extension.withAI', async () => {
        console.log('Command extension.withAI triggered.');
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active text editor found.');
            return;
        }
        const document = editor.document;
        const selectedText = document.getText(editor.selection);
        if (!selectedText) {
            vscode.window.showErrorMessage('No code selected.');
            console.log('No code selected.');
            return;
        }
        console.log('Selected text:', selectedText);
        try {
            if (!googleAI) {
                throw new Error('GoogleGenerativeAI client not initialized.');
            }
            const geminiModel = googleAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
            console.log('Calling Gemini API...');
            const response = await geminiModel.generateContent("Give optimized code if available for the selected code. Provide only the code without any explanation. If it is already optimized, respond that it is the most optimized already." + selectedText);
            console.log('API response received:', response);
            const suggestion = response.response.text();
            vscode.window.showInformationMessage(`AI Suggestion: ${suggestion}`);
            const commentedOriginalCode = `\n\n// Original Code:\n/*\n${selectedText}\n*/`;
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, suggestion + commentedOriginalCode);
            });
        }
        catch (error) {
            console.error('Error during API call:', error);
            vscode.window.showErrorMessage(`Failed to get AI suggestion: ${error.message || error}`);
        }
    });
    context.subscriptions.push(disposable);
}
function deactivate() {
    console.log('Extension deactivated.');
}
//# sourceMappingURL=extension.js.map