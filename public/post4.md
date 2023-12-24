# The Hidden Intricacies of 'Hello World'

The "Hello World!" program is the quintessential starting point for many developers. Python, a language known for its readability, has arguably the most straightforward implementation:

```python
print("Hello World")
```

However, beneath this simple one-liner are hidden layers of complexities and processes. Welcome to Python under the hood.

## Some Basics

To ensure we can follow along, let's assume we have the following:

1. Access to a computer (no duh), but specifically a POSIX-compliant one, with Mac OS or Linux.
1. Preferably use CPython as your Python implementation
   - Find your Python Implementation using this nifty bash command
   ```python
   python -c "import platform; print(platform.python_implementation())"
   ```
1. A python file containing the following:
   ```python testing.py
   code = "print('Hello World')"
   ```

- Placing our codeblock inside of a string will make it easier to pass it into analytic functions we will use later down the line.

![Source Code -> Python Interpreter -> Machine Code -> Execution](/py_interpreter.png)

The image above provides a high-level overview of how Python code is executed. Our source code is passed into the Python interpreter to be compiled into an intermediate representation called Python bytecode. The Python virtual machine handles the execution of this Python bytecode.

## The Compilation Phase

The source file must first go through a series of steps dictacted by the Python Interpreter, summed in the image above.

### Lexical Analysis and Tokenization

The journey begins with the Python interpreter analyzing the source code through lexical analysis and tokenization. This step involves breaking down the code into a sequence of tokens, the smallest units in the Python language. We can see the tokens generated for our python code by importing the tokenize library and using the tokenize function as such:

```python
import tokenize
from io import BytesIO

code = "print('Hello World!')"

for token in tokenize.tokenize(BytesIO(code.encode("utf-8")).readline):
    print(token)

# Expected output
TokenInfo(type=67 (ENCODING), string='utf-8', start=(0, 0), end=(0, 0), line='')
TokenInfo(type=1 (NAME), string='print', start=(1, 0), end=(1, 5), line="print('Hello World!')")
TokenInfo(type=55 (OP), string='(', start=(1, 5), end=(1, 6), line="print('Hello World!')")
TokenInfo(type=3 (STRING), string="'Hello World!'", start=(1, 6), end=(1, 20), line="print('Hello World!')")
TokenInfo(type=55 (OP), string=')', start=(1, 20), end=(1, 21), line="print('Hello World!')")
TokenInfo(type=4 (NEWLINE), string='', start=(1, 21), end=(1, 22), line="print('Hello World!')")
TokenInfo(type=0 (ENDMARKER), string='', start=(2, 0), end=(2, 0), line='')
```

Let's break this output down a litte:

- Type identifies the category the tokens belong to. For example, the NAME token can be used to represent identifiers of variables, functions, and classes. In this case,
  they represent the global function `print`.
- String represents the actual value of the token. In a token with type "STRING", this represents the actual value of the string literal.
- The start and end represent the positioning of the token value in the source code in tuple form (line, column). Interestingly, line is 1-indexed, while column is 0-indexed.
- The line is simply the value of the line the token was found.

