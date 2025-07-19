import { BrowserRouter } from 'react-router-dom'
import  { StrictMode } from 'react'
import  { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store from './state/state.ts'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext.tsx';

const root = createRoot(document.getElementById("root")!);

export let rerenderMainTree = () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
          <App state={store._state} dispatch={store.dispatch.bind(store)} />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}

rerenderMainTree();

store.subscribe(rerenderMainTree); 
