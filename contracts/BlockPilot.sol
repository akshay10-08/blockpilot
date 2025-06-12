// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BlockPilot {
    address public owner;
    mapping(address => string) public userCommands;

    event CommandExecuted(address indexed user, string command);

    constructor() {
        owner = msg.sender;
    }

    function storeCommand(string memory _command) public {
        userCommands[msg.sender] = _command;
        emit CommandExecuted(msg.sender, _command);
    }

    function getCommand(address user) public view returns (string memory) {
        return userCommands[user];
    }
}
