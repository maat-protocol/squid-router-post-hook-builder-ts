export const gatewayAbi = [
	{
		inputs: [
			{ internalType: "address", name: "_owner", type: "address" },
			{ internalType: "address", name: "_commander", type: "address" },
			{ internalType: "address", name: "_watcher", type: "address" },
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [{ internalType: "address", name: "target", type: "address" }],
		name: "AddressEmptyCode",
		type: "error",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "AddressInsufficientBalance",
		type: "error",
	},
	{
		inputs: [{ internalType: "address", name: "addr", type: "address" }],
		name: "AddressIsNotATokenVault",
		type: "error",
	},
	{ inputs: [], name: "FailedInnerCall", type: "error" },
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{ inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
	{
		inputs: [{ internalType: "address", name: "token", type: "address" }],
		name: "SafeERC20FailedOperation",
		type: "error",
	},
	{
		inputs: [{ internalType: "address", name: "token", type: "address" }],
		name: "VaultDoesNotExist",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "txId",
				type: "bytes32",
			},
		],
		name: "CancelWithdraw",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "enum IGateway.DepositFlag",
				name: "flag",
				type: "uint8",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "txId",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "receiver",
				type: "address",
			},
		],
		name: "Deposit",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "txId",
				type: "bytes32",
			},
		],
		name: "RebalanceRequest",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "txId",
				type: "bytes32",
			},
		],
		name: "RebalanceRequestFulfillment",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "requestId",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint32",
				name: "dstEid",
				type: "uint32",
			},
		],
		name: "WithdrawRequest",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "txId",
				type: "bytes32",
			},
		],
		name: "WithdrawRequestFulfillment",
		type: "event",
	},
	{
		inputs: [],
		name: "commander",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "token", type: "address" }],
		name: "deleteVault",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
			{ internalType: "address", name: "receiver", type: "address" },
			{ internalType: "uint32", name: "dstEid", type: "uint32" },
		],
		name: "deposit",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
			{
				internalType: "enum IGateway.DepositFlag",
				name: "flag",
				type: "uint8",
			},
		],
		name: "depositFromStargateAdapter",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum IGateway.ActionType[]",
				name: "actionType",
				type: "uint8[]",
			},
			{
				components: [
					{ internalType: "uint32", name: "dstEid", type: "uint32" },
					{ internalType: "bytes32", name: "strategyId", type: "bytes32" },
					{ internalType: "uint256", name: "amount", type: "uint256" },
					{ internalType: "bytes32", name: "txId", type: "bytes32" },
					{
						internalType: "enum IGateway.DepositFlag",
						name: "flag",
						type: "uint8",
					},
				],
				internalType: "struct IGateway.ActionInput[]",
				name: "inputs",
				type: "tuple[]",
			},
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "execute",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllVaultsAddresses",
		outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAssets",
		outputs: [
			{ internalType: "bytes32[]", name: "strategyIds", type: "bytes32[]" },
			{ internalType: "uint256[]", name: "assets", type: "uint256[]" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint32", name: "_dstEid", type: "uint32" },
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "getSupportedDstEidToWithdraw",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "sender", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
			{
				internalType: "enum IGateway.RequestType",
				name: "_type",
				type: "uint8",
			},
		],
		name: "getTxId",
		outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "getUserByWithdrawRequestId",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "token", type: "address" }],
		name: "getVault",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "getWithdrawRequest",
		outputs: [
			{
				components: [
					{ internalType: "address", name: "receiver", type: "address" },
					{ internalType: "address", name: "token", type: "address" },
					{ internalType: "uint32", name: "dstEid", type: "uint32" },
					{ internalType: "uint32", name: "creationTime", type: "uint32" },
					{ internalType: "uint128", name: "shares", type: "uint128" },
					{ internalType: "uint128", name: "amountOut", type: "uint128" },
				],
				internalType: "struct IGateway.WithdrawRequestInfo",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "rebalanceRequests",
		outputs: [
			{ internalType: "uint32", name: "lastRebalanceTime", type: "uint32" },
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_token", type: "address" }],
		name: "requestRebalance",
		outputs: [{ internalType: "bytes32", name: "txId", type: "bytes32" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_token", type: "address" },
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
		],
		name: "requestRebalanceFulfillment",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "shares", type: "uint256" },
			{ internalType: "uint32", name: "dstEid", type: "uint32" },
			{ internalType: "address", name: "receiver", type: "address" },
		],
		name: "requestWithdraw",
		outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "bytes32", name: "txId", type: "bytes32" },
		],
		name: "requestWithdrawFulfillment",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_commander", type: "address" }],
		name: "setCommander",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_stargateAdapter", type: "address" },
		],
		name: "setStargateAdapter",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "address", name: "vault", type: "address" },
		],
		name: "setVault",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_watcher", type: "address" }],
		name: "setWatcher",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "stargateAdapter",
		outputs: [
			{ internalType: "contract IStargateAdapter", name: "", type: "address" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "vaults",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "watcher",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
];
