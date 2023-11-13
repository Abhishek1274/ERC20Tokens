 //SPDX-License-Identifier: GPL-3.0
        
pragma solidity >=0.4.22 <0.9.0;

 import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Abhishek_Token is ERC20{
    uint public _totalSupply;

    
    constructor(uint256 tth) ERC20("Abhishek",'AK'){
        
        _totalSupply =tth;
         _mint(msg.sender, _totalSupply);
    }

    
    function transfer(address to, uint256 value) public override returns (bool) {
        address owner = _msgSender();
        uint value_tax=(value*5)/100;
        _transfer(owner, to, value-value_tax);
        _burn(msg.sender, value_tax);
        return true;
    }

    

    
}