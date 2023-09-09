# What's New in Python 3.12

Python 3.12 is on the horizon, bringing with it a host of small yet significant updates. Let's take a closer look at some of the standout features and changes coming!

## Type System Improvements

### PEP 695 - Type Declaration Alias: `type`

Python's type declaration syntax has often presented challenges for developers, resulting in codebases that are either overly complex or lacking in type annotations. Enter `type`, an alias for type declarations.

```python
type Point = tuple[float, float]

# With generics:

type Point[T] = tuple[T, T]
```

### PEP 692 - More Precise `**kwargs` Typing with `TypedDict`

Another substantial improvement comes in the form of **PEP 692**, which finally provides type hints for keyword arguments.

```python
from typing import TypedDict, Unpack

class User(TypedDict):
    name: str
    age: int

def foo(**kwargs: Unpack[User]):
    # Magic happens here
```

### PEP 698 - Override Decorator for Static Typing

Static type checking has also been enhanced with **PEP 698**. You can now use `@override` with methods meant to replace methods from parent classes, allowing type checkers to detect mistakes where a method intended to override something in a base class does not do so.

```python
from typing import override

class Base:
    def get_color(self) -> str:
        return "blue"

class GoodChild(Base):
    @override  # Okay: overrides Base.get_color
    def get_color(self) -> str:
        return "yellow"

class BadChild(Base):
    @override  # Type checker error: does not override Base.get_color
    def get_colour(self) -> str:
        return "red"
```

## Concurrency Improvements

### PEP 684: A Per-Interpreter GIL

The first step in a series aimed at removing the GIL (Global Interpreter Lock) from the Python language, PEP 684 allows sub-interpreters to have their own Global Interpreter Lock (GIL). This enhancement enables Python programs to fully utilize multi-core CPUs, thereby improving parallelism and concurrency in Python applications.

### A Slew of Improvements to Async in Python

1. Enhanced performance for writing to sockets using `asyncio`.
2. Introduction of `asyncio.eager_task_factory()` and `asyncio.create_eager_task_factory()`.
3. `asyncio.wait()` and `asyncio.as_completed()` now accept generators yielding tasks.
4. Speed improvement in `asyncio.Task` creation by deferring expensive string formatting.
5. Removal of the `asynchat` and `asyncore` modules, consolidating everything within `asyncio`.

## Smaller Changes

### F-string Enhancements

- You can now use the same quotes inside f-strings
  - `f"hello world {",".join(list)}"`
- Nesting f-strings is now possible.
  - `f"{f'{"Hello world!"}'}"`

### Faster Comprehension

List, dictionary, and set comprehensions will no longer create a single-use function object, potentially improving performance by up to 2x in certain scenarios.

### Clearer Errors

Common mistakes, such as improper syntax for importing packages or misspelling package names, will now result in clearer error messages when executed. Nevertheless, these errors can already be caught using a Python linter like Pylance.
