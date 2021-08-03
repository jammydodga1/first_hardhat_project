//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract qprWinsThisSeason {
  uint public wins;

  constructor(uint256 _wins) {
    wins = _wins;
  }

  function modifyWins(uint256 _wins) public {
    wins = _wins;
  }
}
