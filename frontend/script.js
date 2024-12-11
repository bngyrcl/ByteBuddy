// Function to show the lesson overview when a course is selected
function showLesson(lessonId) {
    let lessonContent = document.getElementById("lesson-content");

    const lessons = {
        intro: {
            title: "Introduction to Python",
            content: `
                <h3>What is Python?</h3>
                <p>Python is a high-level, interpreted programming language created by <strong>Guido van Rossum</strong> and first released in <strong>1991</strong>. It was designed to be easy to understand and fun to use, making it an excellent choice for both beginner and advanced programmers. Python's syntax is straightforward, and it emphasizes readability, which makes it a great language to start learning programming.</p>
                <p>Over the years, Python has become one of the most widely used programming languages in the world. Its versatility allows it to be used in many areas, such as web development, data analysis, artificial intelligence, machine learning, automation, and more. Python is open-source, meaning it’s free to use and has an active community of developers who contribute to its continuous improvement.</p>
                
                <h3>Why Should You Learn Python?</h3>
                <p><strong>1. Simple and Readable Syntax</strong><br>Python is often praised for its clean and easy-to-understand syntax. Unlike many programming languages that can be difficult for beginners, Python allows developers to write code that is easy to read and maintain.</p>
                <p><strong>2. Versatility</strong><br>Python is a versatile language that can be used in a wide range of applications like Web Development, Data Science, Machine Learning, Game Development, and more.</p>
                <p><strong>3. Large and Active Community</strong><br>Python has one of the largest and most active programming communities in the world. Whether you’re seeking help, tools, libraries, or frameworks, the Python community is always ready to assist.</p>
                <p><strong>4. High Demand in the Job Market</strong><br>The demand for Python developers continues to grow in various industries including finance, healthcare, and technology.</p>
                
                <h3>Key Features of Python</h3>
                <p><strong>1. Easy to Learn and Use</strong><br>Python’s syntax is designed to be simple, making it a great choice for beginners. Its readability also helps in writing and maintaining clean, organized code.</p>
                <p><strong>2. Interpreted Language</strong><br>Python is interpreted, which means you can write and run code immediately without the need for compilation, making development faster.</p>
                <p><strong>3. Object-Oriented Programming (OOP) Support</strong><br>Python supports object-oriented programming, allowing for organized and reusable code.</p>
                <p><strong>4. Extensive Standard Library</strong><br>Python comes with a large standard library that allows you to perform tasks like file handling, web requests, and data analysis without needing to install extra packages.</p>
                
                <h3>Getting Started with Python</h3>
                <p>To start using Python, you need to:</p>
                <ul>
                    <li><strong>Install Python:</strong> Download it from the official <a href="https://www.python.org/" target="_blank">Python website</a>.</li>
                    <li><strong>Set Up Your Development Environment:</strong> Use an IDE like PyCharm or Visual Studio Code for writing and testing your Python code.</li>
                    <li><strong>Write Your First Program:</strong> Start with the classic "Hello, World!" program:</li>
                </ul>
                <pre><code>print("Hello, World!")</code></pre>
                
                <h3>Conclusion</h3>
                <p>Python is an excellent choice for both beginner and experienced developers. Its easy-to-read syntax, versatility, and extensive libraries make it a go-to language for a variety of applications. Start learning Python today, and you’ll be well on your way to building powerful applications, automating tasks, and analyzing data.</p>
            `
        },
        'javascript': {
            title: "Introduction to JavaScript",
            content: `
                <h3>What is JavaScript?</h3>
                <p>JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It was initially created by <strong>Brendan Eich</strong> in <strong>1995</strong> and has since become a dominant language in web development.</p>
                <p>JavaScript allows you to implement complex features on web pages. It enables interactive elements like buttons, animations, and dynamic content updates without needing to reload the page.</p>
                
                <h3>Why Should You Learn JavaScript?</h3>
                <p><strong>1. Web Development Dominance</strong><br>JavaScript is essential for front-end web development and works seamlessly with HTML and CSS to build interactive websites.</p>
                <p><strong>2. Versatility</strong><br>JavaScript is used not only for client-side scripting but also for server-side applications through environments like Node.js.</p>
                <p><strong>3. Large Ecosystem</strong><br>With frameworks like React, Angular, and Vue.js, JavaScript developers have access to powerful tools for building complex applications.</p>
                
                <h3>Key Features of JavaScript</h3>
                <p><strong>1. Event-Driven</strong><br>JavaScript is event-driven, meaning it reacts to user interactions such as clicks, mouse movements, or keyboard input.</p>
                <p><strong>2. Dynamic Typing</strong><br>Variables in JavaScript do not require a type to be declared, making the code flexible and faster to write.</p>
                <p><strong>3. Asynchronous Programming</strong><br>JavaScript supports asynchronous operations through callbacks, promises, and async/await, making it ideal for handling tasks like API requests.</p>
                
                <h3>Getting Started with JavaScript</h3>
                <p>To start using JavaScript, you need to:</p>
                <ul>
                    <li><strong>Install a text editor:</strong> Use editors like Visual Studio Code or Sublime Text.</li>
                    <li><strong>Write Your First Program:</strong> Add a simple script in your HTML file:</li>
                </ul>
                <pre><code>&lt;script&gt;
                    console.log("Hello, JavaScript!");
                &lt;/script&gt;</code></pre>
                
                <h3>Conclusion</h3>
                <p>JavaScript is essential for building interactive websites and dynamic web applications. It has an extensive ecosystem, active community, and widespread adoption across the development world.</p>
            `
        },
        java: {
            title: "Introduction to Java",
            content: `
                <h3>What is Java?</h3>
                <p>Java is a class-based, object-oriented programming language designed to have fewer implementation dependencies. Initially released by <strong>Sun Microsystems</strong> in <strong>1995</strong>, it has become one of the most popular programming languages in the world.</p>
                
                <h3>Why Should You Learn Java?</h3>
                <p><strong>1. Platform Independence</strong><br>Java’s “Write Once, Run Anywhere” philosophy means Java programs can run on any platform that has a Java Virtual Machine (JVM), which makes it highly portable.</p>
                <p><strong>2. Strong Community and Ecosystem</strong><br>Java has a vast ecosystem, including libraries, frameworks (like Spring), and tools that help build scalable and high-performance applications.</p>
                
                <h3>Key Features of Java</h3>
                <p><strong>1. Object-Oriented</strong><br>Java follows object-oriented principles, making it easier to build modular, maintainable, and reusable code.</p>
                <p><strong>2. Rich API</strong><br>Java’s extensive standard library provides APIs for networking, I/O, data structures, and more.</p>
                
                <h3>Getting Started with Java</h3>
                <p>To start using Java, you need to:</p>
                <ul>
                    <li><strong>Install JDK:</strong> Download the Java Development Kit from the <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Oracle website</a>.</li>
                    <li><strong>Write Your First Program:</strong> Create a simple Hello World application:</li>
                </ul>
                <pre><code>public class HelloWorld {
                    public static void main(String[] args) {
                        System.out.println("Hello, Java!");
                    }
                }</code></pre>
                
                <h3>Conclusion</h3>
                <p>Java is a powerful, flexible, and widely-used programming language. It remains popular for building large-scale applications, Android apps, and enterprise-level solutions.</p>
            `
        },
        c: {
            title: "Introduction to C",
            content: `
                <h3>What is C?</h3>
                <p>C is a general-purpose, procedural programming language created by <strong>Dennis Ritchie</strong> in <strong>1972</strong>. It is one of the oldest and most widely used programming languages, especially in system programming.</p>
                
                <h3>Why Should You Learn C?</h3>
                <p><strong>1. Foundation for Other Languages</strong><br>C is the foundation for many modern programming languages, including C++, Java, and Python.</p>
                <p><strong>2. Efficient and Fast</strong><br>C is known for its performance and efficiency, making it suitable for embedded systems, operating systems, and real-time applications.</p>
                
                <h3>Key Features of C</h3>
                <p><strong>1. Low-Level Access</strong><br>C provides low-level access to memory using pointers, making it ideal for writing system-level software.</p>
                <p><strong>2. Portability</strong><br>Programs written in C can be compiled and run on different platforms with minimal modifications.</p>
                
                <h3>Getting Started with C</h3>
                <p>To start using C, you need to:</p>
                <ul>
                    <li><strong>Install a C compiler:</strong> Download and install GCC or MinGW for compiling your C code.</li>
                    <li><strong>Write Your First Program:</strong> Create a simple Hello World program:</li>
                </ul>
                <pre><code>#include <stdio.h>
                int main() {
                    printf("Hello, C!\n");
                    return 0;
                }</code></pre>
                
                <h3>Conclusion</h3>
                <p>C is a powerful, efficient language that is widely used in system programming. Understanding C helps build a strong foundation for learning other programming languages.</p>
            `
        },
        cpp: {
            title: "Introduction to C++",
            content: `
                <h3>What is C++?</h3>
                <p>C++ is an object-oriented programming language created by <strong>Bjarne Stroustrup</strong> in <strong>1979</strong>. It is an extension of the C language and supports both procedural and object-oriented programming.</p>
                
                <h3>Why Should You Learn C++?</h3>
                <p><strong>1. Object-Oriented Programming</strong><br>C++ supports OOP principles like inheritance, polymorphism, and encapsulation, making it easier to manage and scale large software projects.</p>
                <p><strong>2. High Performance</strong><br>C++ is known for its high performance and is commonly used for game development, real-time systems, and performance-critical applications.</p>
                
                <h3>Key Features of C++</h3>
                <p><strong>1. Object-Oriented</strong><br>C++ supports classes and objects, making it easier to organize code and reuse components.</p>
                <p><strong>2. Low-Level Manipulation</strong><br>Like C, C++ allows direct memory manipulation using pointers.</p>
                
                <h3>Getting Started with C++</h3>
                <p>To start using C++, you need to:</p>
                <ul>
                    <li><strong>Install a C++ compiler:</strong> Use GCC or Microsoft Visual Studio for compiling your C++ code.</li>
                    <li><strong>Write Your First Program:</strong> Create a simple Hello World program:</li>
                </ul>
                <pre><code>#include <iostream>
                int main() {
                    std::cout << "Hello, C++!" << std::endl;
                    return 0;
                }</code></pre>
                
                <h3>Conclusion</h3>
                <p>C++ is a powerful language for building high-performance applications and mastering it will open doors to advanced programming fields like game development and system programming.</p>
            `
        },
        html: {
            title: "Introduction to HTML",
            content: `
                <h3>What is HTML?</h3>
                <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It was created by <strong>Tim Berners-Lee</strong> in <strong>1991</strong> and is the backbone of web development.</p>
                
                <h3>Why Should You Learn HTML?</h3>
                <p><strong>1. Foundation of Web Development</strong><br>HTML is the fundamental building block for creating websites. It's the first thing you’ll need to learn as a web developer.</p>
                <p><strong>2. Easy to Learn</strong><br>HTML is relatively simple to learn, and you can start building web pages right away with basic knowledge.</p>
                
                <h3>Key Features of HTML</h3>
                <p><strong>1. Markup Language</strong><br>HTML is a markup language, meaning it structures the content and tells the browser how to display it.</p>
                <p><strong>2. Tags</strong><br>HTML uses tags to define elements like headings, paragraphs, images, links, etc.</p>
                
                <h3>Getting Started with HTML</h3>
                <p>To start using HTML, you need to:</p>
                <ul>
                    <li><strong>Install a text editor:</strong> Use editors like Visual Studio Code or Sublime Text.</li>
                    <li><strong>Write Your First Program:</strong> Create a simple HTML document:</li>
                </ul>
                <pre><code>&lt;!DOCTYPE html&gt;
                &lt;html&gt;
                    &lt;head&gt;
                        &lt;title&gt;Hello, HTML!&lt;/title&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                        &lt;h1&gt;Hello, World!&lt;/h1&gt;
                    &lt;/body&gt;
                &lt;/html&gt;</code></pre>
                
                <h3>Conclusion</h3>
                <p>HTML is essential for building web pages, and it's easy to learn. Mastering it is the first step in becoming a proficient web developer.</p>
            `
        },
        php: {
            title: "Introduction to PHP",
            content: `
                <h3>What is PHP?</h3>
                <p>PHP (Hypertext Preprocessor) is a popular general-purpose scripting language that is especially suited to web development. It was created by <strong>Rasmus Lerdorf</strong> in <strong>1993</strong>.</p>
                
                <h3>Why Should You Learn PHP?</h3>
                <p><strong>1. Server-Side Scripting</strong><br>PHP is used to write dynamic, server-side scripts that can interact with databases and generate HTML content.</p>
                <p><strong>2. Open-Source</strong><br>PHP is free to use and has an active community of developers who contribute to its ongoing improvement.</p>
                
                <h3>Key Features of PHP</h3>
                <p><strong>1. Server-Side Language</strong><br>PHP runs on the server and generates dynamic content based on user requests.</p>
                <p><strong>2. Database Integration</strong><br>PHP can easily connect to databases like MySQL, making it an excellent choice for building web applications.</p>
                
                <h3>Getting Started with PHP</h3>
                <p>To start using PHP, you need to:</p>
                <ul>
                    <li><strong>Install a server:</strong> Use XAMPP or WAMP to set up a local server environment.</li>
                    <li><strong>Write Your First Program:</strong> Create a simple PHP script:</li>
                </ul>
                <pre><code>&lt;?php
                echo "Hello, PHP!";
                ?&gt;</code></pre>
                
                <h3>Conclusion</h3>
                <p>PHP is a powerful server-side scripting language for building dynamic websites. It is widely used and has extensive support for database management.</p>
            `
        },
        mysql: {
            title: "Introduction to MySQL",
            content: `
                <h3>What is MySQL?</h3>
                <p>MySQL is an open-source relational database management system (RDBMS) based on SQL (Structured Query Language). It was originally developed by <strong>MySQL AB</strong> and is now owned by Oracle Corporation.</p>
                
                <h3>Why Should You Learn MySQL?</h3>
                <p><strong>1. Widely Used</strong><br>MySQL is one of the most popular RDBMS used in a variety of applications from websites to large-scale enterprise solutions.</p>
                <p><strong>2. Fast and Reliable</strong><br>MySQL is known for its speed and reliability, making it a great choice for applications that require quick data retrieval.</p>
                
                <h3>Key Features of MySQL</h3>
                <p><strong>1. SQL-Based</strong><br>MySQL uses SQL to manage and manipulate data, making it easy to learn if you are familiar with SQL syntax.</p>
                <p><strong>2. Scalable</strong><br>MySQL can handle large amounts of data and can be scaled to meet the needs of growing applications.</p>
                
                <h3>Getting Started with MySQL</h3>
                <p>To start using MySQL, you need to:</p>
                <ul>
                    <li><strong>Install MySQL Server:</strong> Download and install MySQL from the official <a href="https://dev.mysql.com/downloads/" target="_blank">MySQL website</a>.</li>
                    <li><strong>Write Your First Query:</strong> Start by connecting to the MySQL server and creating a database:</li>
                </ul>
                <pre><code>CREATE DATABASE test_db;
                USE test_db;
                CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));
                INSERT INTO users (id, name) VALUES (1, 'John Doe');
                SELECT * FROM users;</code></pre>
                
                <h3>Conclusion</h3>
                <p>MySQL is a powerful and widely-used database system, and learning it will help you manage and interact with data efficiently in web applications.</p>
            `
        }
    };

    // Display the corresponding lesson
    if (lessons[lessonId]) {
        lessonContent.innerHTML = `
            <h2>${lessons[lessonId].title}</h2>
            ${lessons[lessonId].content}
        `;
    }
}
