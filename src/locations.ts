export interface Locations {
    [key: string]: (...args: any[]) => string
}

export const locations: Locations = {
    root: () => '/',
    home: () => '/home',
    market: () => '/market',
    leaderBoard: () => '/leader-board',
    signIn: () => '/sign-in',
    inventory: () => '/inventory',
    item: () => '/item',
    community: () => '/community',
    account: () => '/account',
    getSpay: () => '/getspay',
    proposals: () => '/proposals',
    faucet: () => '/faucet',
    proposal: (proposalId: string = ':proposalId') => `/proposal/${proposalId}`,
    // nft: (
    //   contractAddress: string = ':contractAddress',
    //   tokenId: string = ':tokenId'
    // ) => `/contracts/${contractAddress}/tokens/${tokenId}`,
    // asset: (
    //   optionId: string = ':optionId',
    // ) => `/asset/${optionId}`,
    // ownerasset: (
    //   optionId: string = ':optionId',
    // ) => `/ownerasset/${optionId}`,
}