Understanding the different tokens present in the Python language is far beyond the scope of this article and something I cannot do better than [Aaron Meurer](https://www.asmeurer.com/brown-water-python/tokens.html).

### Abstract Syntax Tree (AST) Generation

Next, the interpreter generates an Abstract Syntax Tree (AST) from the tokens. The AST serves as a hierarchical representation of the syntactic structure of the source
code. We can visualize this hierarchical representation by using the "ast" module in python.

```python
import ast

code = "print('Hello World!')"

parsed_ast = ast.parse(code)
print(ast.dump(parsed_ast, annotate_fields=True, indent=4))

# Example Output:
Module(
    body=[
        Expr(
            value=Call(
                func=Name(id='print', ctx=Load()),
                args=[
                    Constant(value='Hello World!')],
                keywords=[]))],
    type_ignores=[])
```

Let's break this AST down a bit:

- Module is the top-level node, representing the entire Python script. This doesn't have to be `Module` and can be other things like `ClassDef`, depending on the structure of the Python code.
- Body represents the content inside the module. In this case, the body is a single function call of `print` with the argument "Hello World!" and no kwargs (keywords) passed into it.
- type_ignores represent comments in the Python code requesting any static type checkers (like mypy) to ignore specific lines/classes/functions from being type checked.

I'm oversimplifying tons of concepts here, and I haven't even gotten into things like control flow. If you are interested in AST's, I highly recommend taking a look at [Thomas Kluyver's](https://greentreesnakes.readthedocs.io/en/latest/) documentation.
The idea of generating an AST is not specific to Python, or even specific for compilation steps. Higher level languages like JavaScript, Ruby, and Java generally implement ASTs for code analysis and transformation.

### Bytecode Compilation

The AST is then translated into bytecode, a lower-level, platform-independent representation of the code. This bytecode is what the Python Virtual Machine (PVM) executes. Now, we can actually see the creation of this
bytecode when executing a Python module. If you've ever seen a **pycache** folder or a file ending with .pyc, that's what that is. The pyc files are used for faster loading of modules on subsequent imports, as well
as speeding up the subsequent executions of the Python program. However, these files are not actually human readable. To attain the human-readable representation of the bytecode, we can leverage the dis module.

```python
import dis

code = "print('Hello World!')"
dis.dis(code)
```

This should output something that looks like this:

```txt
  0           0 RESUME                   0

  1           2 PUSH_NULL
              4 LOAD_NAME                0 (print)
              6 LOAD_CONST               0 ('Hello World!')
              8 CALL                     1
             16 RETURN_VALUE
```

The code is starting to become a lot less readable (especially for someone new to computers and programming like me), but let's take a second to understand this output:

- Each printed line represents a bytecode instruction, and the columns can be labeled as such: bytecode offset, opcodes, and arguments.
- Bytecode offset (left-most column represented by 0 and 1) is the location of the specific bytecode instruction in the bytecode sequence. They will start with 0 and increment from there.
- Opcode (middle column) is short for operation code. It is a specific operation or instruction that must be executed.
- Arguments (right-most column) are the values passed into instruction.

Let's also spend some time understanding some of these instructions.

- RESUME tells the Python VM to resume execution of the bytecode at this spot. This instruction is commonly seen at the top of bytecode instructions as well as in coroutines, so the Python VM can resume execution at the specified point.
- PUSH_NULL is a new instruction (added in Python 3.11) that's used to push a C NULL to the bottom of the Python stack and its presence is necessary for many function calls. I would love for someone to explain why this instruction is necessary for function calls!
- LOAD_NAME and LOAD_CONST both add a specified value to the stack, with LOAD_NAME being used for values like variables, functions, and classes and LOAD_CONST being used for strings, numbers, booleans, and None.
- CALL calls the function at the top of the stack and RETURN_VALUE returns the top of the stack as the function value.

## Execution Phase

There are quite a few things that the Python VM needs to handle during the execution of this bytecode. We will take a look at a few of these like garbage collection, type checking, and I/O operations.

### Dynamic Typing:

Python is dynamically typed, meaning that the type of a variable is determined at runtime. This provides flexibility, but requires the interpreter to keep track of the type of each variable as the program executes.

### Object Allocation and Deallocation:

The interpreter dynamically allocates memory for objects at creation and uses a reference counting mechanism to track the number of references to an object. When the reference counter hits 0, the memory associated with the object is deallocated and marked for reuse.

### System Calls and Operating System Interaction:

During execution, Python interacts with the operating system for various tasks such as network calls, writing to standard out, and reading input from the user.

In our case, the print() function in Python will undergo a process similar to this during the execution phase:

1. print() function will write the necessary data to an internal buffer.
2. The buffered data will then be written to a file descriptor associated with standard out using the write() system call.
3. write() will interact with the terminal subsystem to display the data.

Below is a diagram generated by ChatGPT to help illustrate this process:

```bash

+---------------------+             +------------------------+             +-----------------------+
|      print()        |             |       write()          |             |  Terminal subsystem   |
|    function in      |             |    system call         |             |                       |
|      Python         |             |                        |             |                       |
+---------------------+             +------------------------+             +-----------------------+
           |                                     |                                     |
           v                                     v                                     v
+---------------------+             +------------------------+             +-----------------------+
|   Internal Buffer   |             |    File Descriptor     |             |     Terminal Output   |
|                     |             |                        |             |                       |
|       Data          |   ------>   |        Buffered        |   ------>   |        Display        |
|                     |             |        Data            |             |        on Screen      |
+---------------------+             +------------------------+             +-----------------------+

```

## Conclusion

What initially appears as a simple "Hello, World!" program in Python unfolds into a multi-layered journey involving lexical analysis,
AST generation, bytecode compilation, and dynamic execution on the Python Virtual Machine. Understanding these intricacies not only enhances
our appreciation for the Python language but also equips developers with insights into the mechanisms that power their code.
