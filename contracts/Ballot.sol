// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Ballot {
    struct Voter {
        address voter;
        uint256 weight;
        bool voted;
    }

    struct Proposal {
        uint256 id;
        string name;
        uint256 voteCount;
        bool accepted;
    }

    address public chairPerson;
    mapping(address => Voter) public voters;
    mapping(uint256 => Proposal) public proposals;
}
