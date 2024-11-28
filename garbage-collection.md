Memory Leaks

    1. Global Variables (Even when not in use the memory will still be allocated)
    2. Addeventlisteners( If we have not removed then still be occupying memory)
    3. Timers ( settimeout, setinterval)
    4. Closures
    5. Non-properly detached DOM nodes

Optimization

    1. Minimise object creation
    2. Use efficient data structures
    3. Profile and monitor memory usage
    4. Optimise loops and recursions
    5. Use lazy loading
    6. Avoid memory-intensive operations

GARBAGE COLLECTING METHODS

    1. Reference counting (counts the number of references each object has and if count = 0 then it will be garbage collected)
    2. Mark and Sweep ( phase-1 marking all the reachable objects, phase-2 sweeping unreachable objects)
    3. Generational GC (young generation, old generation)
