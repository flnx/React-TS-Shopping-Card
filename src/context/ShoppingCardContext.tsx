import { ReactNode, createContext, useContext, useState } from 'react';

type ShoppingCardProps = {
    children: ReactNode;
};

type CartItem = {
    id: number;
    quantity: number;
};

type ShoppingCardContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCardContext);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCardProvider = ({ children }: ShoppingCardProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            const hasItems = currItems.find((item) => item.id === id);

            if (hasItems == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        });
    };

    const decreaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            const hasItems = currItems.find((item) => item.id === id);

            if (hasItems?.quantity == 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
