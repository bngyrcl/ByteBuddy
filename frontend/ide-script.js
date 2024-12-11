function selectLanguage(language) {
    const codeEditor = document.getElementById("codeEditor");
    const outputConsole = document.getElementById("outputConsole");
    const languageStatus = document.getElementById("current-language");

    // Define templates
    const templates = {
        Python: `def hello_world():\n    print("Hello, World!")`,
        JavaScript: `function helloWorld() {\n    console.log("Hello, World!");\n}`,
        Java: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
        C: `#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`,
        "C++": `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
    };

    // Update the content and language class
    const selectedLanguage = `language-${language.toLowerCase()}`;
    codeEditor.className = selectedLanguage;
    codeEditor.innerHTML = `<code class="${selectedLanguage}">${templates[language] || "Select a language to start coding..."}</code>`;

    // Apply syntax highlighting
    Prism.highlightElement(codeEditor.querySelector("code"));

    // Update status bar
    outputConsole.textContent = `Switched to ${language}`;
    languageStatus.textContent = `Language: ${language}`;
}




// Basic functionalities (save, run, download)
function saveProject() {
    alert("Project saved successfully!");
}

function runCode() {
    const code = document.getElementById("codeEditor").textContent; // Use textContent to get raw code
    alert(`Running code...\n\n${code}`);
}


function downloadProject() {
    alert("Project downloaded.");
}

function goHome() {
    window.location.href = "dashboard.html";
}

function viewAssistanceBuddy() {
    window.location.href = "assistance-buddy.html";
}

// Get modal element
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

// Function to show modal with a message
function showModal(message) {
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";  // Show modal
}

// Close the modal when clicking the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Event listeners for Save, Run, and Download buttons
document.getElementById("saveButton").addEventListener("click", function() {
    showModal("Your file has been saved!");
});

document.getElementById("runButton").addEventListener("click", function() {
    showModal("Processing...");
});

document.getElementById("downloadButton").addEventListener("click", function() {
    showModal("Your file is being downloaded!");
});
