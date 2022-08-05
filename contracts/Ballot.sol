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

    event LogVote(
        address indexed voter,
        uint256 indexed proposal,
        bool accepted
    );

    constructor(bytes32[] memory proposalNames) {
        chairPerson = msg.sender;

        for (uint256 i = 0; i < proposalNames.length; i++) {
            Proposal memory proposal = Proposal({
                id: i,
                name: string(abi.encodePacked(proposalNames[i])),
                voteCount: 0,
                accepted: false
            });

            proposals[i] = proposal;
        }
    }
}
