declare const _default: {
    abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    bytecode: string;
    linkReferences: {
        "contracts/libraries/NFTDescriptor.sol": {
            NFTDescriptor: {
                length: number;
                start: number;
            }[];
        };
    };
};
export default _default;
