pragma solidity >=0.5.0;

interface IB2swapCallee {
    function b2swapCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
