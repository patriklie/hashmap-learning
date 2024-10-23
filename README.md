# HashMap Implementation in JavaScript

## Description
This project is a simple implementation of a **HashMap** in JavaScript that uses **LinkedList** to handle collisions. This project illustrates how a HashMap can use separate chaining (by utilizing a linked list) to handle cases where two or more keys produce the same hash value.

## File Structure
- `HashMap.mjs`: Contains the implementation of the HashMap class, including methods like `hash`, `assign`, and `get`.
- `LinkedList.mjs`: Implements a simple LinkedList structure used in the HashMap to handle collisions.
- `Node.mjs`: Represents a node in a LinkedList, holding data and pointing to the next node in the list.

## Functions in HashMap

### `hash(key)`
This function generates a hash value based on a given key. The hash value is then constrained to the size of the HashMap using modulus (`%`) to ensure the index is within the range of the array that constitutes the hashmap.

### `assign(key, value)`
Adds a value to the HashMap using a key. If there is already a value at the generated hash index, it is added to a LinkedList.

### `get(key)`
Returns the value associated with a given key. If no value is found for the specified key, `null` is returned.

## Functions in LinkedList

### `addToHead(data)`
Adds a node at the beginning of the LinkedList.

### `addToTail(data)`
Adds a node at the end of the LinkedList.

### `findNodeByKey(key)`
Finds a node in the LinkedList based on the key.

### `removeHead()`
Removes the head (first element) from the list.

### `removeTail()`
Removes the tail (last element) from the list.

## Example Usage

```javascript
import HashMap from "./HashMap.mjs";

const hashMap = new HashMap(10);

// Add some keys and values
hashMap.assign('name', 'Patrik');
hashMap.assign('age', 36);

// Retrieve values based on the keys
console.log(hashMap.get('name')); // Patrik
console.log(hashMap.get('age')); // 36

// Retrieve a value that does not exist
console.log(hashMap.get('job')); // null
