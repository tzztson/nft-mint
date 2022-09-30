import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import { TabOption, Traits, TraitType } from './index';
import { enumToLabel } from '../utils/enum.util';
import { BigNumber } from 'ethers';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const {appName, networkUrl, chainId} = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

export const traitOptions: TabOption[] = Object.keys(TraitType).map(key => ({ label: enumToLabel(key), value: TraitType[key] }));

export const traits: Traits = {
  [TraitType.Accessories]: [
    { name: 'blank', rarity: 20 },
    { name: 'gun', rarity: 20 },
    { name: 'stick', rarity: 20 },
  ],
  [TraitType.Background]: [
    { name: 'blue', rarity: 20 },
    { name: 'brown', rarity: 20 },
    { name: 'cream', rarity: 20 },
    { name: 'gray', rarity: 20 },
    { name: 'green', rarity: 20 },
    { name: 'light blue', rarity: 20 },
    { name: 'light green', rarity: 20 },
    { name: 'orange', rarity: 20 },
  ],
  [TraitType.Clothes]: [
    { name: 'army clothes', rarity: 20 },
    { name: 'black shirt', rarity: 20 },
    { name: 'black suit', rarity: 20 },
    { name: 'blank', rarity: 20 },
    { name: 'blue shirt casino uniform', rarity: 20 },
    { name: 'blue shirt', rarity: 20 },
    { name: 'blue suit', rarity: 20 },
    { name: 'brown suit', rarity: 20 },
    { name: 'casino uniform', rarity: 20 },
    { name: 'detective uniform', rarity: 20 },
    { name: 'Firefighter', rarity: 20 },
    { name: 'hawaii', rarity: 20 },
    { name: 'maid uniform', rarity: 20 },
    { name: 'orchestra conductor', rarity: 20 },
    { name: 'police biker', rarity: 20 },
    { name: 'police chief', rarity: 20 },
    { name: 'police nypd', rarity: 20 },
    { name: 'purple shirt casino uniform', rarity: 20 },
    { name: 'red shirt casino uniform', rarity: 20 },
    { name: 'security A', rarity: 20 },
    { name: 'security B', rarity: 20 },
    { name: 'white scurity guard', rarity: 20 },
    { name: 'white shirt', rarity: 20 },
  ],
  [TraitType.Eye]: [
    { name: 'angry eyes', rarity: 20 },
    { name: 'closed eyes', rarity: 20 },
    { name: 'cynical eyes', rarity: 20 },
    { name: 'normal eyes', rarity: 20 },
    { name: 'sad eyes', rarity: 20 },
  ],
  [TraitType.FaceWear]: [
    { name: 'black glasses', rarity: 20 },
    { name: 'blank', rarity: 20 },
    { name: 'metal mask', rarity: 20 },
    { name: 'mustache', rarity: 20 },
    { name: 'red glasses', rarity: 20 },
    { name: 'white glasses', rarity: 20 },
  ],
  [TraitType.Footwear]: [
    { name: 'blank', rarity: 20 },
    { name: 'shoes', rarity: 20 },
    { name: 'slippers', rarity: 20 },
  ],
  [TraitType.Headwear]: [
    { name: 'blank', rarity: 20 },
    { name: 'guard hat', rarity: 20 },
    { name: 'police hat', rarity: 20 },
    { name: 'sheriff\'s hat', rarity: 20 },
    { name: 'sleeping hat', rarity: 20 },
    { name: 'tribal hat', rarity: 20 },
  ],
  [TraitType.Mouth]: [
    { name: 'beard', rarity: 20 },
    { name: 'eat bones', rarity: 20 },
    { name: 'eat carrot', rarity: 20 },
    { name: 'golden teeth', rarity: 20 },
    { name: 'normal mouth', rarity: 20 },
    { name: 'tom\'s mouth', rarity: 20 },
    { name: 'vampire teeth', rarity: 20 },
  ],
  [TraitType.Neck]: [
    { name: 'blank', rarity: 20 },
    { name: 'blue scraf', rarity: 20 },
    { name: 'collar', rarity: 20 },
    { name: 'red scarf fashion', rarity: 20 },
    { name: 'red scraf', rarity: 20 },
    { name: 'yellow scraf', rarity: 20 },
  ],
  [TraitType.Skin]: [
    { name: 'body on flames', rarity: 20 },
    { name: 'original', rarity: 20 },
    { name: 'robotic arm', rarity: 20 },
    { name: 'zombie', rarity: 20 },
  ],
};

export const purchaseSteps = [
  {
    image: '/assets/steps/metamask.gif',
    title: 'DOWNLOAD METAMASK',
    content: 'The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app.',
    label: 'METAMASK',
    link: 'https://metamask.io',
  },
  {
    image: '/assets/steps/ethereum.gif',
    title: 'ADD SOME ETH',
    content: 'You can purhcase Ethereum through your Metamask wallet using Wyre or send Ethereum from an exchange like Coinbase.',
    label: 'COINBASE',
    link: 'https://coinbase.com',
  },
  {
    image: '/assets/logo.svg',
    title: 'MINT A ARCHIE NEKO',
    content: 'Connect your Metamask to our website. Once connected, you will be able to mint your Archie Neko and approve the transaction.',
    label: 'MINT',
    link: '#mint',
    padding: 2,
  },
];

export const faqs = [
  {
    title: 'WHAT IS THE ARCHIE NEKO CLUB?',
    content: 'The ARCHIE NEKO CLUB is a collection of 5,000 Non Fungible Token going absolutely bonkers within the Ethereum blockchain.',
  },
  {
    title: 'HOW MUCH WILL IT COST TO MINT?',
    content: 'The price of the mint is 0.065ETH.',
  },
  {
    title: 'WHEN WILL MINING BE AVAILABLE?',
    content: 'The Archie Neko reveal occurs on May.',
  },
  {
    title: 'HOW MANY CAN WE MINT PER WALLET?',
    content: '10 Per Wallet. The amount of royalties was fixed at 7.5% to finance the NFT Club\'s projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests. The funds collected will benefit the holders. This percentage can decrease over time.',
  },
  {
    title: 'HOW CAN I USE MY NFT?',
    content: 'You will be able to use your NFT as an avatar in the metaverse.',
  },
  {
    title: 'WAHT IS THE METAVERSE?',
    content: 'The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future pahses in the NFT club\'s roadmap will allow you to join this Metaverse using the assets you own.',
  },
];

// export const NFT_CONTRACT_ADDRESS = '0xd8a984a2d4887721dedf0ffb59fd8432fa60243b'; // ETH mainnet
export const NFT_CONTRACT_ADDRESS = '0x0E6377E923CCEC60b778F59A6F99F0C0d6fA0459'; // BSC Testnet
export const MINT_COST = BigNumber.from('80000000000000000'); // 0.08 ether
export const MAX_PER_WALLET = 200;

export const SHOWCASE1 = [
  '/assets/showcase1/1.jpg',
  '/assets/showcase1/2.jpg',
  '/assets/showcase1/3.jpg',
  '/assets/showcase1/4.jpg',
  '/assets/showcase1/5.jpg',
  '/assets/showcase1/6.jpg',
  '/assets/showcase1/7.jpg',
  '/assets/showcase1/8.jpg',
];
export const SHOWCASE2 = [
  '/assets/showcase2/1.jpg',
  '/assets/showcase2/2.jpg',
  '/assets/showcase2/3.jpg',
  '/assets/showcase2/4.jpg',
  '/assets/showcase2/5.jpg',
  '/assets/showcase2/6.jpg',
  '/assets/showcase2/7.jpg',
  '/assets/showcase2/8.jpg',
];