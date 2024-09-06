
import { LoadingProvider, useLoading } from './components/loadingProvider';
import AddProductForm from './components/addProductForm';
import ProductList from './components/productList';

const LoadingSpinner = () => (
  <div className="loading-spinner">Loading...</div>
);

const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <div className="App">
      <h1>Product Management</h1>
      {isLoading && <LoadingSpinner />}
      <AddProductForm />
      <ProductList />
    </div>
  );
};

const App = () => (
  <LoadingProvider>
    <AppContent />
  </LoadingProvider>
);

export default App;