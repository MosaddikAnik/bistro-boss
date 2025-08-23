import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCart = () => {
      const {data: cart} = useQuery({
            queryKey:("cart"),
            queryFn: async () => {
              const res = await axios.get("http://localhost:3000/carts")
              return res.data
            } 

      })
      return [cart]
};

export default useCart;