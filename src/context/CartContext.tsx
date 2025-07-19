import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartContextType {
  cart: number[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleCartItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // При ініціалізації читаємо кошик з localStorage
  const [cart, setCart] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // При зміні кошика — зберігаємо в localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: number) => {
    setCart(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(itemId => itemId !== id));
  };

  const toggleCartItem = (id: number) => {
    setCart(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
