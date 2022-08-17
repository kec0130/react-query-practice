import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// import { defaultQueryClientOptions } from '../react-query/queryClient';

// make a function to generate a unique query client for each test
const generateQueryClient = () => {
  return new QueryClient();
};

export function renderWithQueryClient(
  ui: ReactElement,
  client?: QueryClient,
): RenderResult {
  const queryClient = client ?? generateQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
}

// for testing custom hooks
// export const createQueryClientWrapper = (): React.FC => {
//   const queryClient = generateQueryClient();
//   return ({ children }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };
