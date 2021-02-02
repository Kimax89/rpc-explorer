module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	demoSite: false,
	coin: "BCHC",

	listen:{
		port:5002
	},

	pages:{
		nodeStatus: true,
		rpcBrowser: false,
		rpcTerminal: false,
		mempool: true,
		fun: true,
		peers: true
	},

	// Edit "rpc" below to target your node.
	// You may delete this section if you wish to connect manually via the UI.

	rpc: {
		host:"127.0.0.1",
		port:10332,
		username:"rpc-username",
		password:"rpc-password"
	},

	rpcBlacklist:[
		"getblockchaininfo",
		"stop",
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"setban",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange"
	],

	// Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
	ipWhitelistForRpcCommands:/^(127\.0\.0\.1)?(\:\:1)?$/,

	donationAddresses:{
		coins:["BCHC"],
		
		"BCHC":{address:"1Kimax1hiVJozfDUtkuFU3xHXC3T3GEUiZ", urlPrefix:"clashic:"}
	},

	development: false,
};
