// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "hardhat/console.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
contract DOutpeerDollars is ERC20, ERC20Burnable {
    address bridge;
    constructor(address _bridge) ERC20("DOutpeerDollars", "D-OPD") {
        bridge = _bridge;
    }
    modifier onlyBridge() {
        require(
            bridge == msg.sender,
            "DOutpeerDollars: only the bridge can trigger this method!"
        );
        _;
    }
    // @dev called from the bridge when tokens are locked on ETH side
    function mint(address _recipient, uint256 _amount)
        public
        virtual
        onlyBridge
    {
        _mint(_recipient, _amount);
        console.log("Tokens minted for %s", _recipient);
    }

    function burnFrom(address _account, uint256 _amount)
        public
        virtual
        override(ERC20Burnable)
        onlyBridge
    {
        super.burnFrom(_account, _amount);
        console.log("Tokens burned from %s", _account);
    }
}