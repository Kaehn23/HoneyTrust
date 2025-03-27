'use client';

import { getDefaultWallets, RainbowKitProvider as Provider, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia, polygon, polygonMumbai } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

const projectId = 'YOUR_PROJECT_ID'; // You'll need to replace this with your WalletConnect project ID

const { wallets } = getDefaultWallets({
  appName: 'HoneyTrust',
  projectId,
});

const config = createConfig({
  chains: [mainnet, sepolia, polygon, polygonMumbai],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
  },
});

const queryClient = new QueryClient();

export function RainbowKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Provider theme={darkTheme({
          accentColor: '#ffdb16',
          accentColorForeground: '#000000',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
          {children}
        </Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 