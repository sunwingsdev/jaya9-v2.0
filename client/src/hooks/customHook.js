import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLazyGetUserByIdQuery } from "../redux/features/allApis/usersApi/usersApi";
import { setSingleUser } from "../redux/slices/authSlice";

export const useFetchUser = (userId) => {
  const dispatch = useDispatch();
  const [getSingleUser, { isLoading: isQueryLoading }] = useLazyGetUserByIdQuery();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    if (!userId) return;
    try {
      setIsLoading(true);
      const { data } = await getSingleUser(userId);
      dispatch(setSingleUser(data));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { 
    fetchUser, 
    isLoading: isLoading || isQueryLoading 
  };
};