// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

contract Ballot {
    struct Voter {
        address voter;
        uint256 weight;
        bool voted;
        uint256 vote;
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

    modifier onlyChairPerson() {
        require(msg.sender == chairPerson);
        _;
    }

    function giveRightToVote(address _voter) external onlyChairPerson {
        require(!voters[_voter].voted, "User already voted");
        require(voters[_voter].weight == 0);

        voters[_voter].weight = 1;
    }

    modifier canVote() {
        require(!voters[msg.sender].voted, "User already voted");
        require(
            voters[msg.sender].weight > 0,
            "User does not have right to vote"
        );
        _;
    }

    function delegateVote(address to) external canVote {
        Voter storage delegate = voters[to];
        Voter storage voter = voters[msg.sender];

        require(to != msg.sender, "You cannot delegate to yourself");

        voter.weight = 0;

        if (delegate.voted) proposals[delegate.vote].voteCount += voter.weight;
        else delegate.weight += voter.weight;
    }
}
