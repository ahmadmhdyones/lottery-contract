// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract Lottery {
	address public manager;
	address[] public players;

	function Lottery() public {
		manager = msg.sender;
	}

	function participate() public payable {
		require(msg.value > .01 ether);

		players.push(msg.sender);
	}

	function pickWinner() public restricted {
		uint256 index = random() % players.length;
		players[index].transfer(this.balance);
		reset();
	}

	function getPlayers() public view returns (address[]) {
		return players;
	}

	function random() private view returns (uint256) {
		return uint256(keccak256(block.difficulty, now, players));
	}

	function reset() private {
		players = new address[](0);
	}

	modifier restricted() {
		require(msg.sender == manager);
		_;
	}
}
