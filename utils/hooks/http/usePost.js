import { useState, useEffect } from 'react';

const usePost = () => {
  const post = async (url = '', data = {}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  };

  return {
    post,
  };
};

export default usePost;
