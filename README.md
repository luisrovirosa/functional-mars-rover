# A functional Mars Rover Kata

## Motivation
In a [Software Craftsmanship Madrid meetup](http://www.meetup.com/madswcraft/events/172940132/) the kata proposed was Mars Rover Kata in a functional way.

## How to run install
With [nodeJS](http://nodejs.org/) installed.

	git clone https://github.com/luisrovirosa/functional-mars-rover.git
	cd functional-mars-rover
	npm install
## How to run
	node src/main.js <commands> [initial x]  [initial y] [facing]
Valid commands:

	F, B, R, L: See Rules below

Example:

	node src/main.js FFRFF 0 0 N
## How to run tests
	./node_modules/jasmine-node/bin/jasmine-node test --verbose --color

## Authors

1. [Luis Rovirosa Mairlot](http://twitter.com/luisrovirosa)
2. [Helder de Oliveira](http://twitter.com/HelderDOliveira)
3. Gustavo Romero


## Kata Requirements


### Rules for Mars Rover Kata.

Done:

 - Develop an API that moves a rover around on a grid.
 - You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
 - The rover receives a character array of commands.
 - Implement commands that move the rover forward/backward (F, B).
 - Implement commands that turn the rover left/right (L, R).
 
Not done:

 - Implement wrapping from one edge of the grid to another. (planets are spheres after all)
 - Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

### Functional way
Changes in state are strictly forbidden. This means you have to avoid changes in state and data such as:

        rover.x_position = rover.x_position + 1

Yes, this means you can't alter an object after it is created, you can't change a list after it is created...

You can use assignments as long as they are used just as a mere aliases.

### Examples: 

 - The rover is on a 100x100 grid at location (0, 0) and facing NORTH. The rover is given the commands "FFRFF" and should end up at (2, 2)

