import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useBooks } from './useBooks';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

describe('useBooksHook', () => {
  it('should not perform fetch with empty params', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: {} }), { wrapper });

    await expect(waitFor(() => result.current.isFetchedAfterMount)).rejects.toThrow();
    expect(result.current.data?.pages.flatMap((page) => page.items) ?? []).toEqual([]);
  });

  it('should fetch when author is present', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: { inauthor: 'Rowling' } }), { wrapper });

    await waitFor(() => !result.current.isFetchedAfterMount);
    await waitFor(() => result.current.isFetchedAfterMount);
    expect(result.current.data?.pages.flatMap((page) => page.items) ?? []).not.toEqual([]);
  });

  it('should fetch when title is present', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: { intitle: 'Potter' } }), { wrapper });

    await waitFor(() => !result.current.isFetchedAfterMount);
    await waitFor(() => result.current.isFetchedAfterMount);
    expect(result.current.data?.pages.flatMap((page) => page.items) ?? []).not.toEqual([]);
  });

  it('should fetch when isbn is present', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: { isbn: '9788380082489' } }), { wrapper });

    await waitFor(() => !result.current.isFetchedAfterMount);
    await waitFor(() => result.current.isFetchedAfterMount);
    expect(result.current.data?.pages.flatMap((page) => page.items) ?? []).not.toEqual([]);
  });

  it('should fetch when all params are present', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: { intitle: 'Potter', inauthor: 'Rowling', isbn: '9788380082489' } }), { wrapper });

    await waitFor(() => !result.current.isFetchedAfterMount);
    await waitFor(() => result.current.isFetchedAfterMount);
    expect(result.current.data?.pages.flatMap((page) => page.items) ?? []).not.toEqual([]);
  });

  it('should fetch more', async () => {
    const { result, waitFor } = renderHook(() => useBooks({ q: { intitle: 'Potter' } }), { wrapper });

    await waitFor(() => !result.current.isFetchedAfterMount);
    await waitFor(() => result.current.isFetchedAfterMount);
    expect(result.current.data?.pages.length).toEqual(1);

    result.current.fetchNextPage();
    await waitFor(() => result.current.isFetching);
    await waitFor(() => !result.current.isFetching);

    expect(result.current.data?.pages.length).toEqual(2);
  });
});
