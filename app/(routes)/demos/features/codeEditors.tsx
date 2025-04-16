import Code, { themes } from "#/components/code";

export default function CodeEditors() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {themes.map((theme, index) => (
        <Code
          key={index}
          theme={theme}
          tabs={[languages[index].name, { text: theme, color: "purple" }]}
          code={languages[index].snippet}
          lang={languages[index].key}
        />
      ))}
    </div>
  );
}

const languages = [
  {
    key: "python",
    name: "Python",
    snippet: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("World")',
  },
  {
    key: "cpp",
    name: "C++",
    snippet:
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
  },
  {
    key: "c",
    name: "C",
    snippet:
      '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  },
  {
    key: "java",
    name: "Java",
    snippet:
      'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  },
  {
    key: "csharp",
    name: "C#",
    snippet:
      'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
  },
  {
    key: "javascript",
    name: "JavaScript",
    snippet: 'function greet(name) {\n    console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
  },
  {
    key: "go",
    name: "Go",
    snippet: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
  },
  {
    key: "vb",
    name: "Visual Basic",
    snippet:
      'Module HelloWorld\n    Sub Main()\n        Console.WriteLine("Hello, World!")\n    End Sub\nEnd Module',
  },
  {
    key: "pascal",
    name: "Delphi/Object Pascal",
    snippet: "program HelloWorld;\nbegin\n  WriteLn('Hello, World!');\nend.",
  },
  {
    key: "sql",
    name: "SQL",
    snippet: "SELECT 'Hello, World!' AS Greeting;",
  },
  {
    key: "fortran-free-form",
    name: "Fortran",
    snippet: "program Hello\n  print *, 'Hello, World!'\nend program Hello",
  },
  {
    key: "php",
    name: "PHP",
    snippet: '<?php\n  echo "Hello, World!";\n?>',
  },
  {
    key: "r",
    name: "R",
    snippet: 'greet <- function(name) {\n  cat("Hello,", name, "!\\n")\n}\n\ngreet("World")',
  },
  {
    key: "ada",
    name: "Ada",
    snippet:
      'with Ada.Text_IO;\nprocedure Hello is\nbegin\n  Ada.Text_IO.Put_Line("Hello, World!");\nend Hello;',
  },
  {
    key: "matlab",
    name: "MATLAB",
    snippet: "function greet(name)\n    fprintf('Hello, %s!\\n', name);\nend\n\ngreet('World');",
  },
  {
    key: "asm",
    name: "Assembly",
    snippet:
      "; x86 NASM syntax\nsection .data\n    msg db 'Hello, World!',0Ah\nsection .text\n    global _start\n_start:\n    ; write system call",
  },
  {
    key: "rust",
    name: "Rust",
    snippet: 'fn main() {\n    println!("Hello, World!");\n}',
  },
  {
    key: "perl",
    name: "Perl",
    snippet: 'print "Hello, World!\\n";',
  },
  {
    key: "cobol",
    name: "COBOL",
    snippet:
      "IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\n    DISPLAY 'Hello, World!'.\n    STOP RUN.",
  },
  {
    key: "typescript",
    name: "TypeScript",
    snippet:
      'function greet(name: string): void {\n    console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
  },
  {
    key: "kotlin",
    name: "Kotlin",
    snippet: 'fun main() {\n    println("Hello, World!")\n}',
  },
  {
    key: "swift",
    name: "Swift",
    snippet: 'import Foundation\n\nprint("Hello, World!")',
  },
  {
    key: "ruby",
    name: "Ruby",
    snippet: 'def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("World")',
  },
  {
    key: "scala",
    name: "Scala",
    snippet:
      'object HelloWorld {\n  def main(args: Array[String]): Unit = {\n    println("Hello, World!")\n  }\n}',
  },
];
