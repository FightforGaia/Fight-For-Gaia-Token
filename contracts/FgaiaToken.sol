pragma solidity ^0.4.2;


contract FgaiaToken {
    //Constructor
    //Set the total number of tokens
    //read the total number of tokens
    uint256 public totalSupply;
    
    function FgaiaToken() public {
        totalSupply = 1000000000;

    }
}