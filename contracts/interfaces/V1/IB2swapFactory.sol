pragma solidity >=0.5.0;

interface IB2swapFactory {
    function getExchange(address) external view returns (address);
}
