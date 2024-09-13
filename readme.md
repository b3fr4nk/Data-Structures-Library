## Data Structures Library

An npm package to provide an easy way to use common data structures in your code.

## Currently implemented

Only Linked lists and stacks and queues are implemented right now

## How to use

### Install the npm package
``` npm i data-structures-library ```

### Using the Linked List module

#### Importing the code
``` import {LinkedList} from "../dist/bundle.esm.js"; ```

#### Creating a linked list
``` const linkedlist = new LinkedList() ```

#### Appending to the linked List
``` linkedlist.append(value) ```

#### Inserting to the linked list
``` linkedlist.insert(value, position) ```

#### Finding values in the linked list
``` linkedlist.find(value) ```

#### Convert the linked list into an easily readable string
``` linkedlist.stringify() ```

### How to use Queues

#### For how to use queues Check out the example CLI app