import * as vscode from 'vscode';
import * as dotenv from 'dotenv';
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini_api_key = process.env.GEMINI_API_KEY;

let googleAI: any;
try {
    googleAI = new GoogleGenerativeAI("AIzaSyDKl1GheDTBv4wSrTW0V-3SCZNonVOcAbw");
    console.log('GoogleGenerativeAI client initialized successfully.');
} catch (error) {   
    console.error('Failed to initialize GoogleGenerativeAI client:', error);
}

export function activate(context: vscode.ExtensionContext) {
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
            const response = await geminiModel.generateContent(
                "Give optimized code if available for the selected code. Provide only the code without any explanation. If it is already optimized, respond that it is the most optimized already." + selectedText
            );
            console.log('API response received:', response);

            const suggestion = response.response.text();
            vscode.window.showInformationMessage(`AI Suggestion: ${suggestion}`);

            const commentedOriginalCode = `\n\n// Original Code:\n/*\n${selectedText}\n*/`;

            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, suggestion + commentedOriginalCode);
            });

        } catch (error: any) {
            console.error('Error during API call:', error);
            vscode.window.showErrorMessage(`Failed to get AI suggestion: ${error.message || error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Extension deactivated.');
}
